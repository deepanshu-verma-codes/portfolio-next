import { SocialLink } from '@/types/social';
import {Github, Linkedin, Twitter, Globe} from 'lucide-react';


export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Deepanshu-Verma',
    label: 'GitHub',
    icon: Github,
    colorClass: 'text-gray-900 hover:text-black',
  },
  {
    href: 'https://www.linkedin.com/in/deepanshu-verma-/',
    label: 'LinkedIn',
    icon: Linkedin,
    colorClass: 'text-blue-700 hover:text-blue-900',
  },
  {
    href: 'https://www.deepanshuverma.in/',
    label: 'Website',
    icon: Globe,
    colorClass: 'text-sky-500 hover:text-sky-700',
  },
];
