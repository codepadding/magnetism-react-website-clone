import React from "react";

const WelcomeApp = () => {
  return (
    <div className="flex bg-gray-900 px-3 md:px-20 py-20 flex-col md:flex-row">


      <div className="w-full md:w-2/5  flex flex-col gap-1 items-start justify-center">
        <h1 className="text-[#81849a]">A HUMAN-CENTRIC MOBILE EXPERIENCE</h1>

        <h1 className="text-[35px] md:text-[50px] font-bold text-white">
          THE <span className="text-[#19b0db]"> X-WRIST</span> APP
        </h1>
        <p className="text-white">
          Improve your health, track your fitness, redeem rewards and challenge
          your friends to become better, together. All in just one app.
        </p>

        <div className="flex py-6">
          <img
            className="h-12"
            src="https://assets.x-wrist.com/google-play-button.png"
          />
          <img
            className="h-12"
            src="https://assets.x-wrist.com/apple-store-button.png"
          />
        </div>
      </div>


      <div className="w-full md:w-3/5 flex justify-center my-11">
        <iframe
        className="w-full  h-[260px] md:h-[360px]"
          src="https://www.youtube.com/embed/FOFxqEOSD-Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>


    </div>
  );
};

export default WelcomeApp;
