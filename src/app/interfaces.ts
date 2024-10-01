export interface Testimonial {
  id: number;
  content: string;
  imageUrl: string;
  name: string;
  role: string;
}

export interface FAQResponse {
  profilePic: string;
  text: string;
  details?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer?: FAQResponse;
}
