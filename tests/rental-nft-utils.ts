import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  PropertyListingCreated,
  TenantProposalReclaimed,
  TenantProposalSubmitted,
  Transfer,
  WinnerSelected
} from "../generated/RentalNFT/RentalNFT"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPropertyListingCreatedEvent(
  propertyId: BigInt,
  landlord: Address,
  tokenURI: string
): PropertyListingCreated {
  let propertyListingCreatedEvent = changetype<PropertyListingCreated>(
    newMockEvent()
  )

  propertyListingCreatedEvent.parameters = new Array()

  propertyListingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  propertyListingCreatedEvent.parameters.push(
    new ethereum.EventParam("landlord", ethereum.Value.fromAddress(landlord))
  )
  propertyListingCreatedEvent.parameters.push(
    new ethereum.EventParam("tokenURI", ethereum.Value.fromString(tokenURI))
  )

  return propertyListingCreatedEvent
}

export function createTenantProposalReclaimedEvent(
  propertyId: BigInt,
  proposalId: BigInt,
  tenant: Address
): TenantProposalReclaimed {
  let tenantProposalReclaimedEvent = changetype<TenantProposalReclaimed>(
    newMockEvent()
  )

  tenantProposalReclaimedEvent.parameters = new Array()

  tenantProposalReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  tenantProposalReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  tenantProposalReclaimedEvent.parameters.push(
    new ethereum.EventParam("tenant", ethereum.Value.fromAddress(tenant))
  )

  return tenantProposalReclaimedEvent
}

export function createTenantProposalSubmittedEvent(
  propertyId: BigInt,
  proposalId: BigInt,
  tenant: Address,
  metadataURI: string
): TenantProposalSubmitted {
  let tenantProposalSubmittedEvent = changetype<TenantProposalSubmitted>(
    newMockEvent()
  )

  tenantProposalSubmittedEvent.parameters = new Array()

  tenantProposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  tenantProposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  tenantProposalSubmittedEvent.parameters.push(
    new ethereum.EventParam("tenant", ethereum.Value.fromAddress(tenant))
  )
  tenantProposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "metadataURI",
      ethereum.Value.fromString(metadataURI)
    )
  )

  return tenantProposalSubmittedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createWinnerSelectedEvent(
  propertyId: BigInt,
  proposalId: BigInt,
  tenant: Address
): WinnerSelected {
  let winnerSelectedEvent = changetype<WinnerSelected>(newMockEvent())

  winnerSelectedEvent.parameters = new Array()

  winnerSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyId",
      ethereum.Value.fromUnsignedBigInt(propertyId)
    )
  )
  winnerSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  winnerSelectedEvent.parameters.push(
    new ethereum.EventParam("tenant", ethereum.Value.fromAddress(tenant))
  )

  return winnerSelectedEvent
}
