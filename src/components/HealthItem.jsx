import React from "react";

const HealthItem = ({icon,title,subTitle,acitve=false}) => {


   


  return (
    <div className={`flex cursor-pointer`}>
      <div>
        <img src={icon} />
      </div>
      <div className="px-5">
        <h1 className={`text-lg  ${acitve ? 'text-white' : 'text-gray-400'} `}>{title}</h1>
        <p className={`text-sm ${acitve ? 'text-gray-300' : 'text-gray-500'}`}>
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default HealthItem;
