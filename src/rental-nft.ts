import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PropertyListingCreated as PropertyListingCreatedEvent,
  TenantProposalReclaimed as TenantProposalReclaimedEvent,
  TenantProposalSubmitted as TenantProposalSubmittedEvent,
  Transfer as TransferEvent,
  WinnerSelected as WinnerSelectedEvent
} from "../generated/RentalNFT/RentalNFT"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  PropertyListingCreated,
  TenantProposalReclaimed,
  TenantProposalSubmitted,
  Transfer,
  WinnerSelected
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePropertyListingCreated(
  event: PropertyListingCreatedEvent
): void {
  let entity = new PropertyListingCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propertyId = event.params.propertyId
  entity.landlord = event.params.landlord
  entity.tokenURI = event.params.tokenURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTenantProposalReclaimed(
  event: TenantProposalReclaimedEvent
): void {
  let entity = new TenantProposalReclaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propertyId = event.params.propertyId
  entity.proposalId = event.params.proposalId
  entity.tenant = event.params.tenant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTenantProposalSubmitted(
  event: TenantProposalSubmittedEvent
): void {
  let entity = new TenantProposalSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propertyId = event.params.propertyId
  entity.proposalId = event.params.proposalId
  entity.tenant = event.params.tenant
  entity.metadataURI = event.params.metadataURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinnerSelected(event: WinnerSelectedEvent): void {
  let entity = new WinnerSelected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.propertyId = event.params.propertyId
  entity.proposalId = event.params.proposalId
  entity.tenant = event.params.tenant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
