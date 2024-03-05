import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activeDateCalendarAction } from "../store";

const CalendarHeading = () => {
  const currentDate = useSelector((store) => store.activeDateCalendar);

  const dispatch = useDispatch();

  let currentMonth = currentDate[0];
  let currentyear = currentDate[1];

  const handleDateChangeNext = (month, year) => {
    let newmonth;
    let newyear;
    if (month === 12) {
      newmonth = 1;
      newyear = year + 1;
      dispatch(
        activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
      );
    } else {
      newmonth = month + 1;
      newyear = year;
      dispatch(
        activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
      );
    }
  };
  const handleDateChangePrev = (month, year) => {
    let newmonth;
    let newyear;
    if (month === 1) {
      newmonth = 12;
      newyear = year - 1;
      dispatch(
        activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
      );
    } else {
      newmonth = month - 1;
      newyear = year;
      dispatch(
        activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
      );
    }
  };

  return (
    <>
      <div className="flex justify-between my-4 text-3xl font-semibold text-slate-600">
        <div className="flex">
          <h1 className="">{currentMonth}</h1>
          <h1 className="mx-3">{currentyear}</h1>
        </div>
        <div>
          <button>
            <GrFormPrevious
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangePrev(currentMonth, currentyear);
              }}
            />
          </button>
          <button>
            <MdOutlineNavigateNext
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangeNext(currentMonth, currentyear);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarHeading;
