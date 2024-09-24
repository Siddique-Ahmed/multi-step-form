const Line = ({ width }) => {
  return (
    <div className="w-full h-2 bg-gray-300">
      <div
        style={{ width: `${width}%` }}
        className="h-full bg-[#019f44] transition-all duration-300"
      ></div>
    </div>
  );
};

export default Line;
