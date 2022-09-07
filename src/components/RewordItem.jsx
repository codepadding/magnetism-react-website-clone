import React from "react";

const RewordItem = ({src,title,description}) => {
  return (
    <div className="rounded flex flex-col justify-center items-center overflow-hidden shadow-lg">
      <img
        className="w-16 text-center"
        src={src}
      />
      <div className="px-6 py-4">
        <div className="text-white pb-5 font-bold text-xl mb-2 text-center">
          {title}
        </div>
        <p className="text-white text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RewordItem;
