import React from 'react'

const footer = () => {
  return (
    <div className="h-12 px-32 flex justify-between bg-neutral-50">
      <div className="flex items-center">
        <div className="list-none w-50% md:w-full color[#282b2d] font-medium text-lg flex items-center gap-3">
            <li className="py-10 cursor-pointer hover:text-[#d04563]">Home</li>
            <li className="py-10 cursor-pointer hover:text-[#d04563]">Contact</li>
        </div>
      </div>
      <div className="flex items-center">
        <div className="list-none w-50% md:w-full color[#282b2d] font-medium text-lg flex items-center gap-3">
            <li className="py-10 cursor-pointer hover:text-[#d04563]">Business Solutions</li>
        </div>
      </div>
    </div>
  )
}

export default footer