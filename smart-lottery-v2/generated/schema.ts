// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ClaimLotteryRewards extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClaimLotteryRewards entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ClaimLotteryRewards must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ClaimLotteryRewards", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ClaimLotteryRewards | null {
    return changetype<ClaimLotteryRewards | null>(
      store.get("ClaimLotteryRewards", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get winner(): Bytes {
    let value = this.get("winner");
    return value!.toBytes();
  }

  set winner(value: Bytes) {
    this.set("winner", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class EmitTicket extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EmitTicket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type EmitTicket must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EmitTicket", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): EmitTicket | null {
    return changetype<EmitTicket | null>(
      store.get("EmitTicket", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value!.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get ticket(): Array<BigInt> | null {
    let value = this.get("ticket");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set ticket(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("ticket");
    } else {
      this.set("ticket", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class EnterLottery extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EnterLottery entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type EnterLottery must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EnterLottery", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): EnterLottery | null {
    return changetype<EnterLottery | null>(
      store.get("EnterLottery", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value!.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class RequestLotteryWinningTicket extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save RequestLotteryWinningTicket entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type RequestLotteryWinningTicket must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "RequestLotteryWinningTicket",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static load(id: Bytes): RequestLotteryWinningTicket | null {
    return changetype<RequestLotteryWinningTicket | null>(
      store.get("RequestLotteryWinningTicket", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value!.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class RevealTicket extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RevealTicket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type RevealTicket must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RevealTicket", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): RevealTicket | null {
    return changetype<RevealTicket | null>(
      store.get("RevealTicket", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value!.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get ticket(): Array<BigInt> | null {
    let value = this.get("ticket");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set ticket(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("ticket");
    } else {
      this.set("ticket", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get nbMatching(): BigInt {
    let value = this.get("nbMatching");
    return value!.toBigInt();
  }

  set nbMatching(value: BigInt) {
    this.set("nbMatching", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class StartLottery extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StartLottery entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type StartLottery must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StartLottery", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): StartLottery | null {
    return changetype<StartLottery | null>(
      store.get("StartLottery", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class WinningTicketLotteryPicked extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save WinningTicketLotteryPicked entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type WinningTicketLotteryPicked must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WinningTicketLotteryPicked", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): WinningTicketLotteryPicked | null {
    return changetype<WinningTicketLotteryPicked | null>(
      store.get("WinningTicketLotteryPicked", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get lotteryNumber(): BigInt {
    let value = this.get("lotteryNumber");
    return value!.toBigInt();
  }

  set lotteryNumber(value: BigInt) {
    this.set("lotteryNumber", Value.fromBigInt(value));
  }

  get ticket(): Array<BigInt> | null {
    let value = this.get("ticket");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set ticket(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("ticket");
    } else {
      this.set("ticket", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
