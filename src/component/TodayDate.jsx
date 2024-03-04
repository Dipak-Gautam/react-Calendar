import React from "react";
import { useSelector } from "react-redux";

const TodayDate = () => {
  // const nepalidate = NepaliFunctions.GetCurrentBsDate();
  const nepalidate = useSelector((store) => store.todaysDate);

  return (
    <>
      <div className="w-[30%] border-2 border-red-600">
        <div className="w-full flex flex-col items-center p-10 text-2xl font-bold text-slate-600">
          <h1>Today's Date:</h1>

          <div className="flex ">
            <p>{nepalidate.day}</p>
            <p> -{nepalidate.month}- </p>
            <p>{nepalidate.year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayDate;
