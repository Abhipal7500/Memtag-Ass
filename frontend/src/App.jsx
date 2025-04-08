import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import TractionSection from './sections/TractionSection';
import CTASection from './sections/CTASection';
import Navbar from './sections/Navbar';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection />
      <CTASection />
    </div>
  );
}

export default App;
