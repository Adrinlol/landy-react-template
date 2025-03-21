import { ReactNode } from "react";
import { TFunction } from "i18next";

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: Array<{
    title: string;
    content: string;
    icon: string;
  }>;
  button?: Array<
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  >;
  t: TFunction;
  id: string;
  direction: "left" | "right";
  children?: ReactNode;
}
