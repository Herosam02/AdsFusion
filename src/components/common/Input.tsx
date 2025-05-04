import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full rounded-md shadow-sm px-4 py-2.5
              ${icon ? 'pl-10' : ''}
              ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : 'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500'}
              dark:bg-dark-700 dark:text-white
              transition-colors
              ${className}
            `}
            {...props}
          />
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-error-600">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;