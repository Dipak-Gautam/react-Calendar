import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Home = () => {
  const time = new Date();
  return (
    <>
      <div className="mx-12 flex">
        <div className="w-[30%] border-2 border-red-600">
          <div className="w-full flex flex-col items-center p-10 text-2xl font-bold text-slate-600">
            <h1>Today's Date:</h1>
            <h1 className="underline"> {time.toDateString()}</h1>
          </div>
        </div>

        {/* clander starts here */}

        <div className="border-2 border-red-700 w-[70%] p-2">
          <div className="flex w-full h-auto flex-col">
            {/* calinder heading */}

            <div className="flex justify-between my-4 text-3xl font-semibold text-slate-600">
              <div className="flex">
                <h1 className="">Falgun</h1>
                <h1 className="mx-3">2024</h1>
              </div>
              <div>
                <button>
                  <GrFormPrevious className="bg-[#832161] text-white h-full mb-0" />
                </button>
                <button>
                  <MdOutlineNavigateNext className="bg-[#832161] text-white h-full mb-0" />
                </button>
              </div>
            </div>

            {/* calinder heading ends */}

            {/* actualcalinderstarts here */}

            <div>
              <div className="grid grid-cols-7 text-center font-bold h-9 ">
                <div className="border-2 border-black">Sun </div>
                <div className="border-2 border-black">Mon </div>
                <div className="border-2 border-black">Tue </div>
                <div className="border-2 border-black">Wed </div>
                <div className="border-2 border-black">Thu </div>
                <div className="border-2 border-black">Fri </div>
                <div className="border-2 border-black text-red-600">Sat</div>
              </div>
              {/* dates below */}
              <div className="grid grid-cols-7 text-center font-bold items-center">
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
                <div className="h-24 border-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
