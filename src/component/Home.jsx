import React from "react";

const Home = () => {
  const time = new Date();
  return (
    <>
      <div className="mx-12">
        <div className="w-full flex flex-col items-center p-10 text-2xl font-bold text-slate-600">
          <h1>Today's Date:</h1>
          <h1> {time.toDateString()}</h1>
        </div>

        <div className="flex w-full h-auto">
          {/* dateconveter start here */}

          <div className="w-[40%] border-2 border-red-500 items-center">
            <div className="w-[92%] flex flex-col items-center border-black border m-3 rounded-2xl overflow-hidden text-xl">
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
            <div className="w-[92%] flex flex-col items-center border-black border m-3 rounded-2xl overflow-hidden text-xl">
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

          {/* dateconveter ends here */}

          <div>calander</div>
        </div>
      </div>
    </>
  );
};

export default Home;
