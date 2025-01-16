export interface navLinks {
  id: number;
  name: string;
  href: string;
  subLinks?: navLinks[];
}

export interface AccordionProps {
  title: string;
  content: React.ReactNode;
  id: number;
}

export interface FaqProps {
  title: string;
  description: string;
  item: AccordionProps[];
}

export interface GuestReviewsProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}
