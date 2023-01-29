import About from "./components/About";
import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="flex h-full flex-col bg-zin-50 dark:bg-black">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
