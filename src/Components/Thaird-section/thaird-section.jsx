import "./thaird.css";
import stripeimg from "../../assets/Cards/stripe.svg";
import Dribbble from "../../assets/Cards/Dribbble.svg";
const Thaird = () => {
  return (
    <div className="container">
      <div className="row row-pading tet-center">
        <div className="col-md-6 ">
          <div ><img src={stripeimg} alt="stripe "/></div>
          <h6 className=" mb-3 py-4 ">
            {" "}
            "Focus on creating and growing your projects and <br /> websites,
            and we‘ll always take care of spinning up new <br /> designs for
            your users and making sure they look great"{" "}
          </h6>
          <h6 className="font-color">Roger Waters</h6>
          <p className="co-font">Head of Design</p>
        </div>
        <div className="col-md-6 ">
        <div><img src={Dribbble} alt="Dribbble text"/></div>
          <h6 className=" mb-3 py-4">
            "The work that Inertia has done for our mobile app <br /> designs
            far exceeded our expectations, can't wait to <br /> work with them
            once again!"{" "}
          </h6>
          <h6 className="font-color">David Gilmour</h6>
          <p className="co-font">Co-Founder</p>
        </div>
      </div>
    </div>
  );
};
export default Thaird;
