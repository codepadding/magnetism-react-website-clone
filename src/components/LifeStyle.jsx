import React from "react";

const LifeStyle = () => {
  const bgImage = {
    backgroundImage: 'url("/img/bg/bg-red.png")',
  };

  return (
    <div className="" style={bgImage}>
        <div className="md:container md:mx-auto md:px-2 lg:px-20 py-12">
            <div className="flex flex-col md:flex-row text-center">
                <div className="w-full md:px-28 md:py-6 flex flex-col gap-1">
                    <div className="text-center">
                        <h1 className="text-[35px] md:text-[65px] font-bold text-white uppercase leading-none pb-3">
                        How do you <br/> <span className="text-[#19b0db]"> build</span> the
                        <span className="text-[#19b0db]"> lifestyle</span> <br/>you want?
                        </h1>
                        <p className="text-white text-xl md:text-3xl leading-normal pb-3">A question you won’t need to answer</p>
                        <p className="text-white text-l md:text-xl leading-tight md:leading-normal pb-3">We know how hard it can be to create, maintain and sustain healthy habits.</p>
                        <p className="text-white leading-tight md:leading-normal">
                        After all, it’s easier to scoff a pizza than it is to eat a salad. Because of this 
                        imbalance between things we want that come difficult and things we don’t that come 
                        easy, we built InTEAM Health. You can simply let it know what you want and it will make 
                        sure you follow through with your plan. And like it!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LifeStyle;
