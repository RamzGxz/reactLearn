import axios from "axios";
import { useState, useEffect } from "react";
import CardProduct from "../components/CardProduct";

const Product = () => {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("tidak ada");

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const data = await axios.get(
        "https://backend-pembelajaran.vercel.app/api/product"
      );
      setProduct(data.data.data);
    };

    getProduct();
  }, []);

  return (
    <div className="p-5">
      <h1>ini halaman product</h1>
      <p className="text-red-500">jumlah {nama}</p>
      <button
        className="py-1 px-4 bg-green-400 rounded-md mt-10"
        onClick={() => {
          // setCount(count + 1);
          setNama("mudapedia");
        }}
      >
        tambah
      </button>

      <div className="mt-10 p-5 flex justify-between flex-wrap items-center gap-5">
        {product.map((value, index) => {
          // console.log(value, "ni value");
          return <CardProduct data={value} />;
        })}
      </div>
    </div>
  );
};

export default Product;
