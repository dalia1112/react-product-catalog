import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="relative h-[400px] lg:h-[650px] bg-cover bg-top bg-no-repeat  "
    >
      {/* Content */}
      <div className=" absolute top-1/3  left-1/12   ">
        <p className="font-semibold text-3xl lg:text-6xl mb-4">
          Super value deals <br />
          <span className="text-emerald-600">On all products</span>
        </p>

        <p className="text-gray-500">
          {" "}
          Refresh your style with on-trend piecies
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-5 px-5 py-2 md:px-7 md:py-3 bg-emerald-600 rounded-3xl text-white  text-sm md:text-base lg:text-lg"
        >
          shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
