import React, { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

//const APIUrl = "https://fakestoreapi.com/products";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axiosInstance.get("/products");
    setProducts(response.data);
    setLoading(false);
  };
  // console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader className={"p-30"} />;
  return (
    <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-2 max-[300px]:grid-cols-1 gap-4 p-6">
      {products.map((item) => {
        return <ProductCard key={item.id} details={item} />;
      })}
    </div>
  );
};

const ProductCard = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${details.id}`)}
      className="group bg-gray-700 rounded-b-lg cursor-pointer"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400"
        src={details.image}
        alt=""
      />
      <div className="p-5">
        <h1 className="text-2xl line-clamp-2 group-hover:text-blue-400">
          {details.title}
        </h1>

        <p className="text-xl font-medium text-white/70">{details.price} Rs</p>
        <div className="flex gap-2 my-3 items-center">
          <p className="bg-green-600 w-fit py-1 px-4 rounded-xl">
            ⭐{details.rating.rate}
          </p>
          <p>{details.rating.count}</p>
        </div>
      </div>
    </div>
  );
};
export default Products;
