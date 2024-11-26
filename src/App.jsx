import Hero from "./components/Hero";
import MainNavbar from "./components/MainNavabr";


const App = () => {
  return (
    <div className="bg-primary h-screen">
      <MainNavbar />
      <Hero />
    </div>
  );
};

export default App;