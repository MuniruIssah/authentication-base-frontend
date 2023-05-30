import { Path, UseFormRegister } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

export interface IFormValues {
  email: string;
  password: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}
