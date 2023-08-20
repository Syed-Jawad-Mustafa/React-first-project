import minuse from "../../assets/Cards/Minus.svg";
const second = () => {
  return (
    <div>
      <h1 className="text-center mt-5 font-sz-clor">Welcome to the Inertia Agency</h1>
      <div className="d-flex justify-content-center">
        <img src={minuse} alt="" />
      </div>
      <p className="text-center mb-5">
        Inertia was founded to help developers and designers with their projects
        by <br className="mb-3" /> offering great quality products. By
        developing a nicely designed, easy to customize <br /> theme, we strive
        to offer a good variety of options to anyone without spending a lot
        <br /> of time and money.
      </p>
    </div>
  );
};
export default second;
