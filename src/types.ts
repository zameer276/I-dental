export interface Service {
  id: string;
  title: string;
  titleHindi?: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  details: string[];
  duration?: string;
  costEstimate?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'treatment' | 'consultation' | 'general' | 'emergency';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
