import React, { useState } from "react";
import { useEffect, useRef } from "react";
import HealthItem from "./HealthItem";
import MobileMockup from "./MobileMockup";

const HealthScreen = ({ list }) => {
  const bgImage = {
    backgroundImage: 'url("/img/bg/bg-blue.png")',
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const itemWrapper = useRef(null);
  const windowWrapper = useRef(null);
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      setActiveIndex((value) => {
        if (value === list.length - 1) {
          return 0;
        }
        return value + 1;
      });
    }, 2000);

    itemWrapper.current.addEventListener("mouseover", () => {
      clearInterval(timer);
      timer = null;
    });

    windowWrapper.current.addEventListener("mouseover", (event) => {
      if (windowWrapper.current && !itemWrapper.current.contains(event.target)) {
        if(!timer){
          startAgain()
        }
        // startAgain()
      }
    });

    return () => {
      clearInterval(timer);
      timer = false
    };
  }, []);

  const startAgain = () => {
    timer = setInterval(() => {
      setActiveIndex((value) => {
        if (value === list.length - 1) {
          return 0;
        }
        return value + 1;
      });
    }, 2000);
  };






  return (
    <div className="w-full" style={bgImage} ref={windowWrapper}>
      <div className="md:container md:mx-auto md:px-2 lg:px-20 py-12">
        <div>
          <h1 className="text-[35px] md:text-[65px] font-bold text-[#08eea3]">
            HEALTH - {activeIndex}
          </h1>
          <p className="text-white text-xl font-bold leading-normal pb-3 uppercase">
            Health: Monitor, Diagnose & Consult
          </p>
        </div>

        <div className="py-16 flex">
          {/* mockup  */}
          <MobileMockup list={list} activeIndex={activeIndex} />

          <div className="grid grid-cols-2 gap-10 px-14" ref={itemWrapper}>
            {list.map((item, index) => {
              return (
                <HealthItem
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                  active={index == activeIndex ? true : false}
                  index={index}
                  setActiveIndex={setActiveIndex}
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
