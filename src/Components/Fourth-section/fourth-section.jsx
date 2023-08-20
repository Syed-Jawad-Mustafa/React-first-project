import "./forth.css";
import minuse from "../../assets/Cards/Minus.svg";
import location from "../../assets/Cards/Location-outline.png";
import Aerow from "../../assets/Cards/Arrow-right-solid.png";
const Fourth = () => {
  return (
    <div className="bg-color">
      <div className="container py-5 ">
        {" "}
        <div>
          <h2 className="font-sz-clor">Careers at Inertia</h2>
        </div>{" "}
        <div className="">
          <img src={minuse} alt="" />
        </div>
        <p className="py-4">
          Join us in our quest to bring the best experiences through <br />{" "}
          design and technology to the world, our most important <br /> vision
          is to have the best work culture possible.
        </p>

        <div className="row txt-center">
          <div className="col-md-4">
            <div className="flexbox location-image ">
            <h4 className=" font-color">
              Dublin
              <img src={location} className="img-fluid img-pdd mx-auto " />
              </h4>
             
            </div>
            

            <p className="font-width">Head of Marketing</p>
            <p className="font-width">UX Designer</p>
            <p className="font-width">Senior Programmer</p>
            <p className="font-width">Mobile UI Designer</p>
            <p className="font-width">Lead Product Designer</p>
          </div>
          <div className="col-md-4">
              <div className="flexbox location-image">
              <h4 className=" font-color">
              Amsterdam
              <img
                src={location}
                alt=""
                className="img-pdd"
              />
            </h4>
              </div>
            <p className="font-width">Head of Operations</p>
            <p className="font-width">Mobile Engineer</p>
            <p className="font-width">Animation Designer</p>
          </div>
          <div className="col-md-4">
            <div className="flexbox location-image">  
            <h4 className="font-color ">
              Mexico City
              <img
                src={location}
                alt=""
                className="img-pdd"
              />
            </h4>
            </div>
            <p className="font-width">Head of Motion Design</p>
            <p className="font-width">Graphics Engineer</p>
            <p className="font-width">Senior UI Designer</p>
            <p className="font-width">Backend Engineer</p>
          </div>
        </div>
        <div className="py-5 Careers-At">
          <button className="Careers-At-Intertia  rounded">
            Careers At Intertia <img src={Aerow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Fourth;
