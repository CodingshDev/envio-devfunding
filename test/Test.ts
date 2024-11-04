import assert from "assert";
import { 
  TestHelpers,
  DevFunding_BountyContribution
} from "generated";
const { MockDb, DevFunding } = TestHelpers;

describe("DevFunding contract BountyContribution event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for DevFunding contract BountyContribution event
  const event = DevFunding.BountyContribution.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("DevFunding_BountyContribution is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await DevFunding.BountyContribution.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDevFundingBountyContribution = mockDbUpdated.entities.DevFunding_BountyContribution.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDevFundingBountyContribution: DevFunding_BountyContribution = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      bountyId: event.params.bountyId,
      contributor: event.params.contributor,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDevFundingBountyContribution, expectedDevFundingBountyContribution, "Actual DevFundingBountyContribution should be the same as the expectedDevFundingBountyContribution");
  });
});
