import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TourCard from "./components/TourCard/TourCard";
import Band from "./components/Band/Band";
import ClassComponent from "./ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <ContentCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
