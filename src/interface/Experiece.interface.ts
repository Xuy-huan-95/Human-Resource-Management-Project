export interface IExperience {
  id: number;
  companyName: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  leavingReason: string;
  companyAddress: string;
}

export interface IExperienceRes {
  code: number;
  message: string;
  data: IExperience;
}
