import React from "react";
const Header = (props) => {
  return (
    <div className="bg-[#012222] h-20 px-36 flex justify-between">
      <div className="flex items-center">
        <img
          className="h-16"
          src="https://www.x-wrist.com/_next/image?url=https%3A%2F%2Fassets.x-wrist.com%2Flogo.png&w=96&q=75"
        />
      </div>

      <div>
        <div className="h-full text-white flex items-center list-none px-4 gap-2">
          <div>
            <p className="bg-white px-3 py-1 text-blue-500 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
              Product
            </p>
          </div>
          <li className="hover:text-blue-400 cursor-pointer">Medical Tests</li>
          <li>Mobile App</li>
          <li>About</li>
          <li>Contact</li>
          <div>
            <p className="py-1 px-3 text-white border border-blue-500 rounded-lg cursor-pointer">
              Business Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
