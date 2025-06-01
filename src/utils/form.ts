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
