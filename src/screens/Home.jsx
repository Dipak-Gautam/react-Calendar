import React, { useEffect } from "react";
import TodayDate from "../component/TodayDate";
import CalendarMain from "../calendar/CalendarMain";
import {
  activeDateCalendarAction,
  calendarDataAction,
  todaysDateAction,
} from "../store";
import { useDispatch } from "react-redux";
import initialdata from "../data/2080-calendar.json";

const Home = () => {
  const dispatch = useDispatch();

  // here initial data initilization is done

  useEffect(() => {
    const nepalidate = NepaliFunctions.GetCurrentBsDate();

    dispatch(todaysDateAction.setTodaysDate(nepalidate));

    dispatch(calendarDataAction.setCalendarData(initialdata));

    dispatch(
      activeDateCalendarAction.setActiveDateCalendar([
        nepalidate.month,
        nepalidate.year,
      ])
    );
  }, []);

  // initial data rendering finished

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
