import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="designLayout">
    <Navbar />
      <main>
        <Hero />
        <Technologies />
        <YourStack />
      </main>
      <Footer />
    </div>

  );
}

export default App;