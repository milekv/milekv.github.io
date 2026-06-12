import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PortfolioSnapshot } from './components/PortfolioSnapshot';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectBridge } from './components/ProjectBridge';
import { ProjectCommandCenter } from './components/ProjectCommandCenter';
import { AdditionalProjects } from './components/AdditionalProjects';
import { DataPipeline } from './components/DataPipeline';
import { Skills } from './components/Skills';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[#050a1e]">
        <Navigation />
        <CommandPalette />
        <Hero />
        <PortfolioSnapshot />
        <About />
        <Projects />
        <ProjectBridge />
        <ProjectCommandCenter />
        <AdditionalProjects />
        <DataPipeline />
        <Skills />
        <Terminal />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
