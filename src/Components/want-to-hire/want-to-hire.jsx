import "./want-to-hire.css";
import beard from "../../assets/Cards/Background-beard.svg";
import aerow from "../../assets/Cards/Arrow-right-solid.png"
const Wanthire = () => {
  return (
    <div>
      <div className="position-relative">
        <img src={beard} className="img-fluid" />
      
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-img">
        <h1 className="fnt-size">Want to hire us?</h1>
        <p className="fnte-size">Have an idea for an awesome project? We'd love to help make it real.</p>
        <button className="touch rounded"> Get in touch <img src={aerow} alt="" /></button>
      </div>
      </div>
    </div>
  );
};
export default Wanthire;
