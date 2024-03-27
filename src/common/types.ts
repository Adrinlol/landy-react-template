import { TFunction } from "react-i18next";
import { Select } from "antd";
import { SelectValue } from "antd/lib/select";
import { UploadFile } from 'antd/lib/upload/interface';

export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface PngIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface SelectProps {
  name: string;
  defaultValue: string;
  value: string | SelectValue;
  t: TFunction;
  onChange: (
      name: string,
      value: string,
    ) => void;
  children?: React.ReactNode;
}
export interface UploadProps {
  name: string;
  multiple: boolean;
  t: TFunction;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | any
  ) => void;
  children?: React.ReactNode;
}
export interface validateProps {
  name: string;
  message: string;
  subject: string;
  email: string;
}
export interface feedbackProps {
    name: string;
    message: string;
}
export interface supportProps {
    name: string;
    email: string;
    phone: string;
    category: string;
    files: string;
    message: string;
}
