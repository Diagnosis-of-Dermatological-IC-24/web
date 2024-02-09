import React from "react";

export const ScanMe = () => {
  return (
    <div className="grid md:grid-cols-2 justify-between mt-[50px]">
        <div className="text-center md:text-left p-4 md:p-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mx-3 md:ml-10">
            Submit information about your skin
          </h1>
          <p className="text-2xl mt-n3 md:mt-10 md:ml-10">SCAN YOUR SKIN →</p>
        </div>
        <div className="flex justify-center md:justify-end mt-n3 md:mt0 p-4">
          <img
            className="w-full md:w-auto"
            src="https://i.postimg.cc/d3bS93xt/12-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
  );
};
