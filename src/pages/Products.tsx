import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../rtk/store";
import { useEffect } from "react";
import { fetchAllProducts } from "../rtk/slices/productSlice";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";

const Products = () => {
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);


  return (
    <>

    <div className="text-4xl font-semibold text-emerald-600 mt-7 ml-12 "> Products</div>
      {status === "loading" && (
        <div className="flex justify-center  my-80">
          <Loader />
        </div>
      )}

      {status === "failed" && (
        <div className="text-center text-red-500 text-lg my-10">
          {error || "Something went wrong"}
        </div>
      )}

      {status == "succeeded" && (
        <div className=" p-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products && <ProductList products={products}/>
          }
        </div>
      )}
    </>
  );
};

export default Products;
