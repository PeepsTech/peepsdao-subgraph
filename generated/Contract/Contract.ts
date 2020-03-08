// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NewPeepsMoloch extends EthereumEvent {
  get params(): NewPeepsMoloch__Params {
    return new NewPeepsMoloch__Params(this);
  }
}

export class NewPeepsMoloch__Params {
  _event: NewPeepsMoloch;

  constructor(event: NewPeepsMoloch) {
    this._event = event;
  }

  get _summoner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPeeps(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  createPeepsMoloch(
    _summoner: Address,
    _peepsWallet: Address,
    _approvedTokens: Array<Address>,
    _periodDuration: BigInt,
    _votingPeriodLength: BigInt,
    _gracePeriodLength: BigInt,
    _emergencyExitWait: BigInt,
    _proposalDeposit: BigInt,
    _dilutionBound: BigInt,
    _processingReward: BigInt,
    _minDonation: BigInt,
    _adminFee: BigInt,
    _canQuit: boolean
  ): Address {
    let result = super.call("createPeepsMoloch", [
      EthereumValue.fromAddress(_summoner),
      EthereumValue.fromAddress(_peepsWallet),
      EthereumValue.fromAddressArray(_approvedTokens),
      EthereumValue.fromUnsignedBigInt(_periodDuration),
      EthereumValue.fromUnsignedBigInt(_votingPeriodLength),
      EthereumValue.fromUnsignedBigInt(_gracePeriodLength),
      EthereumValue.fromUnsignedBigInt(_emergencyExitWait),
      EthereumValue.fromUnsignedBigInt(_proposalDeposit),
      EthereumValue.fromUnsignedBigInt(_dilutionBound),
      EthereumValue.fromUnsignedBigInt(_processingReward),
      EthereumValue.fromUnsignedBigInt(_minDonation),
      EthereumValue.fromUnsignedBigInt(_adminFee),
      EthereumValue.fromBoolean(_canQuit)
    ]);

    return result[0].toAddress();
  }

  try_createPeepsMoloch(
    _summoner: Address,
    _peepsWallet: Address,
    _approvedTokens: Array<Address>,
    _periodDuration: BigInt,
    _votingPeriodLength: BigInt,
    _gracePeriodLength: BigInt,
    _emergencyExitWait: BigInt,
    _proposalDeposit: BigInt,
    _dilutionBound: BigInt,
    _processingReward: BigInt,
    _minDonation: BigInt,
    _adminFee: BigInt,
    _canQuit: boolean
  ): CallResult<Address> {
    let result = super.tryCall("createPeepsMoloch", [
      EthereumValue.fromAddress(_summoner),
      EthereumValue.fromAddress(_peepsWallet),
      EthereumValue.fromAddressArray(_approvedTokens),
      EthereumValue.fromUnsignedBigInt(_periodDuration),
      EthereumValue.fromUnsignedBigInt(_votingPeriodLength),
      EthereumValue.fromUnsignedBigInt(_gracePeriodLength),
      EthereumValue.fromUnsignedBigInt(_emergencyExitWait),
      EthereumValue.fromUnsignedBigInt(_proposalDeposit),
      EthereumValue.fromUnsignedBigInt(_dilutionBound),
      EthereumValue.fromUnsignedBigInt(_processingReward),
      EthereumValue.fromUnsignedBigInt(_minDonation),
      EthereumValue.fromUnsignedBigInt(_adminFee),
      EthereumValue.fromBoolean(_canQuit)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getPeepsMolochCount(): BigInt {
    let result = super.call("getPeepsMolochCount", []);

    return result[0].toBigInt();
  }

  try_getPeepsMolochCount(): CallResult<BigInt> {
    let result = super.tryCall("getPeepsMolochCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  PeepsMolochs(param0: BigInt): Address {
    let result = super.call("PeepsMolochs", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_PeepsMolochs(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("PeepsMolochs", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class CreatePeepsMolochCall extends EthereumCall {
  get inputs(): CreatePeepsMolochCall__Inputs {
    return new CreatePeepsMolochCall__Inputs(this);
  }

  get outputs(): CreatePeepsMolochCall__Outputs {
    return new CreatePeepsMolochCall__Outputs(this);
  }
}

export class CreatePeepsMolochCall__Inputs {
  _call: CreatePeepsMolochCall;

  constructor(call: CreatePeepsMolochCall) {
    this._call = call;
  }

  get _summoner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _peepsWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _approvedTokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _periodDuration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _votingPeriodLength(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _gracePeriodLength(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _emergencyExitWait(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _proposalDeposit(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _dilutionBound(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _processingReward(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get _minDonation(): BigInt {
    return this._call.inputValues[10].value.toBigInt();
  }

  get _adminFee(): BigInt {
    return this._call.inputValues[11].value.toBigInt();
  }

  get _canQuit(): boolean {
    return this._call.inputValues[12].value.toBoolean();
  }
}

export class CreatePeepsMolochCall__Outputs {
  _call: CreatePeepsMolochCall;

  constructor(call: CreatePeepsMolochCall) {
    this._call = call;
  }

  get newPeeps(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
