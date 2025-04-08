import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative px-6 py-28 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 overflow-hidden transition-colors duration-500"
    >


      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
       
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          The{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Problem
          </span>
        </h2>

    
        <p className="mb-12 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Dementia is affecting millions across the globe, yet diagnosis often comes too late for effective intervention.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: '50M+ affected globally',
              desc: 'With increasing age, dementia rates are rising rapidly, putting a huge strain on families and healthcare systems.',
            },
            {
              title: 'Early signs often missed',
              desc: 'Memory lapses, confusion, and behavioral changes often go unnoticed until significant decline has occurred.',
            },
            {
              title: 'No continuous monitoring',
              desc: 'Caregivers lack proper tools for real-time tracking of cognitive health and behavior, making timely support difficult.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
