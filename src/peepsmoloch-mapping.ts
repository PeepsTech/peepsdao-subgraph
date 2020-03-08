import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  PeepsMoloch as Contract,
  AdminAdded,
  AdminRemoved,
  CanQuit,
  CancelProposal,
  FeeWithdraw,
  MemberAdded,
  ProcessProposal,
  Ragequit,
  SponsorProposal,
  SubmitProposal,
  SubmitVote,
  SummonComplete,
  TokenAdded,
  UpdateDelegateKey,
  Withdraw,
} from "./types/peepsmoloch";
import { Proposal, Member, Vote, Applicant, Admin} from './types/schema';
import { PeepsFactory } from "../generated/schema";

export function handleSummonComplete(event: SummonComplete): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = PeepsFactory.load(event.address.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new PeepsFactory(event.address.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  //entity.account = event.params.account

  // Entities can be written to the store with `.save()`
  entity.save()

  let memberId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.summoner.toHex());

    // let member = new Member(event.params.summoner.toHex());
    let member = new Member(memberId);
    member.peepsmolochAddress = event.address;
    member.memberAddress = event.params.summoner;
    member.delegateKey = event.params.summoner;
    member.shares = BigInt.fromI32(0);
    member.tributeAmount = BigInt.fromI32(0);
    member.isActive = true;
    member.didRagequit = false;
    member.votes = new Array<string>();
    member.submissions = new Array<string>();
    member.save();

  let adminId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.summoner.toHex());

  let admin = new Admin(adminId);
    admin.peepsmolochAddress = event.address;
    admin.adminAddress = event.params.summoner;
    admin.isAdmin = true;
    admin.save();
}

export function handleAdminAdded(event: AdminAdded): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

  let adminId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.account.toHex());

  let admin = Admin.load(adminId);

  let memberId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.account.toHex());

  let member = Member.load(memberId);

  // let member = Member.load(event.params.applicant.toHex());
  if (memberId == null) {
    let newAdmin = new Admin(adminId);
    newAdmin.peepsmolochAddress = event.address;
    newAdmin.adminAddress = event.params.account;
    newAdmin.isAdmin = true;
    newAdmin.save();
  } else {
    let admin = new Admin(adminId);
    admin.peepsmolochAddress = event.address;
    admin.adminAddress = event.params.account;
    admin.isAdmin = true;
    admin.member = event.params.account.toHex();
    admin.save();
  }

}

export function handleAdminRemoved(event: AdminRemoved): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let adminId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.account.toString());

    let admin = Admin.load(adminId);
    admin.isAdmin = false;
    admin.save();

}

export function handleCanQuit(event: CanQuit): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let memberId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.member.toString());

    let member = Member.load(memberId);
    member.canQuit = true;
    member.save();

}

export function handleCancelProposal(event: CancelProposal): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let proposalId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.proposalIndex.toString());

    let proposal = Proposal.load(proposalId);
    // let proposal = Proposal.load(event.params.proposalIndex.toString());
    proposal.aborted = true;
    proposal.save();

}

export function handleMemberAdded(event: MemberAdded): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params._newMemberAddress.toHex());

  let member = Member.load(memberId);
  // let member = Member.load(event.params.applicant.toHex());
  if (member == null) {
    let newMember = new Member(memberId);
    newMember.peepsmolochAddress = event.address;
    newMember.memberAddress = event.params._newMemberAddress;
    newMember.delegateKey = event.params._newMemberAddress;
    newMember.shares = event.params._shares;
    newMember.isActive = true;
    newMember.tributeAmount = event.params._tributeAmount;
    newMember.didRagequit = false;
    newMember.votes = new Array<string>();
    newMember.submissions = new Array<string>();
    newMember.save();
  } else {
    member.shares = member.shares.plus(event.params._shares);
    member.tributeAmount = member.tributeAmount.plus(event.params._tributeAmount);
    member.save();
  }
}

export function handleProcessProposal(event: ProcessProposal): void {
  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let proposalId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.proposalIndex.toString());

    // let proposal = Proposal.load(event.params.proposalIndex.toString());
    let proposal = Proposal.load(proposalId);
    proposal.peepsmolochAddress = event.address;
    proposal.timestamp = event.block.timestamp.toString();
    proposal.proposalIndex = event.params.proposalIndex;
    proposal.didPass = event.params.didPass;
    proposal.sponsored = true;
    proposal.processed = true;
    proposal.votes = [];
    proposal.save();

}

export function handleRagequit(event: Ragequit): void {
  let entity = PeepsFactory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (entity.newPeeps == null) {
    return;
  }

  let memberId = event.address
    .toHex()
    .concat("-")
    .concat(event.params.memberAddress.toHex());

  // let member = Member.load(event.params.memberAddress.toHex());
  let member = Member.load(memberId);
  member.shares = member.shares.minus(event.params.sharesToBurn);
  if (member.shares.equals(new BigInt(0))) {
    member.isActive = false;
  }
  member.save();
}

export function handleSponsorProposal(event: SponsorProposal): void {
  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let proposalId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.proposalIndex.toString());

    // let proposal = Proposal.load(event.params.proposalIndex.toString());
    let proposal = Proposal.load(proposalId);
    proposal.peepsmolochAddress = event.address;
    proposal.timestamp = event.block.timestamp.toString();
    proposal.proposalIndex = event.params.proposalIndex;
    proposal.startingPeriod = event.params.startingPeriod;
    proposal.processed = false;
    proposal.sponsored = true;
    proposal.didPass = false;
    proposal.votes = [];
    proposal.save();

}

