import {
  ClaimLotteryRewards as ClaimLotteryRewardsEvent,
  EmitTicket as EmitTicketEvent,
  EnterLottery as EnterLotteryEvent,
  RequestLotteryWinningTicket as RequestLotteryWinningTicketEvent,
  RevealTicket as RevealTicketEvent,
  StartLottery as StartLotteryEvent,
  WinningTicketLotteryPicked as WinningTicketLotteryPickedEvent
} from "../generated/SmartLotteryV2/SmartLotteryV2"
import {
  ClaimLotteryRewards,
  EmitTicket,
  EnterLottery,
  RequestLotteryWinningTicket,
  RevealTicket,
  StartLottery,
  WinningTicketLotteryPicked
} from "../generated/schema"

export function handleClaimLotteryRewards(
  event: ClaimLotteryRewardsEvent
): void {
  let entity = new ClaimLotteryRewards(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmitTicket(event: EmitTicketEvent): void {
  let entity = new EmitTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.player = event.params.player
  entity.ticket = event.params.ticket

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnterLottery(event: EnterLotteryEvent): void {
  let entity = new EnterLottery(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.player = event.params.player

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestLotteryWinningTicket(
  event: RequestLotteryWinningTicketEvent
): void {
  let entity = new RequestLotteryWinningTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevealTicket(event: RevealTicketEvent): void {
  let entity = new RevealTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.player = event.params.player
  entity.ticket = event.params.ticket
  entity.nbMatching = event.params.nbMatching

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStartLottery(event: StartLotteryEvent): void {
  let entity = new StartLottery(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.startTime = event.params.startTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinningTicketLotteryPicked(
  event: WinningTicketLotteryPickedEvent
): void {
  let entity = new WinningTicketLotteryPicked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryNumber = event.params.lotteryNumber
  entity.ticket = event.params.ticket

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
