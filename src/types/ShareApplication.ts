export interface ShareApplication {
  id?: string;
  sharesApplied: number;
  amountPaid: string;
  title: string;
  surname: string;
  firstName: string;
  otherNames: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  dob: string;
  email: string;
  nextOfKin: string;
  chnNumber: string;
  cscsNumber: string;
  stockbroker: string;
  memberCode: string;
  jointTitle: string;
  jointSurname: string;
  jointFirstName: string;
  jointOtherNames: string;
  bankName: string;
  bvn: string;
  accountNumber: string;
  branch: string;
  cityState: string;
  createdAt?: string;
}

export type ShareApplicationErrors = {
  [K in keyof ShareApplication]?: string;
};