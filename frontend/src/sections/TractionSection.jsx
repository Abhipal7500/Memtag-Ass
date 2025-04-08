import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TractionSection() {
  const [counts, setCounts] = useState({ users: 0, hospitals: 0, preorders: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        users: Math.min(prev.users + 5, 1200),
        hospitals: Math.min(prev.hospitals + 1, 15),
        preorders: Math.min(prev.preorders + 2, 500),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="traction"
      className="relative px-6 py-28 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-500"
    >

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
          Traction{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            So Far
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              value: `${counts.users}+`,
              label: 'Caregivers using MemoTag',
            },
            {
              value: counts.hospitals,
              label: 'Hospitals partnered',
            },
            {
              value: `${counts.preorders}+`,
              label: 'Preorders received',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
