import Line from "../components/Line";
import submit from "../../../public/img/submit.png";

const SubmittedPage = () => {
  return (
    <section className="w-full min-h-[87vh] flex items-center justify-between flex-col">
      <Line width={100} />
      <div className="submit-box w-full min-h-[87vh] flex flex-col items-center justify-center px-4">
        <div className="ls w-full flex items-center justify-center flex-wrap">
          <img className="h-[90px]" src={submit} alt="" />
        </div>
        <div className="rs w-full flex items-center flex-col justify-center flex-wrap mt-4">
          <h1 className="lg:w-[520px] text-center font-semibold text-[28px]">
            Your Request for a Proposal Has Been Submitted!
          </h1>
          <p className="text-center lg:w-[520px] my-2 text-[16px] text-[#6b7280]">
            Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. 
            Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.
          </p>
          <button className="mt-3 h-[48px] w-[160px] bg-[#019f44] text-[15px] text-white font-semibold">
            Return Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubmittedPage;
