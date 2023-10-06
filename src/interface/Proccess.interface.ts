export interface IProccess {
  id: number;
  promotionDay: string;
  times: string;
  currentPosition: string;
  newPosition: string;
  note: string;
  processStatus: string;
  acceptanceDate: string;
  additionalRequest: string;
  reasonForRefusal: string;
  rejectionDate: string;
  leaderId: string;
  employeeId: number;
}

export interface IProccessRes {
  code: number;
  message: string;
  data: IProccess[

  ];
}
