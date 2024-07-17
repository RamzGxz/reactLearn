/* eslint-disable react/prop-types */
const FormEdit = ({
  showFormEdit,
  setShowFormEdit,
  image,
  setImage,
  title,
  setTitle,
  desc,
  setDesc,
}) => {
  return (
    <div
      className={`${
        showFormEdit ? "fixed" : "hidden"
      } pt-20 hitamkan z-10 top-0 left-0 bottom-0 right-0 h-screen`}
    >
      <div>
        <h1 className="text-center text-xl text-white mb-10 font-bold">
          Ubah product
        </h1>
        <form className="max-w-lg  mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Title
            </label>
            <input
              type="text"
              id="text"
              className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Link Img
            </label>
            <input
              type="text"
              id="text"
              className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
              placeholder="link img"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className=" block mb-2 text-sm font-medium text-white "
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 -300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 -300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() => setShowFormEdit(!showFormEdit)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
