import Line from "../components/Line";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/submit ");
  }

  return (
    <section className="w-full flex flex-col justify-evenly bg-gray-50">
      <Line width={66.66} />

      <div className="w-full min-h-[87vh] py-[50px] px-[20px] mt-14 flex flex-col items-center justify-evenly">
        <h4 className="text-[27px] font-semibold">Step #2</h4>
        <h1 className="text-[27px] font-semibold lg:w-[30%] md:w-[50%] text-center">
          Details
        </h1>
        <form className="lg:w-[600px] flex flex-col justify-evenly" onSubmit={handleSubmit}>
          <div className="input-box w-full mt-3 flex items-start flex-col h-[80px]">
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full h-full border-2 border-gray-300 rounded-md"
              type="text"
              required
            />
          </div>
          <div className="input-box w-full flex-wrap mt-3 flex items-start flex-row h-[80px]">
            <div className="ls flex flex-col h-full w-[50%] pxl-3">
              <label className="mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full h-full border-2 border-gray-300 rounded-md"
                type="email"
                required
              />
            </div>
            <div className="rs flex flex-col h-full w-[50%] px-3">
              <label className="mb-1" htmlFor="number">
                Phone Number
              </label>
              <input
                className="w-full h-full border-2 border-gray-300 rounded-md"
                type="tel"
                required
              />
            </div>
          </div>
          <div className="input-box w-full mt-3 flex items-start flex-col h-[180px]">
            <label className="mb-1" htmlFor="desc">
              Anything else you'd like to share?
            </label>
            <textarea
              className="w-full h-full border-2 border-gray-300 rounded-md"
              cols="20"
              rows="30"
            ></textarea>
          </div>
          <div className="input-box w-full h-[90px] flex items-center justify-center mt-10">
            <button
              type="submit"
              className="h-[50px] px-1 w-32 text-white font-semibold bg-[#019f44] rounded-sm"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DetailPage;
