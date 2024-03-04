import React, { useEffect } from "react";
import TodayDate from "../component/TodayDate";
import CalendarMain from "../calendar/CalendarMain";
import { calendarDataAction, todaysDateAction } from "../store";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const nepalidate = NepaliFunctions.GetCurrentBsDate();
    dispatch(todaysDateAction.setTodaysDate(nepalidate));
    dispatch(calendarDataAction.setCalendarData(nepalidate.year));
  }, []);
  return (
    <>
      <div className="mx-12 flex">
        <TodayDate />
        {/* clander starts here */}
        <div className="border-2 border-red-700 w-[70%] p-2">
          <CalendarMain />
        </div>
      </div>
    </>
  );
};

export default Home;
