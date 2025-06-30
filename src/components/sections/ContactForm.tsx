'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  currentClients: z.string().min(1, 'Please enter how many clients you currently work with'),
  helpNeeded: z.string().min(1, 'Please select what area you need help with'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      // Submit to GoHighLevel webhook
      const response = await fetch('https://api.leadconnectorhq.com/widget/form/On765kpbQtjJWQ9kdmwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'gym-lead-hub-website'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
      console.error('Form submission error:', error);
    }
  };

  const helpOptions = [
    { value: '', label: 'What area do you need the quickest and most critical help?' },
    { value: 'lead-generation', label: 'Lead Generation & Marketing' },
    { value: 'sales-conversion', label: 'Sales & Conversion' },
    { value: 'member-retention', label: 'Member Retention' },
    { value: 'pricing-strategy', label: 'Pricing Strategy' },
    { value: 'business-scaling', label: 'Business Scaling & Operations' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'other', label: 'Other' },
  ];

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You! Your 100 FREE Leads Are Coming
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your information and one of our gym growth specialists will contact you within 24 hours to discuss your 100 FREE leads and growth strategy.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-lg mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 100 Leads Coming Your Way<br/>
                ✅ No Payment Required<br/>
                ✅ Expert Will Call You Soon
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-500/30 rounded-full text-green-200 text-sm font-bold mb-6">
            🎯 100 Qualified Leads FREE - No Payment Until Delivered
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Claim Your 100 FREE Leads
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            We'll generate 100 qualified leads for your gym completely FREE. You only pay after we deliver your first 100 leads - no upfront costs, no risk.
          </p>
          <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-green-200">
              ✅ 100 Leads Guaranteed<br/>
              ✅ No Upfront Payment<br/>
              ✅ You Only Pay After Results
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  {...register('firstName')}
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  {...register('lastName')}
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="currentClients" className="block text-sm font-medium text-gray-700 mb-2">
                How many clients do you currently work with?
              </label>
              <input
                {...register('currentClients')}
                type="text"
                id="currentClients"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="How many clients do you currently work with?"
              />
              {errors.currentClients && (
                <p className="mt-1 text-sm text-red-600">{errors.currentClients.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="helpNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                What area do you need the quickest and most critical help?
              </label>
              <select
                {...register('helpNeeded')}
                id="helpNeeded"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                {helpOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.helpNeeded && (
                <p className="mt-1 text-sm text-red-600">{errors.helpNeeded.message}</p>
              )}
            </div>

            {submitStatus === 'error' && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg"
            >
              {submitStatus === 'submitting' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Claiming Your 100 FREE Leads...
                </>
              ) : (
                <>
                  Claim My 100 FREE Leads Now
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              🔒 Your information is secure and will never be shared. 
              We typically respond within 2 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}