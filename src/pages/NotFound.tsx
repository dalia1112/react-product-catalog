import { useNavigate } from "react-router-dom";
import notFound from "../assets/notFound.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left gap-4">
          <h1 className="text-gray-300 font-extrabold text-6xl md:text-7xl">
            Error 404
          </h1>
          <h2 className="font-bold text-3xl md:text-5xl">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-xl leading-relaxed">
            Something went wrong. It looks like your requested page could not be found. 
            The link might be broken or the page may have been removed.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 mx-auto md:mx-0 px-6 py-3 bg-black text-white rounded-3xl text-base md:text-lg hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>

        {/* Image Section */}
        <div className="md:flex justify-center items-center sm:hidden">
          <img
            src={notFound}
            alt="Not Found"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
