import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({ image, name, price, id }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-[300px] p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-[220px] bg-gray-100  rounded-2xl flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain max-h-[200px] p-4 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      <div className="flex justify-between items-center">

        <p className="text-xl font-bold text-emerald-600 mt-1">${price}</p>
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="mt-2 bg-emerald-100/40 text-emerald-600 font-medium rounded-lg py-2 px-4 "
        >
          View Details
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
