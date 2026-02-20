export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  features?: string[];
  icon?: string;
  popular?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryImage {
  alt: string;
  caption: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ContactFieldOption {
  label: string;
  value: string;
}

export interface ContactField {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  options?: string[];
}

export interface ContactFormContent {
  fields: ContactField[];
  submitLabel: string;
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: BusinessHours;
  social?: Record<string, string>;
}
