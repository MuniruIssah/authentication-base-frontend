import React from 'react';
import { InputProps } from '../types/form-types';

const Input = ({
  label, required, register, ...rest
}: InputProps) => (
  <div className="flex flex-col gap-3 items-start">
    <label htmlFor={label} className="text-sm first-letter:uppercase">
      {label}
      {' '}
      {required ? <span className="text-red-500 text-base"> *</span> : ''}
    </label>
    <input
      {...rest}
      {...register(label, { required })}
      className="text-gray-600 w-full"
    />
  </div>
);

export default Input;
