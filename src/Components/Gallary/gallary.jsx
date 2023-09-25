import "./gallay.css";
import coffe from "../../assets/Cards/coofe-cup.svg";
import books from "../../assets/Cards/stashnory-items.svg";
import board from "../../assets/Cards/board-items.svg";
import candy from "../../assets/Cards/candy-bags.svg";
import icecreem from "../../assets/Cards/ice-creem.svg";
import postcard from "../../assets/Cards/post-card.svg";
import minuse from "../../assets/Cards/Minus.svg";
import botttom from "../../assets/Cards/bottom-borderr.svg";

const Gallary = () => {
  return (
    <div className="bg-color ">
    <div className="container  ">
      <h1 className="text-center feature-padding font-sz-clor">Featured Projects</h1>
      <div className="d-flex justify-content-center minus"><img src={minuse} alt=""/> </div>
      <div className="row ">
        <div className="col-md-4 ">
          <img src={coffe} alt="" className=" img-fluid"/>
          <img src={candy} alt="" className=" img-fluid pt-4"/>
        </div>
        <div className="col-md-4">
          <img src={books} alt="" className=" img-fluid padding-img"/>{" "}
          <img src={icecreem} alt="" className=" img-fluid pt-4" />
        </div>
        <div className="col-md-4">
          <img src={board} alt="" className=" img-fluid padding-img"/>
          <img src={postcard} alt="" className=" img-fluid pt-4"/>
        </div>
        
      </div>
   
    </div>
    <div><img className="padding-border img-fluid" src={botttom} alt=""/></div>
    </div>
  );
};
export default Gallary;
