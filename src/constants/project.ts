import { projectType } from "@/types/project";
import { 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs 
} from "react-icons/si";

export const projectList: projectType[] = [
  {
    logo: "/project/vivian_1.png",
    title: "Vivian Lab",
    description:
      "AI-powered wellness platform for women's health using Anthropic AI, Vector databases, Strapi, and Sharetribe Flex. Focuses on personalized health insights and seamless user experience.",
    live_link: "https://vivianlab.com/",
    stack_image: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    logo: "/project/onbuoy_1.png",
    title: "OnBuoy",
    description:
      "Maritime marketplace for moorage with automated booking (Node.js CRON) and Stripe Connect. Designed for ease of use in the maritime industry with robust payment handling.",
    live_link: "https://www.onbuoy.com/",
    stack_image: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    logo: "/project/salhub_1.png",
    title: "SalHub",
    description:
      "B2B marketplace for corporate wellness featuring Anthropic AI for provider matching. Efficiently connects businesses with wellness providers using advanced AI algorithms.",
    live_link: "https://www.salhub.com/",
    stack_image: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    logo: "/project/banksmyth_1.png",
    title: "Banksmyth",
    description:
      "High-security talent marketplace for the financial sector. Built with a focus on security, scalability, and precise matching of financial professionals with opportunities.",
    live_link: "https://www.banksmyth.com/",
    stack_image: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
];
