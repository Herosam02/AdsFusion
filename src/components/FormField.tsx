import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  options?: { value: string; label: string }[];
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  min,
  max,
  options,
  className = '',
}) => {
  const id = `field-${name}`;
  const inputClass = `block w-full px-3 py-2 bg-white border ${
    error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 sm:text-sm transition-all duration-200`;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClass}
          rows={3}
        />
      );
    }

    if (type === 'select' && options) {
      return (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClass}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className={inputClass}
      />
    );
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {renderInput()}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;