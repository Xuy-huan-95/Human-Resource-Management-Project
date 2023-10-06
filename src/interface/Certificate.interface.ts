export interface ICertificate {
  id: number;
  certificateName: string;
  issueDate: string;
  content: string;
  field: string;
  employeeId: number;

}
export interface ICertificateRes {
  code: number;
  message: string;
  data: ICertificate[];
}
export interface Irespone {
  data: {
    code: number;
    message: string;
    data: ICertificate;
  }



}