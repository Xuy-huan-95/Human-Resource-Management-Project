import { IUser } from "../../interface/Employee.interface"
import { IExperience } from "../../interface/Experiece.interface"
import { ICertificate } from "../../interface/Certificate.interface"
import { IFamily } from "../../interface/Family.interface"
import { ICreateSalary, ISalaryIncreate } from "../../interface/SalaryIncreate.interface"
import { IProccess } from "../../interface/Proccess.interface"
import { IProposal } from "../../interface/Proposal.interface"
import moment from "moment"
export const dataUpdateInistate: Omit<IUser, 'id'> | IUser = {
    name: "",
    code: "",
    gender: 0,
    dateOfBirth: "",
    address: "",
    team: 0,
    email: "",
    image: "",
    phone: "",
    ethnic: "",
    religion: "",
    dateOfIssuanceCard: "",
    placeOfIssueCard: "",
    citizenIdentificationNumber: "",
    certificatesDto: [],
    employeeFamilyDtos: [],
    submitDay: "",
    leaderName: "",
    leaderPosition: "",
    submitContent: "",
    knowledge: "",
    activity: "",
    skill: "",
    submitProfileStatus: "",
    rejectionDate: "",
    reasonForRejection: "",
    additionalRequestTermination: "",
    terminationAppointmentDate: "",
    refuseEndProfileDay: "",
    reasonForRefuseEndProfile: "",
    endDay: "",
    reasonForEnding: "",
    numberSaved: "",
    decisionDay: "",
    leaderId: 0,
    currentPosition: "",
    appointmentDate: "",
    additionalRequest: "",

}
export const dataUpdateInistateWithId: IUser = {
    id: 0,
    name: "",
    code: "",
    gender: 0,
    dateOfBirth: "",
    address: "",
    team: 0,
    email: "",
    image: "",
    phone: "",
    ethnic: "",
    religion: "",
    dateOfIssuanceCard: "",
    placeOfIssueCard: "",
    citizenIdentificationNumber: "",
    certificatesDto: [],
    employeeFamilyDtos: [],
    submitDay: "",
    leaderName: "",
    leaderPosition: "",
    submitContent: "",
    knowledge: "",
    activity: "",
    skill: "",
    submitProfileStatus: "",
    rejectionDate: "",
    reasonForRejection: "",
    additionalRequestTermination: "",
    terminationAppointmentDate: "",
    refuseEndProfileDay: "",
    reasonForRefuseEndProfile: "",
    endDay: "",
    reasonForEnding: "",
    numberSaved: "",
    decisionDay: "",
    leaderId: 0,
    currentPosition: "",
    appointmentDate: "",
    additionalRequest: "",

}
export const InitValidateState: {
    name: string;
    code: string;
    gender: string;
    dateOfBirth: string;
    address: string;
    team: string;
    email: string;
    phone: string;
    ethnic: string;
    religion: string;
    dateOfIssuanceCard: string;
    placeOfIssueCard: string;
    citizenIdentificationNumber: string;
} = {
    name: "",
    code: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    team: "",
    email: "",
    phone: "",
    ethnic: "",
    religion: "",
    dateOfIssuanceCard: "",
    placeOfIssueCard: "",
    citizenIdentificationNumber: "",
}

export const initStateExperience: IExperience = {
    id: 0,
    companyName: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
    leavingReason: "",
    companyAddress: "",
}


export const InitCertificateData: Omit<ICertificate, 'id' | 'employeeId' | "data"> | ICertificate = {
    certificateName: "",
    issueDate: "",
    content: "",
    field: "",

}

export const InitValidateCertificate: {
    certificateName: string;
    content: string;
    field: string;
    issueDate: string;

} = {
    certificateName: "",
    content: "",
    field: "",
    issueDate: ","
}


export const initRelativeInfo: Omit<IFamily, "id"> | IFamily = {
    name: "",
    gender: "",
    dateOfBirth: "",
    relationShip: "",
    citizenIdentificationNumber: "",
    address: "",
    email: "",
    phoneNumber: "",
    employeeId: 0,
}

export const InitValidateRelativeInfo: {
    name: string;
    gender: string;
    dateOfBirth: string;
    relationShip: string;
    citizenIdentificationNumber: string;
    address: string;
    email: string;
    phoneNumber: string;
    employeeId: string;

} = {
    name: "",
    gender: "",
    dateOfBirth: "",
    relationShip: "",
    citizenIdentificationNumber: "",
    address: "",
    email: "",
    phoneNumber: "",
    employeeId: "",
}


export const initIcreateSalary: ICreateSalary = {
    startDate: "",
    reason: "",
    note: "",
    oldSalary: "",
    newSalary: "",
}

export const validatecreateSalary = {
    startDate: "",
    reason: "",
    note: "",
    oldSalary: "",
    newSalary: "",
}

export const initProcesInfo: Pick<IProccess, "newPosition" | "promotionDay"> = {
    newPosition: "",
    promotionDay: ""

}


export const dataEndUser: {
    decisionDay: string;
    numberSaved: string;
} = {
    decisionDay: "",
    numberSaved: "",
}

export const initDataSendtoLeader: {
    leaderId: string;
    SubmitDay: string;
    note: string;
} = {
    leaderId: "",
    SubmitDay: "",
    note: "",
}

export const initSalaryToSendLeader: ISalaryIncreate = {
    id: 0,
    startDate: "",
    times: "",
    reason: "",
    currentPosition: "",
    note: "",
    oldSalary: "",
    newSalary: "",
    salaryIncreaseStatus: 0,
    acceptanceDate: "",
    additionalRequest: "",
    reasonForRefusal: "",
    rejectionDate: "",
    leaderId: "",
    employeeId: 0,
}

export const dataApprove: {
    time: string
    need: string
} = {
    time: "",
    need: ""
}


export const initProposal: Pick<IProposal, "content" | "proposalDate" | "type" | "detailedDescription"> = {
    content: "",
    proposalDate: "",
    type: 0,
    detailedDescription: "",
}



export const dataUpdateProposal: IProposal = {
    acceptanceDate: "",
    additionalRequest: "",
    content: "",
    detailedDescription: "",
    employeeId: 0,
    id: 0,
    leaderId: "",
    note: "",
    proposalDate: "",
    proposalStatus: "",
    reasonForRefusal: "",
    rejectionDate: "",
    type: 0
}

export const validateProcess: {
    promotionDay: string;
    newPosition: string;
} = {
    promotionDay: "",
    newPosition: "",
}

export const validateProposal: {
    content: string,
    proposalDate: string,
    type: string,
    detailedDescription: string,
} = {
    content: "",
    proposalDate: "",
    type: "",
    detailedDescription: "",
}




export const validateExperience: {
    startDate: string,
    endDate: string,
    companyName: string,
    companyAddress: string
    jobDescription: string
} = {
    startDate: "",
    endDate: "",
    companyName: "",
    companyAddress: "",
    jobDescription: ""
}

export const validateDataSendLeader: {
    leaderId: string,
    SubmitDay: string,
    note: string

} = {
    leaderId: "",
    SubmitDay: "",
    note: ""
}

export const validateSaveCode: {
    decisionDay: string
    numberSaved: string
} = {
    decisionDay: "",
    numberSaved: ""
}


export const validateDataApprove: {
    time: string
    need: string
} = {
    time: "",
    need: ""
}

