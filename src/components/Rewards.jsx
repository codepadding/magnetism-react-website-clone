import React from "react";
import RewordItem from "./RewordItem";

const Rewards = () => {
  const items = [
    {
      src: "img/icons/the-app-rewards-feature19372.png",
      title: "Earn EVT Tokens",
      description:
        "You deserve to be rewarded for your progress. Invest energy in becoming a better you, and be rewarded with Energy Value Tokens (EVT).",
    },
    {
      src: "img/icons/the-app-rewards-feature2486f.png",
      title: "Real Monetary Value",
      description:
        "All tokens on the platform are backed by our own capital. Literally putting our money where our wrist is.",
    },
    {
      src: "img/icons/the-app-rewards-feature314e6.png",
      title: "Check your Wallets",
      description:
        "See how many EVT tokens you have, what you have spent them on and how many you need for that nice book you wanted.",
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("/img/bg/technology-background.webp")',
      }}
    >
      <div className="md:container md:mx-auto md:px-2 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row text-center">
          <div className="w-full md:px-28 md:py-6 flex flex-col gap-1">
            <div className="text-center">
              <h1 className="text-[35px] md:text-[65px] font-bold text-white uppercase leading-none">
                <span className="text-[#eeb815]"> InTEAM Health Rewards:</span>
                <br />
                Earn Everywhere,
                <br />
                Spend Anywhere
              </h1>
              <h4 className="text-white uppercase font-bold md: text-[18px] py-10 leading-6">
                Earn rewards for doing <br /> the things you're already doing
              </h4>
            </div>
          </div>
        </div>


        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {items.map((item) => {
            return (
              <RewordItem
                src={item.src}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
