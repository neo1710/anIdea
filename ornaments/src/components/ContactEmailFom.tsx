'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9afa9419-e57d-4fa9-9ad2-f0a5f137e23b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-10 h-auto flex items-center justify-center">
      <div className="backdrop-blur-sm bg-none rounded-2xl p-4 sm:p-6 md:p-7 w-full transform transition-all duration-300 hover:scale-105">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="space-y-4">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-pink-500"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full px-2 sm:px-4 py-1 text-[0.9rem] sm:text-[1rem] sm:py-3 bg-white/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 backdrop-blur-sm hover:bg-white/70"
            />
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-pink-500"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email@example.com"
              className="w-full px-2 sm:px-4 py-1 text-[0.9rem] sm:text-[1rem] sm:py-3 bg-white/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 backdrop-blur-sm hover:bg-white/70"
            />
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-pink-500"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message here..."
              className="w-full px-2 sm:px-4 py-1 text-[0.9rem] sm:text-[1rem] sm:py-3 bg-white/50 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 backdrop-blur-sm hover:bg-white/70 resize-none"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
          >
            <span className="relative text-[0.9rem] sm:text-[1rem] z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-4 sm:w-5 h-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 sm:w-5 h-5 sm:h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {submitStatus && (
            <div className={`text-center p-4 rounded-xl transition-all duration-300 animate-pulse ${submitStatus === 'success'
                ? 'bg-green-100 text-green-700 border border-green-200 dark:border-green-700'
                : 'bg-red-100 text-red-700 border border-red-200 dark:border-red-700'
              }`}>
              {submitStatus === 'success'
                ? '✨ Message sent successfully! We\'ll get back to you soon.'
                : '❌ Something went wrong. Please try again.'
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}