import BN from 'bn.js'

import DepositManager from './root/DepositManager'
import RootChain from './root/RootChain'
import Registry from './root/Registry'
import WithdrawManager from './root/WithdrawManager'
import Web3Client from './common/Web3Client'
import { address, SendOptions } from './types/Common'
import ContractsBase from './common/ContractsBase'

export default class Matic extends ContractsBase {
  public web3Client: Web3Client
  public depositManager: DepositManager
  public rootChain: RootChain
  public withdrawManager: WithdrawManager
  public registry: Registry

  constructor(options: any = {}) {
    const web3Client = new Web3Client(
      options.parentProvider,
      options.maticProvider,
      options.parentDefaultOptions || {},
      options.maticDefaultOptions || {},
    )
    super(web3Client)
    this.web3Client = web3Client
    this.registry = new Registry(options.registry, this.web3Client)
    this.rootChain = new RootChain(options.rootChain, this.web3Client)
    this.depositManager = new DepositManager(
      options.depositManager,
      this.web3Client,
    )
    this.withdrawManager = new WithdrawManager(
      options.withdrawManager,
      this.rootChain,
      this.web3Client,
      this.registry,
    )
  }

  initialize() {
    return Promise.all([this.withdrawManager.initialize()])
  }

  setWallet(_wallet) {
    this.web3Client.wallet = _wallet
  }

  async transferERC20Tokens(
    token: address,
    to: address,
    amount: BN | string,
    options?: SendOptions,
  ) {
    if (options && (!options.from || !amount || !token || !to)) {
      throw new Error('options.from, to, token or amount is missing')
    }

    const txObject = this.getERC20TokenContract(
      token,
      options.parent,
    ).methods.transfer(to, this.encode(amount))

    const _options = await this._fillOptions(
      options,
      txObject,
      options.parent
        ? this.web3Client.getParentWeb3()
        : this.web3Client.getMaticWeb3(),
    )

    if (options.encodeAbi) {
      _options.data = txObject.encodeABI()
      _options.to = token
      return _options
    }

    return this.web3Client.send(txObject, _options)
  }

  async transferERC721Tokens(
    token: address,
    to: address,
    tokenId: string,
    options?: SendOptions,
  ) {
    if (options && (!options.from || !tokenId || !token || !to)) {
      throw new Error('options.from, to, token or tokenId is missing')
    }

    const txObject = this.getERC721TokenContract(
      token,
      options.parent,
    ).methods.transferFrom(options.from, to, tokenId)

    const _options = await this._fillOptions(
      options,
      txObject,
      options.parent
        ? this.web3Client.getParentWeb3()
        : this.web3Client.getMaticWeb3(),
    )

    if (options.encodeAbi) {
      _options.data = txObject.encodeABI()
      _options.to = token
      return _options
    }

    return this.web3Client.send(txObject, _options)
  }

  approveERC20TokensForDeposit(
    token: address,
    amount: BN | string,
    options?: SendOptions,
  ) {
    if (options && (!options.from || !amount || !token)) {
      throw new Error('options.from, token or amount is missing')
    }

    return this.depositManager.approveERC20(token, amount, options)
  }

  depositERC20ForUser(
    token: address,
    user: address,
    amount: BN | string,
    options?: SendOptions,
  ) {
    if (options && (!options.from || !amount || !token)) {
      throw new Error('options.from, token or amount is missing')
    }
    return this.depositManager.depositERC20ForUser(token, amount, user, options)
  }

  async safeDepositERC721Tokens(token: address, tokenId: BN, options?: SendOptions) {
    if (options && (!options.from || !tokenId || !token)) {
      throw new Error('options.from, token or tokenId is missing')
    }
    const txObject = this.getERC721TokenContract(
      token,
      true,
    ).methods.safeTransferFrom(options.from, this.depositManager.getAddress(), tokenId)

    const _options = await this._fillOptions(
      options,
      txObject,
      this.web3Client.getParentWeb3()
    )

    if (options.encodeAbi) {
      _options.data = txObject.encodeABI()
      _options.to = token
      return _options
    }

    return this.web3Client.send(txObject, _options)
  }

  startWithdraw(token: address, amount: BN | string, options?: SendOptions) {
    if (options && (!options.from || !amount || !token)) {
      throw new Error(`options.from, amount or token is missing`)
    }
    return this.withdrawManager.burnERC20Tokens(token, amount, options)
  }

  startWithdrawERC721(token: address, tokenId: string, options?: SendOptions) {
    if (options && (!options.from || !tokenId || !token)) {
      throw new Error(`options.from, tokenId or token is missing`)
    }
    return this.withdrawManager.burnERC721Token(token, tokenId, options)
  }

  withdraw(txHash: string, options?: SendOptions) {
    return this.withdrawManager.startExitWithBurntERC20Tokens(txHash, options)
  }

  confirmWithdrawERC721(txHash: string, options?: SendOptions) {
    return this.withdrawManager.startExitWithBurntERC721Tokens(txHash, options)
  }

  processExits(tokenAddress: string, options?: SendOptions) {
    return this.withdrawManager.processExits(tokenAddress, options)
  }
}
