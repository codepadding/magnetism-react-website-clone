import React from "react";
const Header = (props) => {
  return (
    <div className="bg-[#012222] h-20 px-28 pt-8 pb-6 flex justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <img
          className="h-14"
          src="https://www.x-wrist.com/_next/image?url=https%3A%2F%2Fassets.x-wrist.com%2Flogo.png&w=96&q=75"
        />
      </div>

      <div>
        <div className="h-full text-white flex items-center list-none px-4 gap-3">
          <div>
            <p className="bg-white px-6 py-1 text-blue-500 rounded-2xl cursor-pointer font-[650] hover:bg-blue-600 hover:text-white uppercase">
              Products
            </p>
          </div>
          <li className="hover:text-blue-400 cursor-pointer font-bold uppercase">Medical Tests</li>
          <li className="font-bold hover:text-blue-400 cursor-pointer uppercase">Mobile App</li>
          <li className="font-bold hover:text-blue-400 cursor-pointer uppercase">About</li>
          <li className='font-bold hover:text-blue-400 cursor-pointer uppercase'>Contact</li>
          <div>
            <p className="py-1 px-6 text-white border border-blue-500 rounded-2xl cursor-pointer font-bold uppercase">
              Business Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
