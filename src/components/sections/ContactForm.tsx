'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  gymName: z.string().min(2, 'Gym name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  monthlyRevenue: z.string().min(1, 'Please select your current monthly revenue'),
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
      // Add UTM tracking parameters if available
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      };

      const submissionData = {
        ...data,
        ...utmData,
        timestamp: new Date().toISOString(),
        source: 'gym-growth-website'
      };

      // Replace with your actual GoHighLevel webhook URL
      const webhookUrl = process.env.NEXT_PUBLIC_GOHIGHLEVEL_WEBHOOK_URL || '/api/contact';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
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

  const revenueOptions = [
    { value: '', label: 'Select current monthly revenue' },
    { value: 'under-5k', label: 'Under £5,000' },
    { value: '5k-10k', label: '£5,000 - £10,000' },
    { value: '10k-20k', label: '£10,000 - £20,000' },
    { value: '20k-50k', label: '£20,000 - £50,000' },
    { value: 'over-50k', label: 'Over £50,000' },
  ];

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;ve received your information and one of our gym growth specialists will contact you within 24 hours to discuss your free growth assessment.
            </p>
            <p className="text-gray-600">
              In the meantime, check your email for our free &quot;5 Quick Wins for Gym Owners&quot; guide.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Growth Assessment
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover exactly how to double your gym&apos;s revenue in the next 90 days. 
            Book your free consultation with our gym growth specialists.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gymName" className="block text-sm font-medium text-gray-700 mb-2">
                  Gym Name *
                </label>
                <input
                  {...register('gymName')}
                  type="text"
                  id="gymName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your gym/studio name"
                />
                {errors.gymName && (
                  <p className="mt-1 text-sm text-red-600">{errors.gymName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-2">
                Current Monthly Revenue *
              </label>
              <select
                {...register('monthlyRevenue')}
                id="monthlyRevenue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                {revenueOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.monthlyRevenue && (
                <p className="mt-1 text-sm text-red-600">{errors.monthlyRevenue.message}</p>
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
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg"
            >
              {submitStatus === 'submitting' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Get My Free Assessment
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