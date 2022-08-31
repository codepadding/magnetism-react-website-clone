import React from "react";

export const TextContent1 = () => {
  return (
    <div className="w-full bg-gradient-to-br from-red-800 to-amber-700 px-3 md:px-20 py-20 md:flex-row">
      <div className="w-full grid grid-row text-center">
        <h1 className="grid grid-row p-0 gap-0 text-[30px] md:text-[50px] text-white font-extrabold">
            <span className="">HOW DO YOU</span>
            <span><span className="text-cyan-500">BUILD </span>THE <span className="text-cyan-500">LIFESTYLE</span></span>
            <span>YOU WANT?</span>
        </h1>
        <p className="text-3xl text-white font-light">A question you won’t need to answer</p>
        <p className="my-4 text-white">We know how hard it can be to create, maintain and sustain healthy habits.</p>
        <p className="text-white px-[17.5rem]">
        After all, it’s easier to scoff a pizza than it is to eat a salad. Because of this imbalance between things we want that come difficult and things we don’t that come easy, we built X-Wrist. You can simply let it know what you want and it will make sure you follow through with your plan. And like it!
        </p>
      </div>
      </div>
  );
};

