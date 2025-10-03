import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../rtk/store";

import HeroSection from "../components/HeroSection";

import Loader from "../components/Loader";
import { fetchAllProducts } from "../rtk/slices/productSlice";
import { useEffect } from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  const homeProducts = products.slice(0, 10);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <div className="text-center  mt-16 mb-6">
        <h3 className="font-semibold text-4xl m-2"> Featured Products</h3>
        <p className="text-gray-600 text-md">
          Summer collection new modern design
        </p>
      </div>

      {status === "loading" && (
        <div className="flex justify-center  my-10">
          <Loader />
        </div>
      )}

      {status === "failed" && (
        <div className="text-center text-red-500 text-lg my-10">
          {error || "Something went wrong"}
        </div>
      )}

      {status === "succeeded" && (
        <div className="flex justify-center p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ProductList products={homeProducts} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
