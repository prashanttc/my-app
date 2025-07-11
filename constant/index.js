
import { Instagram, HomeIcon, MailIcon,Printer } from "lucide-react";
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

export const Icons = {
  email: (props) => <MailIcon {...props} />,
  github: (props) => <Instagram {...props} />,
};

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
        icon: Icons.github,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
    },
  },
};
