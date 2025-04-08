import { motion } from 'framer-motion';
import { Brain, LineChart, Heart } from 'lucide-react'; // Optional: You can switch this with Heroicons or your preferred icon set

export default function SolutionSection() {
  const steps = [
    {
      icon: <Brain className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
      title: '24/7 Monitoring',
      desc: 'Continuous tracking of physical and cognitive patterns using advanced AI algorithms.',
    },
    {
      icon: <LineChart className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
      title: 'Early Detection',
      desc: 'Identify potential issues before they become serious problems.',
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
      title: 'Personalized Care',
      desc: "AI-driven recommendations tailored to each patient's unique needs.",
    },
  ];

  return (
    <section
      id="solution"
      className="relative px-6 py-28 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-500"
    >
     

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
          How{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            MemoTag
          </span>{' '}
          Works
        </h2>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                {step.title}
              </h3>
              <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
