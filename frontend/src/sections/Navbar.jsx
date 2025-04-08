import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && isSystemDark);
    setDark(shouldBeDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm transition-colors duration-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
         <a href="">MemoTag</a> 
        </motion.h1>

        <nav className="hidden md:flex gap-8 items-center text-gray-800 dark:text-gray-100 transition-colors duration-500">
          <a href="#problem" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Problem</a>
          <a href="#solution" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Solution</a>
          <a href="#traction" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Traction</a>
          <a href="#cta" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Contact</a>
          
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-800" />
            )}
          </button>
          <a
            href="#cta"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
