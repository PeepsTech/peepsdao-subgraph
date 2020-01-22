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

export class AdminAdded extends EthereumEvent {
  get params(): AdminAdded__Params {
    return new AdminAdded__Params(this);
  }
}

export class AdminAdded__Params {
  _event: AdminAdded;

  constructor(event: AdminAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AdminRemoved extends EthereumEvent {
  get params(): AdminRemoved__Params {
    return new AdminRemoved__Params(this);
  }
}

export class AdminRemoved__Params {
  _event: AdminRemoved;

  constructor(event: AdminRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CanQuit extends EthereumEvent {
  get params(): CanQuit__Params {
    return new CanQuit__Params(this);
  }
}

export class CanQuit__Params {
  _event: CanQuit;

  constructor(event: CanQuit) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CancelProposal extends EthereumEvent {
  get params(): CancelProposal__Params {
    return new CancelProposal__Params(this);
  }
}

export class CancelProposal__Params {
  _event: CancelProposal;

  constructor(event: CancelProposal) {
    this._event = event;
  }

  get proposalIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get applicantAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MemberAdded extends EthereumEvent {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get _newMemberAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tributeAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ProcessProposal extends EthereumEvent {
  get params(): ProcessProposal__Params {
    return new ProcessProposal__Params(this);
  }
}

export class ProcessProposal__Params {
  _event: ProcessProposal;

  constructor(event: ProcessProposal) {
    this._event = event;
  }

  get proposalIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get applicant(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memberAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tributeOffered(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get sharesRequested(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get didPass(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class Ragequit extends EthereumEvent {
  get params(): Ragequit__Params {
    return new Ragequit__Params(this);
  }
}

export class Ragequit__Params {
  _event: Ragequit;

  constructor(event: Ragequit) {
    this._event = event;
  }

  get memberAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sharesToBurn(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenList(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class SponsorProposal extends EthereumEvent {
  get params(): SponsorProposal__Params {
    return new SponsorProposal__Params(this);
  }
}

export class SponsorProposal__Params {
  _event: SponsorProposal;

  constructor(event: SponsorProposal) {
    this._event = event;
  }

  get delegateKey(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get memberAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get proposalIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get proposalQueueIndex(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get startingPeriod(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class SubmitProposal extends EthereumEvent {
  get params(): SubmitProposal__Params {
    return new SubmitProposal__Params(this);
  }
}

export class SubmitProposal__Params {
  _event: SubmitProposal;

  constructor(event: SubmitProposal) {
    this._event = event;
  }

  get proposalIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get delegateKey(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memberAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get applicant(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tributeOffered(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tributeToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get sharesRequested(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get tokenToWhitelist(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get memberToKick(): Address {
    return this._event.parameters[8].value.toAddress();
  }

  get paymentRequested(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get paymentToken(): Address {
    return this._event.parameters[10].value.toAddress();
  }
}

export class SubmitVote extends EthereumEvent {
  get params(): SubmitVote__Params {
    return new SubmitVote__Params(this);
  }
}

export class SubmitVote__Params {
  _event: SubmitVote;

  constructor(event: SubmitVote) {
    this._event = event;
  }

  get proposalIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get delegateKey(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get memberAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get uintVote(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class SummonComplete extends EthereumEvent {
  get params(): SummonComplete__Params {
    return new SummonComplete__Params(this);
  }
}

export class SummonComplete__Params {
  _event: SummonComplete;

  constructor(event: SummonComplete) {
    this._event = event;
  }

  get summoner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenAdded extends EthereumEvent {
  get params(): TokenAdded__Params {
    return new TokenAdded__Params(this);
  }
}

export class TokenAdded__Params {
  _event: TokenAdded;

  constructor(event: TokenAdded) {
    this._event = event;
  }

  get _tokenToWhitelist(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpdateDelegateKey extends EthereumEvent {
  get params(): UpdateDelegateKey__Params {
    return new UpdateDelegateKey__Params(this);
  }
}

export class UpdateDelegateKey__Params {
  _event: UpdateDelegateKey;

  constructor(event: UpdateDelegateKey) {
    this._event = event;
  }

  get memberAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newDelegateKey(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PeepsMoloch__membersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    map.set("value5", EthereumValue.fromBoolean(this.value5));
    return map;
  }
}

export class PeepsMoloch__membersListResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    map.set("value5", EthereumValue.fromBoolean(this.value5));
    return map;
  }
}

export class PeepsMoloch__proposalsResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: BigInt;
  value7: Address;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: string;
  value12: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: BigInt,
    value7: Address,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: string,
    value12: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
    this.value12 = value12;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromAddress(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromAddress(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    map.set("value10", EthereumValue.fromUnsignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromString(this.value11));
    map.set("value12", EthereumValue.fromUnsignedBigInt(this.value12));
    return map;
  }
}

export class PeepsMoloch extends SmartContract {
  static bind(address: Address): PeepsMoloch {
    return new PeepsMoloch("PeepsMoloch", address);
  }

  addMember(_newMemberAddress: Address, _tributeAmount: BigInt): boolean {
    let result = super.call("addMember", [
      EthereumValue.fromAddress(_newMemberAddress),
      EthereumValue.fromUnsignedBigInt(_tributeAmount)
    ]);

    return result[0].toBoolean();
  }

  try_addMember(
    _newMemberAddress: Address,
    _tributeAmount: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("addMember", [
      EthereumValue.fromAddress(_newMemberAddress),
      EthereumValue.fromUnsignedBigInt(_tributeAmount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  addWhitelistedToken(_tokenToWhitelist: Address): boolean {
    let result = super.call("addWhitelistedToken", [
      EthereumValue.fromAddress(_tokenToWhitelist)
    ]);

    return result[0].toBoolean();
  }

  try_addWhitelistedToken(_tokenToWhitelist: Address): CallResult<boolean> {
    let result = super.tryCall("addWhitelistedToken", [
      EthereumValue.fromAddress(_tokenToWhitelist)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  approvedTokens(param0: BigInt): Address {
    let result = super.call("approvedTokens", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_approvedTokens(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("approvedTokens", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  canQuit(): boolean {
    let result = super.call("canQuit", []);

    return result[0].toBoolean();
  }

  try_canQuit(): CallResult<boolean> {
    let result = super.tryCall("canQuit", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  canRagequit(highestIndexYesVote: BigInt): boolean {
    let result = super.call("canRagequit", [
      EthereumValue.fromUnsignedBigInt(highestIndexYesVote)
    ]);

    return result[0].toBoolean();
  }

  try_canRagequit(highestIndexYesVote: BigInt): CallResult<boolean> {
    let result = super.tryCall("canRagequit", [
      EthereumValue.fromUnsignedBigInt(highestIndexYesVote)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  depositToken(): Address {
    let result = super.call("depositToken", []);

    return result[0].toAddress();
  }

  try_depositToken(): CallResult<Address> {
    let result = super.tryCall("depositToken", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  dilutionBound(): BigInt {
    let result = super.call("dilutionBound", []);

    return result[0].toBigInt();
  }

  try_dilutionBound(): CallResult<BigInt> {
    let result = super.tryCall("dilutionBound", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  emergencyExitWait(): BigInt {
    let result = super.call("emergencyExitWait", []);

    return result[0].toBigInt();
  }

  try_emergencyExitWait(): CallResult<BigInt> {
    let result = super.tryCall("emergencyExitWait", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentPeriod(): BigInt {
    let result = super.call("getCurrentPeriod", []);

    return result[0].toBigInt();
  }

  try_getCurrentPeriod(): CallResult<BigInt> {
    let result = super.tryCall("getCurrentPeriod", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getMemberProposalVote(memberAddress: Address, proposalIndex: BigInt): i32 {
    let result = super.call("getMemberProposalVote", [
      EthereumValue.fromAddress(memberAddress),
      EthereumValue.fromUnsignedBigInt(proposalIndex)
    ]);

    return result[0].toI32();
  }

  try_getMemberProposalVote(
    memberAddress: Address,
    proposalIndex: BigInt
  ): CallResult<i32> {
    let result = super.tryCall("getMemberProposalVote", [
      EthereumValue.fromAddress(memberAddress),
      EthereumValue.fromUnsignedBigInt(proposalIndex)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  getProposalQueueLength(): BigInt {
    let result = super.call("getProposalQueueLength", []);

    return result[0].toBigInt();
  }

  try_getProposalQueueLength(): CallResult<BigInt> {
    let result = super.tryCall("getProposalQueueLength", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  gracePeriodLength(): BigInt {
    let result = super.call("gracePeriodLength", []);

    return result[0].toBigInt();
  }

  try_gracePeriodLength(): CallResult<BigInt> {
    let result = super.tryCall("gracePeriodLength", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  guildBank(): Address {
    let result = super.call("guildBank", []);

    return result[0].toAddress();
  }

  try_guildBank(): CallResult<Address> {
    let result = super.tryCall("guildBank", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  hasVotingPeriodExpired(startingPeriod: BigInt): boolean {
    let result = super.call("hasVotingPeriodExpired", [
      EthereumValue.fromUnsignedBigInt(startingPeriod)
    ]);

    return result[0].toBoolean();
  }

  try_hasVotingPeriodExpired(startingPeriod: BigInt): CallResult<boolean> {
    let result = super.tryCall("hasVotingPeriodExpired", [
      EthereumValue.fromUnsignedBigInt(startingPeriod)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  isAdmin(account: Address): boolean {
    let result = super.call("isAdmin", [EthereumValue.fromAddress(account)]);

    return result[0].toBoolean();
  }

  try_isAdmin(account: Address): CallResult<boolean> {
    let result = super.tryCall("isAdmin", [EthereumValue.fromAddress(account)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  memberAccts(param0: BigInt): Address {
    let result = super.call("memberAccts", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_memberAccts(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("memberAccts", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  memberAddressByDelegateKey(param0: Address): Address {
    let result = super.call("memberAddressByDelegateKey", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_memberAddressByDelegateKey(param0: Address): CallResult<Address> {
    let result = super.tryCall("memberAddressByDelegateKey", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  members(param0: Address): PeepsMoloch__membersResult {
    let result = super.call("members", [EthereumValue.fromAddress(param0)]);

    return new PeepsMoloch__membersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean()
    );
  }

  try_members(param0: Address): CallResult<PeepsMoloch__membersResult> {
    let result = super.tryCall("members", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PeepsMoloch__membersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean()
      )
    );
  }

  membersList(param0: BigInt): PeepsMoloch__membersListResult {
    let result = super.call("membersList", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new PeepsMoloch__membersListResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean()
    );
  }

  try_membersList(param0: BigInt): CallResult<PeepsMoloch__membersListResult> {
    let result = super.tryCall("membersList", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PeepsMoloch__membersListResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean()
      )
    );
  }

  minDonation(): BigInt {
    let result = super.call("minDonation", []);

    return result[0].toBigInt();
  }

  try_minDonation(): CallResult<BigInt> {
    let result = super.tryCall("minDonation", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  periodDuration(): BigInt {
    let result = super.call("periodDuration", []);

    return result[0].toBigInt();
  }

  try_periodDuration(): CallResult<BigInt> {
    let result = super.tryCall("periodDuration", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  processingReward(): BigInt {
    let result = super.call("processingReward", []);

    return result[0].toBigInt();
  }

  try_processingReward(): CallResult<BigInt> {
    let result = super.tryCall("processingReward", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  proposalCount(): BigInt {
    let result = super.call("proposalCount", []);

    return result[0].toBigInt();
  }

  try_proposalCount(): CallResult<BigInt> {
    let result = super.tryCall("proposalCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  proposalDeposit(): BigInt {
    let result = super.call("proposalDeposit", []);

    return result[0].toBigInt();
  }

  try_proposalDeposit(): CallResult<BigInt> {
    let result = super.tryCall("proposalDeposit", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  proposalQueue(param0: BigInt): BigInt {
    let result = super.call("proposalQueue", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_proposalQueue(param0: BigInt): CallResult<BigInt> {
    let result = super.tryCall("proposalQueue", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  proposals(param0: BigInt): PeepsMoloch__proposalsResult {
    let result = super.call("proposals", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new PeepsMoloch__proposalsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toString(),
      result[12].toBigInt()
    );
  }

  try_proposals(param0: BigInt): CallResult<PeepsMoloch__proposalsResult> {
    let result = super.tryCall("proposals", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PeepsMoloch__proposalsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toString(),
        value[12].toBigInt()
      )
    );
  }

  proposedToKick(param0: Address): boolean {
    let result = super.call("proposedToKick", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_proposedToKick(param0: Address): CallResult<boolean> {
    let result = super.tryCall("proposedToKick", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  summoningTime(): BigInt {
    let result = super.call("summoningTime", []);

    return result[0].toBigInt();
  }

  try_summoningTime(): CallResult<BigInt> {
    let result = super.tryCall("summoningTime", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  tokenWhitelist(param0: Address): boolean {
    let result = super.call("tokenWhitelist", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_tokenWhitelist(param0: Address): CallResult<boolean> {
    let result = super.tryCall("tokenWhitelist", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  totalContributed(): BigInt {
    let result = super.call("totalContributed", []);

    return result[0].toBigInt();
  }

  try_totalContributed(): CallResult<BigInt> {
    let result = super.tryCall("totalContributed", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  totalShares(): BigInt {
    let result = super.call("totalShares", []);

    return result[0].toBigInt();
  }

  try_totalShares(): CallResult<BigInt> {
    let result = super.tryCall("totalShares", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  totalSharesRequested(): BigInt {
    let result = super.call("totalSharesRequested", []);

    return result[0].toBigInt();
  }

  try_totalSharesRequested(): CallResult<BigInt> {
    let result = super.tryCall("totalSharesRequested", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  votingPeriodLength(): BigInt {
    let result = super.call("votingPeriodLength", []);

    return result[0].toBigInt();
  }

  try_votingPeriodLength(): CallResult<BigInt> {
    let result = super.tryCall("votingPeriodLength", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get summoner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approvedTokens(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _periodDuration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _votingPeriodLength(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _gracePeriodLength(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _emergencyExitWait(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _proposalDeposit(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _dilutionBound(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _processingReward(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _minDonation(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get _canQuit(): boolean {
    return this._call.inputValues[10].value.toBoolean();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAdminCall extends EthereumCall {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }
}

export class AddMemberCall extends EthereumCall {
  get inputs(): AddMemberCall__Inputs {
    return new AddMemberCall__Inputs(this);
  }

  get outputs(): AddMemberCall__Outputs {
    return new AddMemberCall__Outputs(this);
  }
}

export class AddMemberCall__Inputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }

  get _newMemberAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tributeAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddMemberCall__Outputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddWhitelistedTokenCall extends EthereumCall {
  get inputs(): AddWhitelistedTokenCall__Inputs {
    return new AddWhitelistedTokenCall__Inputs(this);
  }

  get outputs(): AddWhitelistedTokenCall__Outputs {
    return new AddWhitelistedTokenCall__Outputs(this);
  }
}

export class AddWhitelistedTokenCall__Inputs {
  _call: AddWhitelistedTokenCall;

  constructor(call: AddWhitelistedTokenCall) {
    this._call = call;
  }

  get _tokenToWhitelist(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddWhitelistedTokenCall__Outputs {
  _call: AddWhitelistedTokenCall;

  constructor(call: AddWhitelistedTokenCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveQuitCall extends EthereumCall {
  get inputs(): ApproveQuitCall__Inputs {
    return new ApproveQuitCall__Inputs(this);
  }

  get outputs(): ApproveQuitCall__Outputs {
    return new ApproveQuitCall__Outputs(this);
  }
}

export class ApproveQuitCall__Inputs {
  _call: ApproveQuitCall;

  constructor(call: ApproveQuitCall) {
    this._call = call;
  }

  get memberAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApproveQuitCall__Outputs {
  _call: ApproveQuitCall;

  constructor(call: ApproveQuitCall) {
    this._call = call;
  }
}

export class CancelProposalCall extends EthereumCall {
  get inputs(): CancelProposalCall__Inputs {
    return new CancelProposalCall__Inputs(this);
  }

  get outputs(): CancelProposalCall__Outputs {
    return new CancelProposalCall__Outputs(this);
  }
}

export class CancelProposalCall__Inputs {
  _call: CancelProposalCall;

  constructor(call: CancelProposalCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelProposalCall__Outputs {
  _call: CancelProposalCall;

  constructor(call: CancelProposalCall) {
    this._call = call;
  }
}

export class ProcessProposalCall extends EthereumCall {
  get inputs(): ProcessProposalCall__Inputs {
    return new ProcessProposalCall__Inputs(this);
  }

  get outputs(): ProcessProposalCall__Outputs {
    return new ProcessProposalCall__Outputs(this);
  }
}

export class ProcessProposalCall__Inputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }

  get proposalIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ProcessProposalCall__Outputs {
  _call: ProcessProposalCall;

  constructor(call: ProcessProposalCall) {
    this._call = call;
  }
}

export class RagequitCall extends EthereumCall {
  get inputs(): RagequitCall__Inputs {
    return new RagequitCall__Inputs(this);
  }

  get outputs(): RagequitCall__Outputs {
    return new RagequitCall__Outputs(this);
  }
}

export class RagequitCall__Inputs {
  _call: RagequitCall;

  constructor(call: RagequitCall) {
    this._call = call;
  }

  get sharesToBurn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RagequitCall__Outputs {
  _call: RagequitCall;

  constructor(call: RagequitCall) {
    this._call = call;
  }
}

export class RemoveAdminCall extends EthereumCall {
  get inputs(): RemoveAdminCall__Inputs {
    return new RemoveAdminCall__Inputs(this);
  }

  get outputs(): RemoveAdminCall__Outputs {
    return new RemoveAdminCall__Outputs(this);
  }
}

export class RemoveAdminCall__Inputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAdminCall__Outputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }
}

export class SponsorProposalCall extends EthereumCall {
  get inputs(): SponsorProposalCall__Inputs {
    return new SponsorProposalCall__Inputs(this);
  }

  get outputs(): SponsorProposalCall__Outputs {
    return new SponsorProposalCall__Outputs(this);
  }
}

export class SponsorProposalCall__Inputs {
  _call: SponsorProposalCall;

  constructor(call: SponsorProposalCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SponsorProposalCall__Outputs {
  _call: SponsorProposalCall;

  constructor(call: SponsorProposalCall) {
    this._call = call;
  }
}

export class SubmitGuildKickProposalCall extends EthereumCall {
  get inputs(): SubmitGuildKickProposalCall__Inputs {
    return new SubmitGuildKickProposalCall__Inputs(this);
  }

  get outputs(): SubmitGuildKickProposalCall__Outputs {
    return new SubmitGuildKickProposalCall__Outputs(this);
  }
}

export class SubmitGuildKickProposalCall__Inputs {
  _call: SubmitGuildKickProposalCall;

  constructor(call: SubmitGuildKickProposalCall) {
    this._call = call;
  }

  get memberToKick(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get details(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SubmitGuildKickProposalCall__Outputs {
  _call: SubmitGuildKickProposalCall;

  constructor(call: SubmitGuildKickProposalCall) {
    this._call = call;
  }
}

export class SubmitProposalCall extends EthereumCall {
  get inputs(): SubmitProposalCall__Inputs {
    return new SubmitProposalCall__Inputs(this);
  }

  get outputs(): SubmitProposalCall__Outputs {
    return new SubmitProposalCall__Outputs(this);
  }
}

export class SubmitProposalCall__Inputs {
  _call: SubmitProposalCall;

  constructor(call: SubmitProposalCall) {
    this._call = call;
  }

  get applicant(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get sharesRequested(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tributeOffered(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tributeToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get paymentRequested(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get paymentToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get details(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class SubmitProposalCall__Outputs {
  _call: SubmitProposalCall;

  constructor(call: SubmitProposalCall) {
    this._call = call;
  }
}

export class SubmitVoteCall extends EthereumCall {
  get inputs(): SubmitVoteCall__Inputs {
    return new SubmitVoteCall__Inputs(this);
  }

  get outputs(): SubmitVoteCall__Outputs {
    return new SubmitVoteCall__Outputs(this);
  }
}

export class SubmitVoteCall__Inputs {
  _call: SubmitVoteCall;

  constructor(call: SubmitVoteCall) {
    this._call = call;
  }

  get proposalIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get uintVote(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class SubmitVoteCall__Outputs {
  _call: SubmitVoteCall;

  constructor(call: SubmitVoteCall) {
    this._call = call;
  }
}

export class UpdateDelegateKeyCall extends EthereumCall {
  get inputs(): UpdateDelegateKeyCall__Inputs {
    return new UpdateDelegateKeyCall__Inputs(this);
  }

  get outputs(): UpdateDelegateKeyCall__Outputs {
    return new UpdateDelegateKeyCall__Outputs(this);
  }
}

export class UpdateDelegateKeyCall__Inputs {
  _call: UpdateDelegateKeyCall;

  constructor(call: UpdateDelegateKeyCall) {
    this._call = call;
  }

  get newDelegateKey(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateDelegateKeyCall__Outputs {
  _call: UpdateDelegateKeyCall;

  constructor(call: UpdateDelegateKeyCall) {
    this._call = call;
  }
}
