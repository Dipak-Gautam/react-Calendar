import React from "react";

const TodayDate = () => {
  const time = new Date();
  return (
    <>
      <div className="w-[30%] border-2 border-red-600">
        <div className="w-full flex flex-col items-center p-10 text-2xl font-bold text-slate-600">
          <h1>Today's Date:</h1>
          <h1 className="underline"> {time.toDateString()}</h1>
        </div>
      </div>
    </>
  );
};

export default TodayDate;
