// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitInquiry } from '../services/api';
import SplitText from '../components/SplitText';
import Accordion from '../components/Accordion';

const faqs = [
    { q: "What types of projects do you handle?", a: "We specialize in high-end residential and commercial projects, including custom villas, luxury apartments, and modern office spaces." },
    { q: "What is your construction timeline?", a: "The timeline varies depending on the project's scope and complexity. A typical residential project takes around 18-24 months from design to completion." },
    { q: "Do you also provide interior design services?", a: "Yes, we offer comprehensive turnkey solutions that include both architectural and interior design services to ensure a cohesive and beautifully finished space." },
    { q: "In which cities do you operate?", a: "Currently, our primary operations are in Mumbai, Navi Mumbai, Pune, and surrounding areas. However, we are open to considering exceptional projects in other locations." }
];

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });

  // === YAHAN FIX KIYA HAI ===
  const handleChange = (e) => {
    const { name, value } = e.target; // Yeh line add ki hai
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'loading' });
    try {
      await submitInquiry(formData);
      setStatus({ message: 'Thank you! We will get back to you soon.', type: 'success' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <SplitText 
          tag="h1"
          text="Get in Touch"
          className="text-5xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white"
          splitType="words"
        />
        <p className="text-lg text-slate-600 dark:text-slate-400">We'd love to hear from you. Let's build something amazing together.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 bg-white/50 dark:bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Phone (Optional)</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="5" required className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
            {status.message && (
              <p className={`mt-4 text-center font-semibold ${status.type === 'success' ? 'text-green-500' : status.type === 'error' ? 'text-red-500' : 'text-slate-500'}`}>{status.message}</p>
            )}
          </form>
        </div>
        <div className="lg:col-span-2 space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3"><span className="text-orange-500">📍</span><span>Nerul, Navi Mumbai</span></div>
                    <div className="flex items-center space-x-3"><span className="text-orange-500">✉️</span><span>contact@jmmhomes.in</span></div>
                    <div className="flex items-center space-x-3"><span className="text-orange-500">📞</span><span>+91 99207 02559</span></div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30177.77197177579!2d72.99084323955078!3d19.031088600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3e232a393fb%3A0x89224645293206f!2sNerul%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727878891559!5m2!1sen!2sin" width="100%" height="100%" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.q}>
                    {faq.a}
                </Accordion>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;