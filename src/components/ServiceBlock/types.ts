import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  content6: string;
  content7: string;
  content8: string;
  content9: string;
  content10: string;
  content11: string;
  content12?: string;
  content13?: string;
  content14?: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
