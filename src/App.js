import "./App.css";
import Header from "./Components/Header/header.jsx";
import Second from "./Components/Second-section/second.jsx";
import Gallary from "./Components/Gallary/gallary.jsx";
import Thaird from "./Components/Thaird-section/thaird-section";
import Fourth from "./Components/Fourth-section/fourth-section";
import Fifth from "./Components/Fifth-section/fifth";
import Wanthire from"./Components/want-to-hire/want-to-hire";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <Second />
      <Gallary />
      <Thaird/>
      <Fourth/>
      <Fifth/>
      <Wanthire/>
      <Footer/>
    </>
  );
}

export default App;
