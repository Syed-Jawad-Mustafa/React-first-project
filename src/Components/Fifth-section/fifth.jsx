import "./fifth.css";
import minuse from "../../assets/Cards/Minus.svg";
import laptop from "../../assets/Cards/laptop-try.jpg";
import MIKE from "../../assets/Cards/MIKE-DAMON.svg"
import office from "../../assets/Cards/organaiesd-office.jpg";
import arcitacture from "../../assets/Cards/morderan-arcitacture.jpg";
import jesseks from "../../assets/Cards/jesseks-riviewer.svg"
import tim from "../../assets/Cards/tim-norton-rivwer.svg"
const Fifth = () => {
  return (
    <div className="container padding-container">
      {" "}
      <h1 className="font-sz-clor">From the blog</h1>
      <img src={minuse} alt="" className="py-4" />
      <div className="row ">
        <div className="col-md-4">
            <img src={laptop} alt="" />
            <h3 className="py-3 font-card">Make your team a Design driven  company</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC, making it <br /> over 2000 years old.</p>
            <div className="d-flex">
                <img src={MIKE} alt="" />
                <p className="pt-3 ps-2 font-rivewer">BY MIKE DAMON</p>
            </div>
        </div>
        <div className="col-md-4">
            <img src={office} alt="" />
            <h3 className="py-3 font-card">How to nurture a calm and <br /> organized work culture</h3>
            <p>There are many variations of passages of Lorem Ipsum  available, but the majority have suffered <br /> alteration in some form, by injected humour.</p>
            <div className="d-flex">
                <img src={jesseks} alt="" />
                <p className="pt-3 ps-2 font-rivewer">BY TIM NORTON</p>
            </div>
        </div>
        <div className="col-md-4">
            <img src={arcitacture} alt="" />
            <h3 className="py-3 font-card">How can the architecture influence our mood</h3>
            <p>The standard chunk of Lorem Ipsum used since <br /> the 1500s is reproduced below for those <br /> interested. Sections 1.10.32 and 1.10.33.</p>
            <div className="d-flex">
                <img src={tim} alt="" />
                <p className="pt-3 ps-2 font-rivewer">BY JESSICA JONES</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Fifth;
