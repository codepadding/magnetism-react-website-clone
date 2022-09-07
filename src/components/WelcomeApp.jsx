import autoprefixer from "autoprefixer";
import React from "react";

const WelcomeApp = () => {
  return (
    <div className="bg-gray-900">
        <div className="md:container md:mx-auto md:px-1 lg:px-20 py-12">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 px-3 flex flex-col gap-1 items-start justify-center">
                    <h1 className="text-[#81849a] font-bold">A HUMAN-CENTRIC MOBILE EXPERIENCE</h1>

                    <h1 className="text-[35px] md:text-[50px] font-bold text-white leading-none">
                    THE <span className="text-[#19b0db]"> InTEAM Health</span> APP
                    </h1>
                    <p className="text-white">
                    Improve your health, track your fitness, redeem rewards and challenge
                    your friends to become better, together. All in just one app.
                    </p>

                    <div className="flex py-6 gap-2 justify-center">
                    <img
                        className="h-12 md:h-10 lg-12"
                        src="https://assets.x-wrist.com/google-play-button.png"
                    />
                    <img
                        className="h-12 md:h-10 lg-12"
                        src="https://assets.x-wrist.com/apple-store-button.png"
                    />
                    </div>
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center my-11 px-3">
                    <iframe
                    className="w-full  h-[240px] md:h-[300px]"
                    src="https://www.youtube.com/embed/FOFxqEOSD-Q"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WelcomeApp;
