import { TFunction } from "react-i18next";
import {CollapseProps} from "antd";
import React, {ReactNode, RefAttributes} from "react";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content?: string;
  collapseItems?: CollapseProps['items'];
  destination?: string;
  cardSection: boolean
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
