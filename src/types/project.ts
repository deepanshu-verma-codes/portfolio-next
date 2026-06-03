import { IconType } from "react-icons";

interface BaseType {
  name?: string;
  logo: string;
  title: string;
  description: string;
  live_link: string;
}

export interface projectType extends BaseType {
  stack_image: { name: string; icon: IconType }[];
}
export interface exprienceType extends BaseType {
  date: string;
}
