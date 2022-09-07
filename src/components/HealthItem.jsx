import React from "react";

const HealthItem = ({
  icon,
  title,
  subTitle,
  active = false,
  index,
  setActiveIndex,
}) => {
  const getHealthItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      onMouseEnter={(e) => getHealthItem(index)}
      className={`flex cursor-pointer`}
    >
      <div>
        <img
          className={`${
            active ? "text-white" : "text-gray-400"
          }  hover:origin-center`}
          src={icon}
        />
      </div>
      <div className="px-5 ">
        <h1
          className={`hitem_${index} text-lg font-bold ${
            active ? "text-white" : "text-gray-400"
          }`}
        >
          {title}
        </h1>
        <p
          className={`leading-tight text-base ${
            active ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default HealthItem;
