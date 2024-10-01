// app/components/footerData.ts
export interface FooterLink {
  text: string;
  path: string;
}

export const footerLinks: FooterLink[] = [
  { text: "Privacy Policy", path: "/privacy-policy" },
  { text: "Terms of Service", path: "/terms-of-service" },
  { text: "Contact Us", path: "/contact" },
  { text: "About Us", path: "/about" },
];

interface Link {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface Link {
  name: string;
  url: string;
  icon?: string; // Optional icon field
}

interface PaymentMethod {
  name: string;
  icon: string;
}

export const mainLinks: Section = {
  title: "Main Links",
  links: [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" },
    { name: "Help Center", url: "/help-center" },
  ],
};

// About Section
export const aboutLinks: Section = {
  title: "About",
  links: [
    { name: "Payments", url: "/payments" },
    { name: "Shipping", url: "/shipping" },
    { name: "Cancellation & Returns", url: "/cancellation-returns" },
    { name: "FAQ", url: "/faq" },
  ],
};

// Help Section
export const helpLinks: Section = {
  title: "Help",
  links: [
    { name: "Contact Us", url: "/contact" },
    { name: "About Us", url: "/about" },
    { name: "Careers", url: "/careers" },
    { name: "Apex Information", url: "/apex-info" },
  ],
};


export const paymentMethods: PaymentMethod[] = [
  {
    name: "VISA",
    icon: "/assets/Images/Common/PaymentMethod/visa.png", // Replace with actual image path
  },
  {
    name: "MasterCard",
    icon: "/assets/Images/Common/PaymentMethod/mastercard.png", // Replace with actual image path
  },
  {
    name: "Discover",
    icon: "/assets/Images/Common/PaymentMethod/discover.png", // Replace with actual image path
  },
  {
    name: "UnionPay",
    icon: "/assets/Images/Common/PaymentMethod/unionpay.png", // Replace with actual image path
  },
  {
    name: "CIB",
    icon: "/assets/Images/Common/PaymentMethod/cib.png", // Replace with actual image path
  },
  {
    name: "Diners Club",
    icon: "/assets/Images/Common/PaymentMethod/dinersclub.png", // Replace with actual image path
  },
  {
    name: "PayPal",
    icon: "/assets/Images/Common/PaymentMethod/paypal.png", // Replace with actual image path
  },
];

// Payment Methods

// export const footerInfo: FooterInfo = {
//   sections: [
//     {
//       title: "Main Links",
//       links: [
//         { name: "Home", url: "/home" },
//         { name: "About", url: "/about" },
//         { name: "Testimonials", url: "/testimonials" },
//         { name: "Contact", url: "/contact" },
//         { name: "Help Center", url: "/help-center" },
//       ],
//     },
//     {
//       title: "About",
//       links: [
//         { name: "Payments", url: "/payments" },
//         { name: "Shipping", url: "/shipping" },
//         { name: "Cancellation & Returns", url: "/cancellation-returns" },
//         { name: "FAQ", url: "/faq" },
//       ],
//     },
//     {
//       title: "Help",
//       links: [
//         { name: "Contact Us", url: "/contact" },
//         { name: "About Us", url: "/about" },
//         { name: "Careers", url: "/careers" },
//         { name: "Apex Information", url: "/apex-info" },
//       ],
//     },
//     {
//       title: "Social",
//       links: [
//         { name: "facebook", url: "https://facebook.com" },
//         { name: "x", url: "https://x.com" },
//         { name: "instagram", url: "https://instagram.com" },
//         { name: "linkedIn", url: "https://linkedin.com" },
//       ],
//     },
//   ],
//   contact: {
//     phone1: "+213 777 58 59 66",
//     phone2: "+213 777 58 59 66",
//     address: "123 Rue Didouche Mourad, Alger Centre, Alger",
//   },
//   legal: {
//     terms: "/terms",
//     privacy: "/privacy",
//   },
//   copyright: "© apex.tech2024",
//   paymentMethods: [
//     "VISA",
//     "MasterCard",
//     "Discover",
//     "UnionPay",
//     "CIB",
//     "Diners Club",
//     "PayPal",
//   ],
// };
