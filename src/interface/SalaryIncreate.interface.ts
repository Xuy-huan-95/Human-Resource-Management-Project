export type ICreateSalary = Pick<
    ISalaryIncreate,
    "startDate" | "reason" | "note" | "oldSalary" | "newSalary"
> & {
    leaderId?: string;
} | ISalaryIncreate;


export interface ISalaryIncreate {
    id: number;
    startDate: string;
    times: string;
    reason: string;
    currentPosition: string;
    note: string;
    oldSalary: string;
    newSalary: string;
    salaryIncreaseStatus: number;
    acceptanceDate: string;
    additionalRequest: string;
    reasonForRefusal: string;
    rejectionDate: string;
    leaderId: string;
    employeeId: number;
}
export interface ISalaryIncreateRes {
    code: number;
    message: string;
    data: ISalaryIncreate[];
}
