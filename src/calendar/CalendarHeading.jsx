import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const CalendarHeading = () => {
  let currentMonth = 11;
  let currentyear = 2024;
  const [calendarhead, setCalendarhead] = useState([currentMonth, currentyear]);

  const handleDateChangeNext = (month, year) => {
    let newmonth;
    let newyear;
    if (month === 12) {
      newmonth = 1;
      newyear = year + 1;
      setCalendarhead([newmonth, newyear]);
    } else {
      newmonth = month + 1;
      newyear = year;
      setCalendarhead([newmonth, newyear]);
    }
  };
  const handleDateChangePrev = (month, year) => {
    let newmonth;
    let newyear;
    if (month === 1) {
      newmonth = 12;
      newyear = year - 1;
      setCalendarhead([newmonth, newyear]);
    } else {
      newmonth = month - 1;
      newyear = year;
      setCalendarhead([newmonth, newyear]);
    }
  };

  return (
    <>
      <div className="flex justify-between my-4 text-3xl font-semibold text-slate-600">
        <div className="flex">
          <h1 className="">{calendarhead[0]}</h1>
          <h1 className="mx-3">{calendarhead[1]}</h1>
        </div>
        <div>
          <button>
            <GrFormPrevious
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangePrev(calendarhead[0], calendarhead[1]);
              }}
            />
          </button>
          <button>
            <MdOutlineNavigateNext
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangeNext(calendarhead[0], calendarhead[1]);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarHeading;
