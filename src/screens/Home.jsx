import React from "react";

import TodayDate from "../component/TodayDate";
import CalendarMain from "../calendar/CalendarMain";
const Home = () => {
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
