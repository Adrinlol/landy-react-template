export interface RegisterFormProps {
  title: string;
  content: string;
  id: string;
  t: any;
}

export interface ValidationTypeProps {
  type: string;
}

export interface RegisterValues {
  name?: string;
  gender?: string;
  age?: string;
  standard?: string;
  subject?: string;
  institution?: string;
  yearOfStudy?: string;
  yearOfCompletion?: string;
  district?: string;
  otherDistrict?: string;
  localBody?: string;
  contactNumber?: string;
  whatsappNumber?: string;
  isDifferentWhatsApp?: string;
  email?: string;
}