export function handleSubmitProposal(event: SubmitProposal): void {

  let entity = PeepsFactory.load(event.address.toHex());
  if (entity.newPeeps == null) {
    return;
  }

    // let proposal = new Proposal(event.params.proposalIndex.toString());
    let proposalId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.proposalId.toString());

    let proposal = new Proposal(proposalId);
    proposal.peepsmolochAddress = event.address;
    proposal.timestamp = event.block.timestamp.toString();
    proposal.proposalCount = event.params.proposalId;
    proposal.applicantAddress = event.params.applicant;
    proposal.tributeToken = event.params.tributeToken;
    proposal.paymentToken = event.params.paymentToken;
    proposal.tributeOffered = event.params.tributeOffered;
    proposal.sharesRequested = event.params.sharesRequested;
    proposal.paymentRequested = event.params.paymentRequested;
    proposal.yesVotes = BigInt.fromI32(0);
    proposal.noVotes = BigInt.fromI32(0);
    proposal.processed = false;
    proposal.sponsored = false;
    proposal.didPass = false;
    proposal.aborted = false;
    proposal.votes = new Array<string>();
    proposal.save();

    let applicantId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.applicant.toHex());

    let applicant = Applicant.load(applicantId);
    // let member = Member.load(event.params.applicant.toHex());
    if (applicant == null) {
      let newApplicant = new Applicant(applicantId);
      newApplicant.peepsmolochAddress = event.address;
      newApplicant.applicantAddress = event.params.applicant;
      newApplicant.tributeOffered = event.params.tributeOffered;
      newApplicant.sharesRequested = event.params.sharesRequested;
      newApplicant.paymentRequested = event.params.paymentRequested;
      newApplicant.tributeToken = event.params.tributeToken;
      newApplicant.paymentToken = event.params.paymentToken;
      newApplicant.userTokenBalance = BigInt.fromI32(0);
      newApplicant.votes = new Array<string>();
      newApplicant.proposal = event.params.proposalId.toString();
      newApplicant.save();
    } else {
      applicant.tributeOffered = event.params.tributeOffered;
      applicant.sharesRequested = event.params.sharesRequested;
      applicant.paymentRequested = event.params.paymentRequested;
      applicant.tributeToken = event.params.tributeToken;
      applicant.paymentToken = event.params.paymentToken;
      applicant.userTokenBalance = applicant.userTokenBalance;
      applicant.votes = new Array<string>();
      applicant.proposal = event.params.proposalId.toString();
      applicant.save();
    }
}

export function handleSubmitVote(event: SubmitVote): void {

  let entity = PeepsFactory.load(event.address.toHex());
  //log.info("entity: {}, entity.peepsmoloch - line 262: {}", [event.address.toHex(), entity.address.toHexString()]);
    if (entity.newPeeps == null) {
      return;
    }

    let voteID = event.params.memberAddress
        .toHex()
        .concat("-")
        .concat(event.params.proposalIndex.toString());

      let vote = new Vote(voteID);
      vote.peepsmolochAddress = event.address;
      vote.timestamp = event.block.timestamp.toString();
      vote.proposalIndex = event.params.proposalIndex;
      vote.delegateKey = event.params.delegateKey;
      vote.memberAddress = event.params.memberAddress;
      vote.member = event.params.memberAddress.toHex();
      vote.uintVote = event.params.uintVote;
      vote.proposal = event.params.proposalIndex.toString();
      vote.save();


      let proposalId = event.address
        .toHex()
        .concat("-")
        .concat(event.params.proposalIndex.toString());

      // let proposal = Proposal.load(event.params.proposalIndex.toString());
      let proposal = Proposal.load(proposalId);
      //log.info("handleSubmitVote - proposal line 326: {}", [proposal.id.toString()]);


      let memberId = event.address
        .toHex()
        .concat("-")
        .concat(event.params.memberAddress.toHex());

      let member = Member.load(memberId);
      //log.info("handleSubmitVote - proposal line 328: {}", [member.id.toString()]);

      if (event.params.uintVote == 1) {
        proposal.yesVotes = proposal.yesVotes.plus(BigInt.fromI32(1));
        proposal.yesShares = proposal.yesShares.plus(member.shares);
      }
      if (event.params.uintVote == 2) {
        proposal.noVotes = proposal.noVotes.plus(BigInt.fromI32(1));
        proposal.noShares = proposal.noShares.plus(member.shares);
      }

      let proposalVotes = proposal.votes;
      proposalVotes.push(voteID);
      proposal.votes = proposalVotes;
      //log.info("handleSubmitVote - proposalvotes line 300: {}", [proposal.votes.toString()]);
      proposal.save();

      let memberVotes = member.votes;
      memberVotes.push(voteID);
      member.votes = memberVotes;
      member.save();
}

export function handleTokenAdded(event: TokenAdded): void {}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {
  let peepsfactory = PeepsFactory.load(event.address.toHexString());
 //  log.info(
 //   "++++++++ update delegate. moloch: {}, factory.newPeeps: {}, factory.moloch: {}",
 //   [event.address.toHex(), peepsfactory.newPeeps, peepsfactory.peepsmoloch.toHexString()]
 // );
 if (peepsfactory.newPeeps == null) {
   return;
 }

 let memberId = event.address
   .toHex()
   .concat("-")
   .concat(event.params.memberAddress.toHex());

 let member = Member.load(memberId);
 // let member = Member.load(event.params.memberAddress.toHex());
 member.delegateKey = event.params.newDelegateKey;
 member.save();
}

export function handleWithdraw(event: Withdraw): void {
  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newPeeps == null) {
      return;
    }

    let applicantId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.account.toHex());

      let applicant = Applicant.load(applicantId);
      applicant.userTokenBalance = applicant.userTokenBalance.minus(event.params.amount); //need to check balance and add to balance
      applicant.save();

}
