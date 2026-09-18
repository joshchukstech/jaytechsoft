export interface ServiceItem {
  id: string;
  title: string;
  category: 'solar' | 'electrical' | 'tech' | 'network' | 'cctv' | 'renewable';
  description: string;
  features: string[];
  isFeatured?: boolean;
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Solar Installation' | 'Electrical Installation' | 'CCTV & Security' | 'Network Infrastructure';
  description: string;
  scope: string[];
  image: string;
  locationPlaceholder: string;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  message: string;
  energyNeed?: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  rcNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  phoneRaw: string;
  email: string;
}
