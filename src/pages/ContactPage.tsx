import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Mock email sending (in a real app, you'd replace this with actual emailjs code)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real application with EmailJS configured:
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
      console.error('Email sending error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50 dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Get in <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Have questions about our services or ready to start a project? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:order-2"
            >
              <div className="bg-light-100 dark:bg-dark-700 p-8 rounded-lg shadow-glass h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                        <MapPin className="w-5 h-5 text-primary-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Our Office
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        123 Tech Street, Innovation Center<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                        <Phone className="w-5 h-5 text-primary-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Phone
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        +1 (415) 555-2671
                      </p>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Monday to Friday, 9am to 6pm PST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                        <Mail className="w-5 h-5 text-primary-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        info@adsfusion.com
                      </p>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        support@adsfusion.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-light-200 dark:bg-dark-600 p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-light-200 dark:bg-dark-600 p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-light-200 dark:bg-dark-600 p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-light-200 dark:bg-dark-600 p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:order-1"
            >
              <div className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-glass">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg p-6 text-center"
                  >
                    <CheckCircle className="w-12 h-12 text-success-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-success-700 dark:text-success-300 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-success-600 dark:text-success-400">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Your Email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>
                    
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      label="Subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                    />
                    
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us more about your project, needs, and timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`
                          w-full rounded-md shadow-sm px-4 py-3
                          ${errors.message ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : 'border-gray-300 dark:border-dark-600 focus:ring-primary-500 focus:border-primary-500'}
                          dark:bg-dark-700 dark:text-white
                          transition-colors
                        `}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-error-600">{errors.message}</p>
                      )}
                    </div>
                    
                    {submitError && (
                      <div className="bg-error-50 dark:bg-error-900/20 text-error-600 dark:text-error-400 p-3 rounded-md">
                        {submitError}
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We're conveniently located in the heart of San Francisco's tech district.
            </p>
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-glass">
            <div className="h-[400px] w-full relative">
              {/* In a real application, you'd embed a Google Map here */}
              <div className="absolute inset-0 bg-light-300 dark:bg-dark-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Map placeholder - In a production app, embed a real map here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;