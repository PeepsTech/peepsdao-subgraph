// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PeepsFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PeepsFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PeepsFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PeepsFactory", id.toString(), this);
  }

  static load(id: string): PeepsFactory | null {
    return store.get("PeepsFactory", id) as PeepsFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get peepsId(): BigInt {
    let value = this.get("peepsId");
    return value.toBigInt();
  }

  set peepsId(value: BigInt) {
    this.set("peepsId", Value.fromBigInt(value));
  }

  get _summoner(): Bytes {
    let value = this.get("_summoner");
    return value.toBytes();
  }

  set _summoner(value: Bytes) {
    this.set("_summoner", Value.fromBytes(value));
  }

  get peepsmoloch(): Bytes {
    let value = this.get("peepsmoloch");
    return value.toBytes();
  }

  set peepsmoloch(value: Bytes) {
    this.set("peepsmoloch", Value.fromBytes(value));
  }

  get _minDonation(): BigInt {
    let value = this.get("_minDonation");
    return value.toBigInt();
  }

  set _minDonation(value: BigInt) {
    this.set("_minDonation", Value.fromBigInt(value));
  }

  get newContract(): string | null {
    let value = this.get("newContract");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set newContract(value: string | null) {
    if (value === null) {
      this.unset("newContract");
    } else {
      this.set("newContract", Value.fromString(value as string));
    }
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get peepsmolochAddress(): Bytes {
    let value = this.get("peepsmolochAddress");
    return value.toBytes();
  }

  set peepsmolochAddress(value: Bytes) {
    this.set("peepsmolochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get uintVote(): i32 {
    let value = this.get("uintVote");
    return value.toI32();
  }

  set uintVote(value: i32) {
    this.set("uintVote", Value.fromI32(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get peepsmolochAddress(): Bytes {
    let value = this.get("peepsmolochAddress");
    return value.toBytes();
  }

  set peepsmolochAddress(value: Bytes) {
    this.set("peepsmolochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get applicant(): string {
    let value = this.get("applicant");
    return value.toString();
  }

  set applicant(value: string) {
    this.set("applicant", Value.fromString(value));
  }

  get applicantAddress(): Bytes {
    let value = this.get("applicantAddress");
    return value.toBytes();
  }

  set applicantAddress(value: Bytes) {
    this.set("applicantAddress", Value.fromBytes(value));
  }

  get tributeOffered(): BigInt | null {
    let value = this.get("tributeOffered");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tributeOffered(value: BigInt | null) {
    if (value === null) {
      this.unset("tributeOffered");
    } else {
      this.set("tributeOffered", Value.fromBigInt(value as BigInt));
    }
  }

  get sharesRequested(): BigInt | null {
    let value = this.get("sharesRequested");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sharesRequested(value: BigInt | null) {
    if (value === null) {
      this.unset("sharesRequested");
    } else {
      this.set("sharesRequested", Value.fromBigInt(value as BigInt));
    }
  }

  get paymentRequested(): BigInt | null {
    let value = this.get("paymentRequested");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set paymentRequested(value: BigInt | null) {
    if (value === null) {
      this.unset("paymentRequested");
    } else {
      this.set("paymentRequested", Value.fromBigInt(value as BigInt));
    }
  }

  get tributeToken(): Bytes | null {
    let value = this.get("tributeToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tributeToken(value: Bytes | null) {
    if (value === null) {
      this.unset("tributeToken");
    } else {
      this.set("tributeToken", Value.fromBytes(value as Bytes));
    }
  }

  get paymentToken(): Bytes | null {
    let value = this.get("paymentToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set paymentToken(value: Bytes | null) {
    if (value === null) {
      this.unset("paymentToken");
    } else {
      this.set("paymentToken", Value.fromBytes(value as Bytes));
    }
  }

  get yesVotes(): BigInt | null {
    let value = this.get("yesVotes");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set yesVotes(value: BigInt | null) {
    if (value === null) {
      this.unset("yesVotes");
    } else {
      this.set("yesVotes", Value.fromBigInt(value as BigInt));
    }
  }

  get noVotes(): BigInt | null {
    let value = this.get("noVotes");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set noVotes(value: BigInt | null) {
    if (value === null) {
      this.unset("noVotes");
    } else {
      this.set("noVotes", Value.fromBigInt(value as BigInt));
    }
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }

  get details(): string | null {
    let value = this.get("details");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set details(value: string | null) {
    if (value === null) {
      this.unset("details");
    } else {
      this.set("details", Value.fromString(value as string));
    }
  }

  get maxTotalSharesAtYesVote(): BigInt | null {
    let value = this.get("maxTotalSharesAtYesVote");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxTotalSharesAtYesVote(value: BigInt | null) {
    if (value === null) {
      this.unset("maxTotalSharesAtYesVote");
    } else {
      this.set("maxTotalSharesAtYesVote", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Applicant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Applicant entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Applicant entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Applicant", id.toString(), this);
  }

  static load(id: string): Applicant | null {
    return store.get("Applicant", id) as Applicant | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get peepsmolochAddress(): Bytes {
    let value = this.get("peepsmolochAddress");
    return value.toBytes();
  }

  set peepsmolochAddress(value: Bytes) {
    this.set("peepsmolochAddress", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get member(): string {
    let value = this.get("member");
    return value.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get applicantAddress(): Bytes {
    let value = this.get("applicantAddress");
    return value.toBytes();
  }

  set applicantAddress(value: Bytes) {
    this.set("applicantAddress", Value.fromBytes(value));
  }

  get tributeOffered(): BigInt {
    let value = this.get("tributeOffered");
    return value.toBigInt();
  }

  set tributeOffered(value: BigInt) {
    this.set("tributeOffered", Value.fromBigInt(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get peepsmolochAddress(): Bytes {
    let value = this.get("peepsmolochAddress");
    return value.toBytes();
  }

  set peepsmolochAddress(value: Bytes) {
    this.set("peepsmolochAddress", Value.fromBytes(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get tributeAmount(): BigInt | null {
    let value = this.get("tributeAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tributeAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("tributeAmount");
    } else {
      this.set("tributeAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get didRagequit(): boolean {
    let value = this.get("didRagequit");
    return value.toBoolean();
  }

  set didRagequit(value: boolean) {
    this.set("didRagequit", Value.fromBoolean(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get submissions(): Array<string> {
    let value = this.get("submissions");
    return value.toStringArray();
  }

  set submissions(value: Array<string>) {
    this.set("submissions", Value.fromStringArray(value));
  }
}
