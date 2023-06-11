import Navbar from './components/navbar/Navbar';
import Banner from "./components/banner/Banner";
import About from "./components/about/About"
// import Featured from "./components/featured/Featured"
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-black px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        {/* <Featured /> */}
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
