import React, { useState } from "react";
import { useEffect } from "react";
import HealthItem from "./HealthItem";

const HealthScreen = () => {
  const list = [
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/1.jpeg",
      active: true,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/2.jpeg",
      active: false,
    },
    {
      title: "ECG Analysis & History",
      subTitle:
        "Save all your ECG readings and interpretations within the app. Easily share these reports with any doctor you wish.",
      icon: "https://assets.x-wrist.com/the-app-health-feature3.png",
      image: "/images/app_screen/3.jpeg",
      active: false,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/4.jpeg",
      active: false,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/5.jpeg",
      active: false,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/6.jpeg",
      active: false,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/7.jpeg",
      active: false,
    },
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "https://assets.x-wrist.com/the-app-health-feature1.png",
      image: "/images/app_screen/8.jpeg",
      active: false,
    },
  ];

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
    }, 1000);

   
    return () => clearInterval(timer);

  }, []);

  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-16 bg-gray-900">
        <div>
          <h1 className="text-6xl font-bold text-teal-400">HEALTH - {activeIndex}</h1>
          <p className="mt-2 text-lg text-white font-bold">
            HEALTH: MONITOR, DIAGNOSE & CONSULT
          </p>
        </div>

        <div className="py-16 flex">
          {/* mockup  */}
          <div className="w-[550px]">
            <div
              className="relative w-[250px]"
              style={{
                backgroundImage: `url("${list[activeIndex]?.image}")`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top 50px",
                backgroundOrigin: "content-box",
              }}
            >
              <img
                className="w-[270px]"
                src="/images/app_screen/mockup.png"
                alt="screen"
              />

              {/* <img
                className="absolute top-0 w-[250px]"
                src="/images/app_screen/1.jpeg"
                alt="screen"
              /> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 px-14">
            {list.map((item, index) => {
              return (
                <HealthItem
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                  acitve={index == activeIndex ? true : false}
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
