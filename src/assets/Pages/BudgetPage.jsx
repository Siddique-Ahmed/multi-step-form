import { useEffect, useState } from "react";
import Line from "../components/Line";
import { useNavigate } from "react-router-dom";

const BudgetPage = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(33.33); // Starting at 33.33%
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      setWidth(33.33); // Step 1 width
    } else if (count === 1) {
      setWidth(66.66); // Step 2 width
    } else if (count === 2) {
      setWidth(100); // Final step width
    }
  }, [count]);

  function inc() {
    if (count === 0) {
      setCount(1);
      navigate("/detail"); // Navigate to detail page
    }
  }

  return (
    <section className="w-full flex flex-col justify-evenly bg-gray-50">
      <Line width={width} />

      <div className="w-full min-h-[87vh] flex flex-col items-center justify-evenly">
        <h4 className="text-[27px] font-semibold">Step #1</h4>
        <h1 className="text-[27px] font-semibold lg:w-[30%] md:w-[50%] text-center">
          What is your monthly digital marketing budget?
        </h1>
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-evenly px-4">
          {[
            "$1,000/mo",
            "$1,000 - $2,000",
            "$2,000 - $5,000",
            "$5,000 - $10,000",
            "$10,000 - $25,000",
            "$25,000 +",
          ].map((budget, index) => (
            <button
              key={index}
              onClick={inc}
              className="w-[320px] h-[40px] bg-white rounded-md border-[1px] border-gray-500"
            >
              {budget}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetPage;
