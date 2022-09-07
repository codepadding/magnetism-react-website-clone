import React from 'react'

const MobileMockup = ({list,activeIndex}) => {
  return (
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
  )
}

export default MobileMockup