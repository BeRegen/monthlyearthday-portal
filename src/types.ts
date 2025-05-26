// Definição de tipos para o projeto

// Tipos para componentes da página Home
export interface ImpactMetricProps {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export interface TestimonialProps {
  name: string;
  text: string;
  avatar: string | null;
}

// Tipos para componentes da página Impact
export interface BarChartProps {
  title: string;
  data: {
    label: string;
    value: number;
  }[];
}

export interface PieChartProps {
  title: string;
  segments: {
    label: string;
    color: string;
  }[];
}

export interface SuccessStoryProps {
  title: string;
  content: string;
}

export interface DownloadDocumentProps {
  title: string;
  icon: string;
}

// Tipos para componentes da página About
export interface TimelineItemProps {
  year: number;
  events: string[];
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

// Tipos para componentes da página Participate
export interface ParticipationWayProps {
  title: string;
  description: string;
  icon: string;
  steps: string[];
}

export interface EventProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface ResourceProps {
  title: string;
  description: string;
  type: string;
  icon: string;
}

// Tipos para componentes da página Gallery
export interface CategoryProps {
  id: string;
  name: string;
}

export interface ImageItemProps {
  id: number;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  description: string;
}

export interface VideoItemProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

// Tipos para componentes da página Blog
export interface BlogPostProps {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  featured: boolean;
}
