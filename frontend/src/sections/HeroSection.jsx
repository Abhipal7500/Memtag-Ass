export default function HeroSection() {
    return (
      <section id="" className="relative overflow-hidden min-h-screen py-32 px-4 text-center bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="moving-corner-blob" />
  
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white transition-colors duration-500">
            AI-Powered Care for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Dementia Patients
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-500">
            Empowering caregivers with intelligent monitoring and personalized support.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#cta"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              Get Started →
            </a>
            <a
              href="#cta"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg text-sm font-semibold hover:shadow transition-all"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    );
  }
  