import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Github, User } from "lucide-react";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Thinagents",
  },
  links: [
    {
      label: "github",
      icon: <Github />,
      url: "https://github.com/PrabhuKiran8790/thinagents",
      text: "View on Github",
    },
    {
      label: "prabhu",
      icon: <User />,
      url: "https://prabhukirankonda.vercel.app",
      text: "Maintained by Prabhu Kiran",
    },
  ],
};
