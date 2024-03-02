import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ActualCalendar from "./ActualCalendar";

const CalendarMain = () => {
  return (
    <div>
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

        <ActualCalendar />
      </div>
    </div>
  );
};

export default CalendarMain;
