import React, { useState } from "react";
import { useEffect } from "react";
import HealthItem from "./HealthItem";

const HealthScreen = () => {
  const bgImage = {
    backgroundImage: 'url("/img/bg/bg-blue.png")',
  };
  const list = [
    {
      title: "24/7 Heart Rate Monitoring",
      subTitle:
        "Get instant notifications when irregularities are detected (health insights)",
      icon: "/img/icons/the-app-health-feature2.png",
      image: "/img/services/heart-rate1.jpeg",
      active: true,
    },
    {
      title: "ECG Analysis & History",
      subTitle:
        "Save all your ECG readings and interpretations within the app. Easily share these reports with any doctor you wish.",
      icon: "/img/icons/the-app-health-feature1.png",
      image: "/img/services/ECG1.jpeg",
      active: false,
    },
    {
      title: "Oxygen Saturation",
      subTitle:
        "Stay on top of your wellness by measuring and maintaining the precise balance of oxygen-saturated blood.",
      icon: "/img/icons/the-app-health-feature3.png",
      image: "/img/services/blood-oxygen1.jpeg",
      active: false,
    },
    {
      title: "Remote Medical Consultations",
      subTitle:
        "Request 1-on-1 live chat consultations with doctors right within the X-Wrist app and get the help you need, fast.",
      icon: "/img/icons/the-app-health-feature4.png",
      image: "/img/services/Consultation-Thread1.jpeg",
      active: false,
    },
    {
      title: "Body Temperature Measurement",
      subTitle:
        "Instant body temperature check at the push of a button. See your data throughout the day.",
      icon: "/img/icons/the-app-health-feature5.png",
      image: "/img/services/body-temperature1.jpeg",
      active: false,
    },
    {
      title: "Blood Pressure",
      subTitle:
        "Get a clear picture of your heart health in seconds. See your blood pressure variation throughout time.",
      icon: "/img/icons/the-app-health-feature6.png",
      image: "/img/services/blood-pressure1.jpeg",
      active: false,
    },
    {
      title: "AI Instant Medical Diagnosis and Recommendations",
      subTitle:
        "Algorithms developed with certified doctors and scientists allow you to get instant medical diagnosis based on your readings so you know right away if your health is in danger.",
      icon: "/img/icons/the-app-health-feature7.png",
      image: "/img/services/AI-Medical-Diagnosis1.jpeg",
      active: false,
    },
    {
      title: "Respiratory Rate",
      subTitle:
        "See how you’re breathing throughout day & night - while working, sleeping or during fitness activities. Get notified when your number of breaths per minute is outside normal parameters.",
      icon: "/img/icons/respiratory-rate8.png",
      image: "/img/services/respiration-rate1.jpeg",
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
          <div className="w-[550px]">
            <div
              className="relative w-[250px] "
              style={{
                backgroundImage: `url("${list[activeIndex]?.image}")`,
                backgroundSize: "86%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundOrigin: "content-box",
                
                // backgroundHeight: "88%",
              }}
            >
              <img
                className="w-[270px]"
                src="/img/services/mockup.png"
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
