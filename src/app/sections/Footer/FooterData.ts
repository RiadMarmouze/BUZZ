// app/components/footerData.ts
export interface FooterLink {
    text: string;
    path: string;
}

export const footerLinks: FooterLink[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'About Us', path: '/about' },
];
