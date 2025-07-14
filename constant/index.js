
import { Instagram, HomeIcon, MailIcon,Printer ,  PackageSearch, FlaskConical, Layers3, Code, BadgeCheck, HandCoins, ShieldCheck  } from "lucide-react";
import React from "react";

export const nav = [
  {
    id: 1,
    label: "Services",
    src: "",
  },
  {
    id: 2,
    label: "Products",
    src: "",
  },
  {
    id: 3,
    label: "About Us",
    src: "/",
  },
  {
    id: 4,
    label: "Contact Us",
    src: "/",
  },
];

export const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: Printer, label: "services" },
  ],
  contact: {
    social: {
      Instagram: {
        name: "Instagram",
        url: "#",
        icon: Instagram,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: MailIcon,
      },
    },
  },
};

export const boxes = [
  {
    id: 1,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1}><path d="M15 15.5h-2.5v-6H15l1 3zm-9.5 0H10l.5-1.5l-1-1.5l1-1.5l-.5-1.5H5.5m1 3h3"></path><path d="m2.5 6.5l9-5l9 4.5v7.5"></path><path d="m22.5 11.5l-2 2l-2-2m2 7l-9 5l-9-4.5v-7.5"></path><path d="m.5 13.5l2-2l2 2"></path></g></svg>,
    heading: "3D Printing",
    description: "High-quality FDM and SLA 3D printing services.",
    link: "/services/3d-printing",
  },
  {
    id: 2,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z" strokeWidth={1}></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5L8 7l3.5-1.5M8 7v4" strokeWidth={1}></path></svg>,
    heading: "Enclosures",
    description: "Custom plastic and metal enclosures tailored to your hardware.",
    link: "/services/enclosures",
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" d="M3.32.954S2.388.78 2.388 2.138c0 1.359.222 18.01.222 18.01s.379.663.521.631c.141-.03 2.546-.358 2.577-.363l.017-.002l.013-4.004l.012-3.9l4.259-.001l-.004-.305l-4.254-.054l.005-1.616l5.04.057l.012-.322l-5.05-.117l.017-6.148s-.056-.673.354-.673s10.856.377 10.856.377s.343.012.354.257c.005.107.003 3.4.004 5.959l-1.068.114l.002.315l-4.215-.062l-.006.338l4.244.058l.005 1.535l-2.39.017l-.002.296l2.377-.023l.003.235h1.053c0 1.01.002 1.713 0 2.43c.542.158 1.385.435 1.385.435l-1.403.21c0 .223.002.572.005.923l-.93-.35l-.654.083l1.585.589l.003.367l2.072-.291l-.007-14.759s.01-.546-.564-.564C18.263 1.803 3.32.954 3.32.954m6.26 8.662l-.005.55l1.303.032l-.03.869l-.79-.02l.021 1.8l.284-.03l.007.35l.969.03v.566q.014 0 .023.01q.01.01.01.023v.013l.238.12a.03.03 0 0 1 .016.014a.03.03 0 0 1 .002.02l-.002.006l.417.12l-.02-2.048l.016-.018c.02 0 1.736-.007 1.736-.018l.002-.947l-1.796.013l.03-1.331zm4.193 2.474l-1.618.017l.02 1.91l1.598-.044zm-2.434 1.706l-.158.157l.21.21l.205-.204l-.257-.13zm2.425.405c-.029 0-7.873.896-7.873.896l3.197 1.718l9.556-1.209s-4.85-1.405-4.88-1.405m-7.923.925l.01.495l.217.113l.618.02l2.121 1.164l-.257.186l.412.288l1.308-.113l.33-.186l6.293-.793l.36.062l-.03-.515l-8.168 1.04zm.649 1.283l-.706.02l-.01 4.002l.84-.176l-.037-.932l3.276 2.488s-.026.453.03.87c.057.417.613.37.613.37l1.293-.277l.2-.242l7.957-1.525l.212.206l1.158-.247c.119-.026.211-.2.273-.314s-.024-1.802-.005-2.333c.016-.445-.08-.425-.129-.438l-.757.134s-.208.057-.314.01c-.174-.076-.154-.205-.154-.205s.01-.222-.067-.469s-.258-.211-.258-.211l-7.08.994s-.372.058-.695.14l-1.802-.99l-.041.023l-.014.004l-.526.046l2.018 1.065c-.003.007-.037.009-.038.016c-.097.882-.202.989-.463 1.03l-1.385.195l-3.08-2.111Z"></path></svg>,
    heading: "Resin Printing",
    description: "Detailed resin prints for prototypes and final products.",
    link: "/services/resin-printing",
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9 12H6.732a2 2 0 1 1 0-2H9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm2 0v7h8V5h-8v5h2.268a2 2 0 1 1 0 2z"></path></svg> ,
    heading: "Prototyping",
    description: "From CAD to physical models, we support full prototyping cycles.",
    link: "/services/prototyping",
  },
];
export const videoBox = [
  {
    heading: "Pro Print",
    icon: <BadgeCheck  />,
    src: "v1.mp4", 
  },
  {
    heading: "Best Price",
    icon: <HandCoins  />,
    src: "v2.mp4",
  },
  {
    heading: "Trusted Choice",
    icon: <ShieldCheck  />,
    src: "v3.mp4",
  },
];


export const products = [
  {
    image: 'https://picsum.photos/seed/phone-stand/300/300?grayscale',
    link: 'https://yourstore.com/3d-phone-stand',
    title: '3D Printed Phone Stand',
    description: 'A sleek, durable phone stand designed for desk setups. Lightweight, portable, and customizable.'
  },
  {
    image: 'https://picsum.photos/seed/planter/400/400?grayscale',
    link: 'https://yourstore.com/3d-mini-planter',
    title: 'Geometric Planter',
    description: 'Minimalist 3D printed planter perfect for succulents or desk plants. Adds a modern touch to any space.'
  },
  {
    image: 'https://picsum.photos/seed/tool-holder/500/500?grayscale',
    link: 'https://yourstore.com/3d-tool-holder',
    title: 'Modular Tool Holder',
    description: 'A customizable tool organizer for DIYers. Snap-fit compartments built for efficiency and space-saving.'
  },
  {
    image: 'https://picsum.photos/seed/lamp-shade/600/600?grayscale',
    link: 'https://yourstore.com/3d-lamp-shade',
    title: 'Custom Lamp Shade',
    description: 'Unique, 3D printed lamp shade that casts ambient patterns. Designed to elevate your room aesthetics.'
  }
];
