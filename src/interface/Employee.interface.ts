import { ICertificate } from "./Certificate.interface"
import { IFamily } from "./Family.interface"

export interface IEmployeeFamilyDtos {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: number;
  relationShip: number;
  citizenIdentificationNumber: string;
  address: string;
  email: string;
  employeeId: number;
  phoneNumber: string;
}

export interface ICertificatesDto {
  id: number;
  certificateName: string;
  issueDate: number;
  content: string;
  field: string;
  employeeId: number;
}

export interface IEployeeRes {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: number;
    employeeFamilyDtos: null;
    certificatesDto: null;
    ethnic: string;
    religion: string;
    appointmentDate: number;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: null;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: string;
    reasonForEnding: string;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  }[];
  totalElements: number;
}

export interface IEmployeeApiResByID {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: null;
    employeeFamilyDtos: IEmployeeFamilyDtos[];
    certificatesDto: ICertificatesDto[];
    ethnic: string;
    religion: string;
    appointmentDate: null;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: string;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: null;
    reasonForEnding: null;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  code: string;
  gender: number;
  dateOfBirth: string;
  address: string;
  team: number;
  email: string;
  image: string;
  phone: string;
  citizenIdentificationNumber: string;
  dateOfIssuanceCard: string;
  placeOfIssueCard: string;
  submitDay: string;
  leaderName: string;
  leaderPosition: string;
  submitContent: string;
  knowledge: string;
  activity: string;
  skill: string;
  submitProfileStatus: string;
  currentPosition: string;
  employeeFamilyDtos: [];
  certificatesDto: [];
  ethnic: string;
  religion: string;
  appointmentDate: string;
  additionalRequest: string;
  rejectionDate: string;
  reasonForRejection: string;
  additionalRequestTermination: string;
  terminationAppointmentDate: string;
  refuseEndProfileDay: string;
  reasonForRefuseEndProfile: string;
  endDay: string;
  reasonForEnding: string;
  numberSaved: string;
  decisionDay: string;
  leaderId: number;
}


export interface IUpdateImage {
  contentSize: number;
  contentType: string;
  createDate: string;
  createdBy: string;
  extension: string;
  filePath: string;
  id: string;
  modifiedBy: string;
  modifyDate: string;
  name: string;
  voided: boolean;

}

export interface IResponse {
  Code: number;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: string;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: string;
    placeOfIssueCard: string;
    submitDay: string;
    leaderName: string;
    leaderPosition: string;
    submitContent: string;
    knowledge: string;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: string;
    employeeFamilyDtos: [];
    certificatesDto: [];
    ethnic: string;
    religion: string;
    appointmentDate: string;
    additionalRequest: string;
    rejectionDate: string;
    reasonForRejection: string;
    additionalRequestTermination: string;
    terminationAppointmentDate: string;
    refuseEndProfileDay: string;
    reasonForRefuseEndProfile: string;
    endDay: string;
    reasonForEnding: string;
    numberSaved: string;
    decisionDay: string;
    leaderId: number;
  };
  message: string
}

