/* eslint-disable react/prop-types */
import axios from "axios";

const CardProduct = ({
  data,
  setShowFormEdit,
  showFormEdit,
  setImage,
  setTitle,
  setDesc,
}) => {
  const hapusProduct = async (id) => {
    alert(id);

    await axios.delete(
      `https://backend-pembelajaran.vercel.app/api/product/${id}`
    );

    window.location.href = "/product";
  };

  const editBtn = () => {
    setImage(data.imgURL);
    setTitle(data.title);
    setDesc(data.description);
    setShowFormEdit(!showFormEdit);
  };

  return (
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
      <div>
        <img className="rounded-t-lg" src={data.imgURL} alt="" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {data.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <div className="flex justify-between items-center">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
            onClick={() => hapusProduct(data._id)}
          >
            Hapus
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-500"
            onClick={editBtn}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
