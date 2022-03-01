import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TourCard from "./components/TourCard/TourCard";
import Band from "./components/Band/Band";

function App() {
  return (
    <>
      <Navbar />
      <Band />
      <div>
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </>
  );
}

export default App;
