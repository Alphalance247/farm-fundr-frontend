export interface BusinessFormData {
  proposedName1: string;
  proposedName2: string;
  businessCategory: string;
  typeOfBusiness: string;
  specificBusinessCategory: string;
  businessEmail: string;
  countryCode: string;
  businessPhone: string;
  businessDescription: string;
}

export interface ProprietorFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  occupation: string;
  gender: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  meansOfId: string;
  idNumber: string;
  idDocument: File | null;
  passportPhoto: File | null;
  signature: File | null;
  // Residential Address
  residentialCountry: string;
  residentialState: string;
  residentialLGA: string;
  residentialTown: string;
  residentialPostalCode: string;
  residentialStreetAddress: string;
  // Postal Address
  sameAsResidential: boolean;
  postalCountry: string;
  postalState: string;
  postalLGA: string;
  postalTown: string;
  postalPostalCode: string;
  postalStreetAddress: string;
}

export interface InitialFormData {
  country: string;
  businessName: string;
}
