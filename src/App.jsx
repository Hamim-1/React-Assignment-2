import Feedback from "./components/Feedback";
import Effort from "./components/Effort";
import Hero from "./components/Hero";
import MainNavbar from "./components/MainNavabr";
import Partners from "./components/Partners";
import Services from './components/Services';
import Train from "./components/Train";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="bg-primary">
      <MainNavbar />
      <Hero />
      <Partners />
      <Services />
      <Train />
      <Feedback />
      <Effort />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;