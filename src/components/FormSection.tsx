import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default FormSection;