import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post('https://memtagbackend.onrender.com/api/form', formData);
      setStatus("✅ Success! We'll get in touch.");
      setFormData({ name: '', email: '', role: '' });
      setErrors({});
    } catch (err) {
      setStatus('❌ Submission failed. Please try again.');
    }
  };

  return (
    <section
      id="cta"
      className="relative px-6 py-24 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500"
    >
      <motion.div
        className="relative z-10 max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Join the future of dementia care. Contact us to learn more about how MemoTag can help your loved ones.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">I am a</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select</option>
              <option value="Healthcare Professional">Healthcare Professional</option>
              <option value="Caregiver">Caregiver</option>
              <option value="Family Member">Family Member</option>
              <option value="Other">Other</option>
            </select>
            {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
          >
            Join Waitlist
          </button>

          {status && (
            <p
              className={`text-sm mt-2 text-center ${
                status.includes('Success')
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
