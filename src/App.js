import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-around">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
