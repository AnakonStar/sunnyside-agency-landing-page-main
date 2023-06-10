import './App.scss';

import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Gallery from './components/Gallery';
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
