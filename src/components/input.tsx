import React from 'react';
import { InputProps } from '../types/form-types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => (
    <div className="flex flex-col gap-3 items-start">
      <label htmlFor={label} className="text-sm first-letter:uppercase">
        {label}
        {' '}
        {rest.required ? (
          <span className="text-red-500 text-base"> *</span>
        ) : (
          ''
        )}
      </label>
      <input ref={ref} {...rest} className="text-gray-600 w-full" />
    </div>
  ),
);

Input.displayName = 'Input';
export default Input;
