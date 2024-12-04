import { TFunction } from "../../common/types";

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}
