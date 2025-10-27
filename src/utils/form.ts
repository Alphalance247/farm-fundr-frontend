// ... existing code ...

// Add these new types and validation schemas
export interface AddFarmFormData {
  // Step 1: Farm Details
  farmName: string;
  farmAddress: string;
  country: string;
  state: string;
  phone: string;
  farmEmail: string;
  farmPhone: string;
  isActive: boolean;

  // Step 2: Farm Size & Description
  farmSize: string;
  fieldType: string;
  fieldDescription: string;

  // Step 3: Ownership Details
  ownershipType: string;
  cacNumber: string;
  operatingSince: string;
  cacDocument: File | null;

  // Step 4: Images
  images: {
    image1: File | null;
    image2: File | null;
    image3: File | null;
    image4: File | null;
  };
}

// Validation rules for each step
export const step1Validation = {
  farmName: {
    required: "Farm name is required",
    minLength: { value: 2, message: "Farm name must be at least 2 characters" },
    maxLength: {
      value: 100,
      message: "Farm name must be less than 100 characters",
    },
  },
  farmAddress: {
    required: "Farm address is required",
    minLength: { value: 10, message: "Address must be at least 10 characters" },
  },
  country: {
    required: "Country is required",
  },
  state: {
    required: "State is required",
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      // value: /^\+?[1-9]\d{1,14}$/,
      message: "Please enter a valid phone number",
    },
  },
};

export const step2Validation = {
  farmSize: {
    required: "Farm size is required",
    minLength: {
      value: 1,
      message: "Farm size must be at least 1 character",
    },
    pattern: {
      value: /^[0-9]+(\.[0-9]+)?$/,
      message: "Please enter a valid number",
    },
  },
  fieldType: {
    required: "Field type is required",
  },
  fieldDescription: {
    required: "Description is required",
    minLength: {
      value: 50,
      message: "Description must be at least 50 characters",
    },
    maxLength: {
      value: 500,
      message: "Description must be less than 500 characters",
    },
  },
};

export const step3Validation = {
  ownershipType: {
    required: "Ownership type is required",
  },
  // cacNumber: {
  //   required: "CAC registration number is required",
  //   pattern: {
  //     value: /^[A-Z0-9]{6,12}$/,
  //     message: "Please enter a valid CAC number",
  //   },
  // },
  operatingSince: {
    required: "Operating date is required",
    validate: (value: string) => {
      const date = new Date(value);
      const today = new Date();
      if (date > today) {
        return "Operating date cannot be in the future";
      }
      return true;
    },
  },
  cacDocument: {
    required: "CAC document is required",
    validate: (file: File | null) => {
      if (!file) return "CAC document is required";
      if (file.size > 10 * 1024 * 1024) {
        return "File size must be less than 10MB";
      }
      if (!file.type.includes("pdf")) {
        return "Only PDF files are allowed";
      }
      return true;
    },
  },
};

export const step4Validation = {
  images: {
    image1: {
      required: "First farm image is required",
      validate: (file: File | null) => {
        if (!file) return "First farm image is required";
        if (file.size > 5 * 1024 * 1024) {
          return "Image size must be less than 5MB";
        }
        if (!file.type.startsWith("image/")) {
          return "Only image files are allowed";
        }
        return true;
      },
    },
    image2: {
      required: "Second farm image is required",
      validate: (file: File | null) => {
        if (!file) return "Second farm image is required";
        if (file.size > 5 * 1024 * 1024) {
          return "Image size must be less than 5MB";
        }
        if (!file.type.startsWith("image/")) {
          return "Only image files are allowed";
        }
        return true;
      },
    },
    image3: {
      required: "Third farm image is required",
      validate: (file: File | null) => {
        if (!file) return "Third farm image is required";
        if (file.size > 5 * 1024 * 1024) {
          return "Image size must be less than 5MB";
        }
        if (!file.type.startsWith("image/")) {
          return "Only image files are allowed";
        }
        return true;
      },
    },
    image4: {
      // Optional - no validation required
      validate: (file: File | null) => {
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            return "Image size must be less than 5MB";
          }
          if (!file.type.startsWith("image/")) {
            return "Only image files are allowed";
          }
        }
        return true;
      },
    },
  },
};

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
  farmEmail: string;
  farmPhone: string;
  city: string;
}

export interface branchFormData {
  selectFarm: string;
  branchName: string;
  city: string;
  state: string;
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
  expectedReturn: string;
  fundingDetails: string;
  description: string;
  investmentStart: string;
  investmentEnd: string;
  paymentType: string;
  howItWorks: string;
  progressOvertime: string;
  branchSize: string;
  plots: string;
}

export interface grantFormData {
  grant_name: string;
  grant_category: string;
  fund_type: string;
  funding_amount: string;
  description: string;
  eligibility: string;
  application__deadline: string;
  disburse_type: string;
}
