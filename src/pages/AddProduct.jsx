import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [description, setDescription] = useState("");
  const [error,setError] = useState([]) 

  const redirect = useNavigate();

  const form = useRef();

  const tambahData = async (e) => {
  try{
    e.preventDefault();

    const res = await axios.post(
      "https://backend-pembelajaran.vercel.app/api/product",
      {
        title: title,
        imgURL: imgURL,
        description: description,
      }
    );

    form.current.reset();
    redirect("/product");


    console.log(res);
  }catch(err){
    setError(err.response.data.errors)
    alert("terjadi error")
  }


  };

  console.log(error.join("\n"))

  return (  
    <div className="">
      <Navbar />
      <h1 className="text-center whitespace-pre-line" >{error.join("\n")}</h1>
      <form ref={form} className="max-w-lg  mx-auto mt-20" onSubmit={tambahData}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            id="text"
            className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Link Img
          </label>
          <input
            type="text"
            id="text"
            className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
            placeholder="link img"
            onChange={(e) => setImgURL(e.target.value)}
    
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className=" block mb-2 text-sm font-medium text-gray-900  "
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
            onChange={(e) => setDescription(e.target.value)}
    
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 -300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
