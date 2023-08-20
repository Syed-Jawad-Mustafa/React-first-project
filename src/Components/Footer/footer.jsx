import "./footer.css";
import twetter from "../../assets/Cards/twetter.svg";
import facebook from "../../assets/Cards/facebook.svg";
import github from "../../assets/Cards/github.svg";
import basketball from "../../assets/Cards/basketball.svg";
const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <div className="row py-5 text-center">
          <div className="col-md-3">
            {" "}
            <h5 className="py-4">COMPANY</h5>
            <p>Portfolio</p>
            <p>Our clients</p>
            <p>Careers</p>
          </div>
          <div className="col-md-3">
            {" "}
            <h5 className="py-4">OFFICES</h5>
            <p>345 Main St. San Francisco, CA</p>
            <p>103 N. 13th Street. Seattle, WA</p>
            
          </div>
          <div className="col-md-3">
            {" "}
            <h5 className="py-4">CONTACT</h5>
            <p>+81 555 489 902</p>
            <p>info@themes.com</p>
            <p>Careers</p>
          </div>
          <div className="col-md-3">
            {" "}
            <h5 className="py-4">ABOUT</h5>
            <p>Log in to your account</p>
            <p>Support</p>
           
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <img src={twetter} className="px-2" />
          <img src={facebook} className="px-2" />
          <img src={github} className="px-2" />
          <img src={basketball} className="px-2" />
        </div>
        <div className=" text-center"> <p>All rights reserved. © 2020.</p>
        </div>
        <div className="text-center pb-5">
          <span className="pe-3 ">Privacy & terms</span>
          <span className="px-3">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
