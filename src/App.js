import './App.scss';

import Introduction from './components/Introduction';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="container">
      <Introduction />
      <main>
        <About />
        <Services />
        <Projects/>
        <Gallery />
      </main>
      <Footer />
    </div >
  );
}
