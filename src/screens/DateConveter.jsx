import React from "react";

const DateConveter = () => {
  return (
    <div className="mx-12 flex my-12">
      <div className="w-full flex ">
        <div className="w-[48%] flex flex-col items-center border-black border m-3 rounded-2xl overflow-hidden text-xl">
          <div className="bg-[#8f3771] text-white p-3 w-full flex flex-col items-center">
            <h1>AD to BS date conveter</h1>
            <p>(BS range from 2000 -2999)</p>
          </div>
          <div className="p-3 text-xl w-[92%] flex flex-col items-center">
            <p>Enter date in Bs(YYYY-MM-DD)</p>
            <input
              type="date"
              className="w-[100%] text-center border-gray-900 border rounded-md m-3 p-1"
            />
          </div>
        </div>
        <div className="w-[48%] flex flex-col items-center border-black border m-3 rounded-2xl overflow-hidden text-xl">
          <div className="bg-[#8f3771] text-white p-3 w-full flex flex-col items-center">
            <h1>Bs to AD date conveter</h1>
            <p>(AD range from 1944 -2043)</p>
          </div>
          <div className="p-3 text-xl w-[92%] flex flex-col items-center">
            <p>Enter date in Bs(YYYY-MM-DD)</p>
            <input
              type="date"
              className="w-[100%] text-center border-gray-900 border rounded-md m-3 p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateConveter;
