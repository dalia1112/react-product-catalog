import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { type AppDispatch, type RootState } from "../rtk/store";
import { fetchProductById } from "../rtk/slices/productSlice";

const ProductDetails = () => {
  const { item } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <div className="flex items-center justify-center h-screen px-4">
      {item ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl w-full">
          {/* Image Section */}
          <div className="flex justify-center items-center bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <img
              src={item.image }
              alt={item.title}
              className="object-contain max-h-[300px] w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{item.title}</h1>
            <h3 className="font-semibold text-lg md:text-xl text-gray-800">
              Product Description
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>

            <p className="text-emerald-600 font-bold text-2xl mt-2">${item.price}</p>

            <button className="mt-3 bg-emerald-200/40 text-emerald-700 py-2 rounded-lg font-semibold hover:bg-emerald-200 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-xl">Product Not Found</div>
      )}
    </div>
  );
};

export default ProductDetails;
