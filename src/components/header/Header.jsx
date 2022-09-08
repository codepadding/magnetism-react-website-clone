import React from "react";
const Header = (props) => {
  return (
    <div className="bg-neutral-50">
      <div className="md:container md:mx:auto lg:px-28 md:px-4">
        <div className="h-20 flex justify-between ">
          <div className="flex items-center">
            <img
              className="h-16"
              src="img/logos/logo.png"
            />
          </div>

          <div >
            <div className="list-none w-full color[#282b2d] font-bold text-sm flex items-center gap-3 uppercase">
              <div >
                <p className="bg-sky-500 hover:bg-[#fbd3be] px-4 py-1 text-white hover:text-sky-500 rounded-full cursor-pointer hover:bg-[ #19b0db] text-white">Products</p>
              </div>
              {/* <li className="py-10 cursor-pointer hover:text-[#d04563]">Medical Tests</li> */}
              <li href="" className="py-10 cursor-pointer hover:text-[#d04563]">Mobile App</li>
              <li className="py-10 cursor-pointer hover:text-[#d04563]">Business Service</li>
              <li className="py-10 cursor-pointer hover:text-[#d04563]">About</li>
              <li className="py-10 cursor-pointer hover:text-[#d04563]">Contact</li>
              <div>
                <p className="px-4 py-1 rounded-full cursor-pointer border-2 border-sky-500">Business Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
