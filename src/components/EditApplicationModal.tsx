import React, { useState } from 'react';
import { ShareApplication, ShareApplicationErrors } from '../types/ShareApplication';
import { useShareApp } from '../context/ShareAppContext';
import FormField from './FormField';
import { X } from 'lucide-react';

interface EditApplicationModalProps {
  application: ShareApplication;
  onClose: () => void;
}

const EditApplicationModal: React.FC<EditApplicationModalProps> = ({ application, onClose }) => {
  const [formData, setFormData] = useState<ShareApplication>(application);
  const [errors, setErrors] = useState<ShareApplicationErrors>({});
  const { updateApplication, loading } = useShareApp();

  const validateForm = (): boolean => {
    const newErrors: ShareApplicationErrors = {};
    let isValid = true;

    // Required fields validation
    const requiredFields: (keyof ShareApplication)[] = [
      'surname', 'firstName', 'address', 'phoneNumber', 'email', 'bankName', 'accountNumber'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone number validation
    if (formData.phoneNumber && !/^\+?[0-9]{10,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      isValid = false;
    }

    // Account number validation
    if (formData.accountNumber && !/^[0-9]{10}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = 'Account number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    // Handle number inputs
    if (type === 'number') {
      setFormData({
        ...formData,
        [name]: value === '' ? '' : Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof ShareApplication]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      updateApplication(application.id!, formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-medium text-gray-900">Edit Application</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    label="Title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    error={errors.title}
                  />
                  <FormField
                    label="Surname"
                    name="surname"
                    type="text"
                    value={formData.surname}
                    onChange={handleChange}
                    error={errors.surname}
                    required
                  />
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <FormField
                    label="Other Names"
                    name="otherNames"
                    type="text"
                    value={formData.otherNames}
                    onChange={handleChange}
                    error={errors.otherNames}
                  />
                  <FormField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    error={errors.dob}
                  />
                </div>
                
                <div className="mt-4">
                  <FormField
                    label="Address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <FormField
                    label="City"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                  />
                  <FormField
                    label="State"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    error={errors.state}
                  />
                  <FormField
                    label="Country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    error={errors.country}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <FormField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    error={errors.phoneNumber}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Share Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Shares Applied"
                    name="sharesApplied"
                    type="number"
                    value={formData.sharesApplied.toString()}
                    onChange={handleChange}
                    error={errors.sharesApplied}
                    min={1}
                    required
                  />
                  <FormField
                    label="Amount Paid"
                    name="amountPaid"
                    type="text"
                    value={formData.amountPaid}
                    onChange={handleChange}
                    error={errors.amountPaid}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Bank Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Bank Name"
                    name="bankName"
                    type="text"
                    value={formData.bankName}
                    onChange={handleChange}
                    error={errors.bankName}
                    required
                  />
                  <FormField
                    label="Account Number"
                    name="accountNumber"
                    type="text"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    error={errors.accountNumber}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <div className="flex justify-end space-x-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700
            bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
            bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditApplicationModal;