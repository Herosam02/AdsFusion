import React, { useState } from 'react';
import { ShareApplication, ShareApplicationErrors } from '../types/ShareApplication';
import { useShareApp } from '../context/ShareAppContext';
import FormSection from './FormSection';
import FormField from './FormField';

const initialFormState: ShareApplication = {
  sharesApplied: 1,
  amountPaid: '',
  title: '',
  surname: '',
  firstName: '',
  otherNames: '',
  address: '',
  city: '',
  state: '',
  country: '',
  phoneNumber: '',
  dob: '',
  email: '',
  nextOfKin: '',
  chnNumber: '',
  cscsNumber: '',
  stockbroker: '',
  memberCode: '',
  jointTitle: '',
  jointSurname: '',
  jointFirstName: '',
  jointOtherNames: '',
  bankName: '',
  bvn: '',
  accountNumber: '',
  branch: '',
  cityState: '',
};

const FormView: React.FC = () => {
  const [formData, setFormData] = useState<ShareApplication>(initialFormState);
  const [errors, setErrors] = useState<ShareApplicationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addApplication, loading } = useShareApp();

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
      addApplication(formData);
      setIsSubmitted(true);
      setFormData(initialFormState);
      
      // Reset submission notification after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Share Application Form</h2>
      
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 rounded-md border border-green-200">
          <p className="text-green-700 font-medium">Your application has been submitted successfully!</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <FormSection title="Share Details">
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
              placeholder="e.g. 10,000.00"
            />
          </div>
        </FormSection>
        
        <FormSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              label="Title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              error={errors.title}
              placeholder="Mr./Mrs./Ms."
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
          
          <div className="mt-4">
            <FormField
              label="Next of Kin"
              name="nextOfKin"
              type="text"
              value={formData.nextOfKin}
              onChange={handleChange}
              error={errors.nextOfKin}
            />
          </div>
        </FormSection>
        
        <FormSection title="Stock Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="CHN Number"
              name="chnNumber"
              type="text"
              value={formData.chnNumber}
              onChange={handleChange}
              error={errors.chnNumber}
            />
            <FormField
              label="CSCS Number"
              name="cscsNumber"
              type="text"
              value={formData.cscsNumber}
              onChange={handleChange}
              error={errors.cscsNumber}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField
              label="Stockbroker"
              name="stockbroker"
              type="text"
              value={formData.stockbroker}
              onChange={handleChange}
              error={errors.stockbroker}
            />
            <FormField
              label="Member Code"
              name="memberCode"
              type="text"
              value={formData.memberCode}
              onChange={handleChange}
              error={errors.memberCode}
            />
          </div>
        </FormSection>
        
        <FormSection title="Joint Applicant Information (if applicable)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Title"
              name="jointTitle"
              type="text"
              value={formData.jointTitle}
              onChange={handleChange}
              error={errors.jointTitle}
              placeholder="Mr./Mrs./Ms."
            />
            <FormField
              label="Surname"
              name="jointSurname"
              type="text"
              value={formData.jointSurname}
              onChange={handleChange}
              error={errors.jointSurname}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField
              label="First Name"
              name="jointFirstName"
              type="text"
              value={formData.jointFirstName}
              onChange={handleChange}
              error={errors.jointFirstName}
            />
            <FormField
              label="Other Names"
              name="jointOtherNames"
              type="text"
              value={formData.jointOtherNames}
              onChange={handleChange}
              error={errors.jointOtherNames}
            />
          </div>
        </FormSection>
        
        <FormSection title="Bank Information">
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
              label="BVN"
              name="bvn"
              type="text"
              value={formData.bvn}
              onChange={handleChange}
              error={errors.bvn}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <FormField
              label="Account Number"
              name="accountNumber"
              type="text"
              value={formData.accountNumber}
              onChange={handleChange}
              error={errors.accountNumber}
              required
            />
            <FormField
              label="Branch"
              name="branch"
              type="text"
              value={formData.branch}
              onChange={handleChange}
              error={errors.branch}
            />
          </div>
          
          <div className="mt-4">
            <FormField
              label="City/State"
              name="cityState"
              type="text"
              value={formData.cityState}
              onChange={handleChange}
              error={errors.cityState}
            />
          </div>
        </FormSection>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormView;