// app/components/navData.ts
export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: 'Home', href: '/home' },
  { title: 'About', href: '/about' },
  { title: 'Testimonials', href: '/testimonials' },
  { title: 'Contact', href: '/contact' },
];

