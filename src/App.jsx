import Navbar from './components/navbar/Navbar';
import Banner from "./components/banner/Banner";
import About from "./components/about/About"
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-black px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Resume />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
