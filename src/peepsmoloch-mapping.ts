import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  PeepsMoloch as Contract,
  AdminAdded,
  AdminRemoved,
  CanQuit,
  CancelProposal,
  MemberAdded,
  ProcessProposal,
  Ragequit,
  SponsorProposal,
  SubmitProposal,
  SubmitVote,
  SummonComplete,
  TokenAdded,
  UpdateDelegateKey
} from "./types/peepsmoloch";
import { Proposal, Member, Vote, Applicant} from './types/schema';
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
    member.shares = event.params.shares;
    member.tributeAmount = BigInt.fromI32(0);
    member.isActive = true;
    member.didRagequit = false;
    member.votes = new Array<string>();
    member.submissions = new Array<string>();
    member.save();
}

export function handleAdminAdded(event: AdminAdded): void {}

export function handleAdminRemoved(event: AdminRemoved): void {}

export function handleCanQuit(event: CanQuit): void {}

export function handleCancelProposal(event: CancelProposal): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newContract == "0") {
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

    let applicantId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.applicantAddress.toHex());

}

export function handleMemberAdded(event: MemberAdded): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newContract == "0") {
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
    if (entity.newContract == "0") {
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
    proposal.applicant = event.params.applicant.toHex();
    proposal.applicantAddress = event.params.applicant;
    proposal.tributeOffered = event.params.tributeOffered;
    proposal.sharesRequested = event.params.sharesRequested;
    proposal.didPass = true;
    proposal.votes = [];
    proposal.save();

    if (event.params.didPass) {
      let applicantId = event.address
        .toHex()
        .concat("-")
        .concat(event.params.applicant.toHex());

      // let applicant = Applicant.load(event.params.applicant.toHex());
      let applicant = Applicant.load(applicantId);
      applicant.didPass = true;
      applicant.save();
    }
}

export function handleRagequit(event: Ragequit): void {
  let entity = PeepsFactory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (entity.newContract == "0") {
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

}

export function handleSubmitProposal(event: SubmitProposal): void {

  let entity = PeepsFactory.load(event.address.toHex());
  // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
  if (entity.newContract == "0") {
    return;
  }

  // get information directly from contract
    // struct Proposal {
    //     address proposer; // the member who submitted the proposal
    //     address applicant; // the applicant who wishes to become a member - this key will be used for withdrawals
    //     uint256 sharesRequested; // the # of shares the applicant is requesting
    //     uint256 startingPeriod; // the period in which voting can start for this proposal
    //     uint256 yesVotes; // the total number of YES votes for this proposal
    //     uint256 noVotes; // the total number of NO votes for this proposal
    //     bool processed; // true only if the proposal has been processed
    //     bool didPass; // true only if the proposal passed
    //     bool aborted; // true only if applicant calls "abort" fn before end of voting period
    //     uint256 tokenTribute; // amount of tokens offered as tribute
    //     string details; // proposal details - could be IPFS hash, plaintext, or JSON
    //     uint256 maxTotalSharesAtYesVote; // the maximum # of total shares encountered at a yes vote on this proposal
    //     mapping (address => Vote) votesByMember; // the votes on this proposal by each member
    // }
    // let contract = Contract.bind(event.address);
    // let proposalFromContract = contract.proposalQueue(event.params.proposalIndex);
    //let startingPeriod = proposalFromContract.value4;
    //let details = proposalFromContract.value21;

    // let proposal = new Proposal(event.params.proposalIndex.toString());
    let proposalId = event.address
      .toHex()
      .concat("-")
      .concat(event.params.proposalIndex.toString());

    let proposal = new Proposal(proposalId);
    proposal.peepsmolochAddress = event.address;
    proposal.timestamp = event.block.timestamp.toString();
    proposal.proposalIndex = event.params.proposalIndex;
    proposal.delegateKey = event.params.delegateKey;
    proposal.applicant = event.params.applicant.toHex();
    proposal.applicantAddress = event.params.applicant;
    proposal.tributeToken = event.params.tributeToken;
    proposal.paymentToken = event.params.paymentToken;
    proposal.tributeOffered = event.params.tributeOffered;
    proposal.sharesRequested = event.params.sharesRequested;
    proposal.paymentRequested = event.params.paymentRequested;
    proposal.yesVotes = BigInt.fromI32(0);
    proposal.noVotes = BigInt.fromI32(0);
    proposal.processed = false;
    proposal.didPass = false;
    proposal.aborted = false;
    proposal.votes = new Array<string>();
    proposal.save();

let memberId = event.address
  .toHex()
  .concat("-")
  .concat(event.params.memberAddress.toHex());

let member = Member.load(memberId);
let submission = event.params.proposalIndex.toString();
let memberSubmissions = member.submissions;
memberSubmissions.push(submission);
member.submissions = memberSubmissions;
member.save();

}

export function handleSubmitVote(event: SubmitVote): void {

  let entity = PeepsFactory.load(event.address.toHex());
    // log.info("++++++++ factory.newContract: {}", [factory.newContract]);
    if (entity.newContract == "0") {
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
      vote.uintVote = event.params.uintVote;
      vote.proposal = event.params.proposalIndex.toString();
      vote.member = event.params.memberAddress.toHex();
      vote.save();

      let proposalId = event.address
        .toHex()
        .concat("-")
        .concat(event.params.proposalIndex.toString());

      // let proposal = Proposal.load(event.params.proposalIndex.toString());
      let proposal = Proposal.load(proposalId);
      if (event.params.uintVote == 1) {
        proposal.yesVotes = proposal.yesVotes.plus(BigInt.fromI32(1));
      }
      if (event.params.uintVote == 2) {
        proposal.noVotes = proposal.noVotes.plus(BigInt.fromI32(1));
      }

      let proposalVotes = proposal.votes;
      proposalVotes.push(voteID);
      proposal.votes = proposalVotes;
      proposal.save();

      // let applicant = Applicant.load(proposal.applicant);
      let applicantId = event.address
        .toHex()
        .concat("-")
        .concat(proposal.applicant);

      let applicant = Applicant.load(applicantId);
      let applicantVotes = applicant.votes;
      applicantVotes.push(voteID);
      applicant.votes = applicantVotes;
      applicant.save();

      let memberId = event.address
        .toHex()
        .concat("-")
        .concat(event.params.memberAddress.toHex());

      // let member = Member.load(event.params.memberAddress.toHex());
      let member = Member.load(memberId);
      let memberVotes = member.votes;
      memberVotes.push(voteID);
      member.votes = memberVotes;
      member.save();

}

export function handleTokenAdded(event: TokenAdded): void {}

export function handleUpdateDelegateKey(event: UpdateDelegateKey): void {
  let peepsfactory = PeepsFactory.load(event.address.toHexString());
  log.info(
   "++++++++ update delegate. moloch: {}, factory.newContract: {}, factory.moloch: {}",
   [event.address.toHex(), peepsfactory.newContract, peepsfactory.peepsmoloch.toHexString()]
 );
 if (peepsfactory.newContract == "0") {
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
