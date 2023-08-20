import "./header.css";
import logoheader from "../../assets/Cards/logo-img.svg";
const Header = () => {
  return (
    <div>
      <div className="bg-image position-relative">
        <nav class="container navbar navbar-expand-lg ">
          <a class="navbar-brand" href="#">
            <img src={logoheader} alt="" />
          </a>
          <button class="navbar-toggler nav-bg text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse Spartan-faimly" id="navbarSupportedContent">
            <ul class=" header-margin navbar-nav me-auto mb-1 mb-lg-0  ">
              <li>
                <a href="#home">Home Pages</a>
              </li>
              <li>
                <a href="#About">Blogs</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
              <li>
                <a href="#ecommerce">Ecommerce</a>
              </li>
              <li>
                <a href="#rtl versin">RTL Version</a>
              </li>
              <li>
                <a href="#theme docs">Theme docs</a>
              </li>
            </ul>
            <div>
              <button class="Buy-btn rounded">Buy now</button>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-12">
            <div className="text-white position-absolute top-50 start-50 translate-middle text-center Poppins-family">
          <p className="word-space poopins-faimly">WE CREATE DIGITAL PRODUCTS</p>
          <h1 className="padding-hero intro-text">
            Introduce OurCreative Agency.
          </h1>
          <div>
            <button className="see-our-word  rounded">SEE OUR WORK</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
