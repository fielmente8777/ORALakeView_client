
export interface navLinks {
  id: number;
  name: string;
  href: string;
  subLinks?: navLinks[];
}