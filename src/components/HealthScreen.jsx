import React, { useState } from "react";
import { useEffect } from "react";
import HealthItem from "./HealthItem";
import MobileMockup from "./MobileMockup";

const HealthScreen = ({list}) => {
  const bgImage = {
    backgroundImage: 'url("/img/bg/bg-blue.png")',
  };


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      
      if (activeIndex === list.length) {
        setActiveIndex(0);
      } else {
        setActiveIndex((value) => {

          console.log(list.length," - ",value)

          if(value === list.length - 1){
            return 0
          }

          return value + 1

        });
      }
    }, 2000);

   
    return () => clearInterval(timer);

  }, []);

  return (
    <div className="w-full" style={bgImage}>
      <div className="md:container md:mx-auto md:px-2 lg:px-20 py-12">
        <div>
          <h1 className="text-[35px] md:text-[65px] font-bold text-[#08eea3]">HEALTH - {activeIndex}</h1>
          <p className="text-white text-xl font-bold leading-normal pb-3 uppercase">
            Health: Monitor, Diagnose & Consult
          </p>
        </div>

        <div className="py-16 flex">
          {/* mockup  */}
          <MobileMockup list={list} activeIndex={activeIndex}/>

          <div className="grid grid-cols-2 gap-10 px-14">
            {list.map((item, index) => {
              return (
                <HealthItem
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                  active={index == activeIndex ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthScreen;
