export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  students: number;
  rating: number;
  duration: string;
  level: string;
}
