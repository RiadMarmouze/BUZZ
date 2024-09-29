// app/components/navData.ts
export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: 'Prodcuts', href: '/products' },
  { title: 'Solutions', href: '/solutions' },
  { title: 'Pricing', href: '/pricing' },
];

