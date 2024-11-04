/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DevFunding,
  DevFunding_BountyContribution,
  DevFunding_BountyCreated,
  DevFunding_DevProfileCreated,
  DevFunding_DisputeRaised,
  DevFunding_DisputeResolved,
  DevFunding_GrantClaimed,
  DevFunding_GrantCreated,
  DevFunding_OwnershipTransferred,
  DevFunding_PlatformFeeCollected,
  DevFunding_PremiumPurchased,
  DevFunding_ReferralPaid,
  DevFunding_Voted,
} from "generated";

DevFunding.BountyContribution.handler(async ({ event, context }) => {
  const entity: DevFunding_BountyContribution = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bountyId: event.params.bountyId,
    contributor: event.params.contributor,
    amount: event.params.amount,
  };

  context.DevFunding_BountyContribution.set(entity);
});

DevFunding.BountyCreated.handler(async ({ event, context }) => {
  const entity: DevFunding_BountyCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bountyId: event.params.bountyId,
    creator: event.params.creator,
    amount: event.params.amount,
    issueLink: event.params.issueLink,
    deadline: event.params.deadline,
    referrer: event.params.referrer,
  };

  context.DevFunding_BountyCreated.set(entity);
});

DevFunding.DevProfileCreated.handler(async ({ event, context }) => {
  const entity: DevFunding_DevProfileCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    developer: event.params.developer,
    githubHandle: event.params.githubHandle,
  };

  context.DevFunding_DevProfileCreated.set(entity);
});

DevFunding.DisputeRaised.handler(async ({ event, context }) => {
  const entity: DevFunding_DisputeRaised = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    raisedBy: event.params.raisedBy,
  };

  context.DevFunding_DisputeRaised.set(entity);
});

DevFunding.DisputeResolved.handler(async ({ event, context }) => {
  const entity: DevFunding_DisputeResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    outcome: event.params.outcome,
  };

  context.DevFunding_DisputeResolved.set(entity);
});

DevFunding.GrantClaimed.handler(async ({ event, context }) => {
  const entity: DevFunding_GrantClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    grantId: event.params.grantId,
    developer: event.params.developer,
  };

  context.DevFunding_GrantClaimed.set(entity);
});

DevFunding.GrantCreated.handler(async ({ event, context }) => {
  const entity: DevFunding_GrantCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    grantId: event.params.grantId,
    creator: event.params.creator,
    amount: event.params.amount,
  };

  context.DevFunding_GrantCreated.set(entity);
});

DevFunding.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: DevFunding_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.DevFunding_OwnershipTransferred.set(entity);
});

DevFunding.PlatformFeeCollected.handler(async ({ event, context }) => {
  const entity: DevFunding_PlatformFeeCollected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.DevFunding_PlatformFeeCollected.set(entity);
});

DevFunding.PremiumPurchased.handler(async ({ event, context }) => {
  const entity: DevFunding_PremiumPurchased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    duration: event.params.duration,
  };

  context.DevFunding_PremiumPurchased.set(entity);
});

DevFunding.ReferralPaid.handler(async ({ event, context }) => {
  const entity: DevFunding_ReferralPaid = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    referrer: event.params.referrer,
    referred: event.params.referred,
    amount: event.params.amount,
  };

  context.DevFunding_ReferralPaid.set(entity);
});

DevFunding.Voted.handler(async ({ event, context }) => {
  const entity: DevFunding_Voted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    voter: event.params.voter,
    vote: event.params.vote,
  };

  context.DevFunding_Voted.set(entity);
});
