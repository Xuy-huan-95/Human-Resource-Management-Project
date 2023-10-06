export interface IFamily {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  relationShip: string;
  citizenIdentificationNumber: string;
  address: string;
  email: string;
  phoneNumber: string;
  employeeId: number;
}

export interface IFamilyRes {
  code: number;
  message: string;
  data: IFamily[];
}
