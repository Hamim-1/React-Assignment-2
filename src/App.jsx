import Hero from "./components/Hero";
import MainNavbar from "./components/MainNavabr";
import Partners from "./components/Partners";
import Services from './components/Services';


const App = () => {
  return (
    <div className="bg-primary">
      <MainNavbar />
      <Hero />
      <Partners />
      <Services />
    </div>
  );
};

export default App;