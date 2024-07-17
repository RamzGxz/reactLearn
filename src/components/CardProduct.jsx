/* eslint-disable react/prop-types */
const CardProduct = ({ data }) => {
  const hapusProduct = () => {
    alert("okey");
  };

  return (
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
      <div>
        <img className="rounded-t-lg" src={data.imgURL} alt />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
          onClick={hapusProduct}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};
export default CardProduct;
