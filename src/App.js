import Berita from "./components/Berita";
import Footer from "./components/Footer";
import History from "./components/History";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Tim from "./components/Tim";
import Top from "./components/Top";
import VirtualTour from "./components/VirtualTour";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Join />
      <History />
      <Berita />
      <VirtualTour />
      <Tim />
      <Footer />
    </div>
  );
}

export default App;
