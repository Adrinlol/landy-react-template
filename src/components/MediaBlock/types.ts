import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  instagram: string;
  facebook: string;
  youtube: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        scrollTo: string;
      }
    | {
        title: string;
        color: string;
        scrollTo: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
