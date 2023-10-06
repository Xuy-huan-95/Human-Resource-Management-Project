export interface IProposal {
  id: number;
  employeeId: number;
  proposalDate: string;
  content: string;
  note: string;
  type: number;
  detailedDescription: string;
  proposalStatus: string;
  acceptanceDate: string;
  additionalRequest: string;
  reasonForRefusal: string;
  rejectionDate: string;
  leaderId: string;
}

export interface IProposalRes {
  code: number;
  message: string;
  data: IProposal;
}
