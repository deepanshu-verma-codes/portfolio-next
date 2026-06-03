import {
  SiAnthropic,
  SiC,
  SiTypescript,
  SiThreedotjs,
  SiExpress,
  SiPixiv,
  SiGoogleapi,
  SiGooglecloud,
  SiGooglegemini,
  SiJira,
  SiLangchain,
  SiMongodb,
  SiMui,
  SiOpenai,
  SiPostman,
  SiRedux,
  SiX,
  SiRetool,
  SiShadcnui,
  SiPython,
  SiSupabase,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";

import { TbBrandMysql } from "react-icons/tb";
import {
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";

// Professional Frontend, Backend & Tools stack
export const techStack: any = [
  {
    id: 1,
    name: "Frontend",
    description:
      "Technologies used to build user interfaces and web experiences",
    children: [
      {
        id: 1,
        name: "HTML5",
        icon: <FaHtml5 className="text-4xl" />,
        type: "markup",
      },
      {
        id: 2,
        name: "CSS3",
        icon: <IoLogoCss3 className="text-4xl" />,
        type: "style",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: <FaJs className="text-4xl" />,
        type: "language",
      },

      {
        id: 4,
        name: "React.js",
        icon: <FaReact className="text-4xl" />,
        type: "library",
      },
      {
        id: 5,
        name: "Next.js",
        icon: <RiNextjsFill className="text-4xl" />,
        type: "framework",
      },
      {
        id: 6,
        name: "Typescript",
        icon: <SiTypescript className="text-4xl" />,
        type: "framework",
      },
      {
        id: 7,
        name: "Three.js",
        icon: <SiThreedotjs className="text-4xl" />,
        type: "framework",
      },
      {
        id: 8,
        name: "Pixi.js",
        icon: <SiPixiv className="text-4xl" />,
        type: "framework",
      },
    ],
  },
  {
    id: 2,
    name: "Backend",
    description: "Technologies for server-side development and databases",
    children: [
      {
        id: 1,
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl" />,
        type: "runtime",
      },
      {
        id: 2,
        name: "Express.js",
        icon: <SiExpress className="text-4xl" />,
        type: "framework",
      },
      {
        id: 3,
        name: "Python",
        icon: <SiPython className="text-4xl" />,
        type: "database",
      },
      {
        id: 4,
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl" />,
        type: "database",
      },
      {
        id: 5,
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-4xl" />,
        type: "database",
      },
      {
        id: 6,
        name: "MySQL",
        icon: <TbBrandMysql className="text-4xl" />,
        type: "database",
      },
      {
        id: 7,
        name: "Supabase",
        icon: <SiSupabase className="text-4xl" />,
        type: "database",
      },
      {
        id: 8,
        name: "Socket.io",
        icon: <SiSocketdotio className="text-4xl" />,
        type: "tool",
      },
    ],
  },
  {
    id: 3,
    name: "AI & LLM",
    description:
      "Expertise in Artificial Intelligence and Large Language Models",
    children: [
      {
        id: 1,
        name: "OpenAI",
        icon: <SiOpenai className="text-4xl" />,
        type: "AI",
      },
      {
        id: 2,
        name: "Anthropic",
        icon: <SiAnthropic className="text-4xl" />,
        type: "AI",
      },
      {
        id: 3,
        name: "Gemini",
        icon: <SiGooglegemini className="text-4xl" />,
        type: "AI",
      },
      {
        id: 4,
        name: "Grok",
        icon: <SiX className="text-4xl" />,
        type: "AI",
      },
      {
        id: 5,
        name: "Langchain",
        icon: <SiLangchain className="text-4xl" />,
        type: "framework",
      },
    ],
  },
  {
    id: 4,
    name: "Tools & Others",
    description:
      "Supporting tools, state management, collaboration, and API testing",
    children: [
      {
        id: 1,
        name: "Redux",
        icon: <SiRedux className="text-4xl" />,
        type: "state management",
      },
      {
        id: 2,
        name: "GitHub",
        icon: <FaGithub className="text-4xl" />,
        type: "version control",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-4xl" />,
        type: "framework",
      },
      {
        id: 4,
        name: "Bootstrap",
        icon: <FaBootstrap className="text-4xl" />,
        type: "framework",
      },
      {
        id: 5,
        name: "Material UI",
        icon: <SiMui className="text-4xl" />,
        type: "library",
      },
      {
        id: 6,
        name: "Shadcn UI",
        icon: <SiShadcnui className="text-4xl" />,
        type: "project management",
      },
      {
        id: 7,
        name: "Postman",
        icon: <SiPostman className="text-4xl" />,
        type: "API testing",
      },
      {
        id: 8,
        name: "Retool",
        icon: <SiRetool className="text-4xl" />,
        type: "API testing",
      },
    ],
  },
];
