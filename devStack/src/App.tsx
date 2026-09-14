import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="designLayout">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
      <Footer />
    </div>

  );
}

export default App;