import React from "react";
import Datebox from "./Datebox";
import { useSelector } from "react-redux";

const ActualCalendar = () => {
  let d;
  // necessary data calculation
  const activeDate = useSelector((store) => store.activeDateCalendar);
  const calendarData = useSelector((store) => store.calendarData);

  if (activeDate === null || calendarData === null) {
    return <></>;
  }

  // setting starting day and number of days for calander
  let c = activeDate[0];
  c < 10 ? (d = "0" + c.toString()) : (d = c.toString());

  let sday = calendarData[d];
  let a = sday[0]["week_day"];
  console.log(sday);

  let startday = -a - 1;
  let totaldays = Object.entries(sday).length;
  // let totaldays = 2;
  let i = 1;
  // end of setting starting date

  // calculation box
  let data = sday;

  let temp = data[27]["events"][0]["jtl"];

  console.log("temp", temp);
  // calculation box
  return (
    <div>
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
          {(() => {
            let post = [];
            while (startday < totaldays - 1) {
              startday++;
              post.push(
                <Datebox
                  key={i}
                  startday={startday}
                  i={i}
                  totaldays={totaldays}
                  data={sday}
                  cmonth={c}
                  cyear={activeDate[1]}
                />
              );
              i++;
            }
            return post;
          })()}
        </div>
        {/* dates end here */}
      </div>
    </div>
  );
};

export default ActualCalendar;
