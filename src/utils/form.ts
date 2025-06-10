// types/form.ts
export interface FarmFormData {
  country: string;
  state: string;
  phone: string;
  farmName: string;
  farmAddress: string;
  farmSize: string;
  fieldType: string;
  fieldDescription: string;
  ownershipType: string;
  cacNumber: string;
  operatingSince: string;
  //   cacDocument: File | null;
  //   images: {
  //     [key: string]: { file: File | null; preview: string | null };
  //   };
}

export interface branchFormData {
  selectFarm: string;
  branchName: string;
  branchAddress: string;
  description: string;
  branchSize: string;
  fieldType: string;
  workHours: string;
  time: string;
}

export interface projectFormData {
  selectFarm: string;
  selectBranch: string;
  projectName: string;
  projectType: string;
  branchAddress: string;
  expectedReturn: string;
  fundingDetails: string;
  description: string;
  investmentStart: string;
  investmentEnd: string;
  paymentType: string;
  howItWorks: string;
  progressOvertime: string;
  branchSize: string;
  fieldType: string;
  workHours: string;
  time: string;
}
