import React from "react";
import { tithi } from "../constants/Tithi";

const Datebox = ({ startday, i, totaldays, data, cmonth, cyear }) => {
  let isholiday = false;
  let stithi;
  let eventstat = null;
  let englishdate;
  let eventName = "";

  // if (startday >= 0) {
  //   stithi = data[startday]["AD_date"]["tithi"];
  //   englishdate = data[startday]["ad"].split("-")[2];
  //   eventstat = data[startday]["events"][0]["holiday_status"];
  //   eventName = data[startday]["events"][0]["jtl"];
  // }
  if (i % 7 === 0 || eventstat === 1) {
    isholiday = true;
  }

  return (
    <>
      <div
        className={`h-24 border-2 border-black flex flex-col  ${
          isholiday === true ? "text-red-600" : "text-black"
        }  `}
      >
        {/* tithi file start */}
        <p className="text-[13px] flex  justify-end text-slate-600">
          <span
            className={`w-full text-center ${
              isholiday === true ? "text-red-600" : " text-slate-600"
            } ${
              (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
            } `}
          >
            {tithi[stithi]}
          </span>

          {/* tithi field end */}

          {/* english date start */}

          <span
            className={`mr-1 ${
              isholiday === true ? "text-red-600" : " text-slate-600"
            } ${
              (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
            } `}
          >
            {englishdate}
          </span>

          {/* english date end */}

          {/* main date start */}
        </p>
        <p
          className={`mt-2 mb-1 text-2xl  ${
            (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
          }`}
        >
          {startday + 1}
        </p>
        {/* main date end */}

        {/* event start */}
        <p
          className={` text-[13px] h-full flex items-end mx-auto leading-none mb-[5px] ${
            isholiday === true ? "text-red-600" : " text-slate-600"
          } ${(startday >= 0) & (startday < totaldays) ? "block" : "hidden"}`}
        >
          {eventstat == 1 ? eventName : ""}
        </p>
        {/* event end */}
      </div>
    </>
  );
};

export default Datebox;
