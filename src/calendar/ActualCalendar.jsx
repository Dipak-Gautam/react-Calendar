import React from "react";
import Datebox from "./Datebox";

const ActualCalendar = () => {
  let a = 3;
  let startday = -a + 1;
  let totaldays = 30;
  let i = 1;
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
            while (startday < totaldays) {
              startday++;
              post.push(
                <Datebox
                  key={i}
                  startday={startday}
                  i={i}
                  totaldays={totaldays}
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
