import React from "react";

const Datebox = ({ startday, i, totaldays }) => {
  return (
    <>
      <div
        className={`h-24 border-2 border-black flex flex-col  ${
          i % 7 == 0 ? "text-red-600" : "text-black"
        }  `}
      >
        <p className="text-[13px] flex  justify-end text-slate-600">
          <span
            className={`w-full text-center ${
              i % 7 == 0 ? "text-red-600" : " text-slate-600"
            } ${
              (startday > 0) & (startday <= totaldays) ? "block" : "hidden"
            } `}
          >
            Holi
          </span>
          <span
            className={`mr-1 ${
              i % 7 == 0 ? "text-red-600" : " text-slate-600"
            } ${
              (startday > 0) & (startday <= totaldays) ? "block" : "hidden"
            } `}
          >
            1
          </span>
        </p>
        <p
          className={`my-2 text-2xl  ${
            (startday > 0) & (startday <= totaldays) ? "block" : "hidden"
          }`}
        >
          {startday}
        </p>
        <p
          className={`items-end text-[13px] ${
            i % 7 == 0 ? "text-red-600" : " text-slate-600"
          } ${(startday > 0) & (startday <= totaldays) ? "block" : "hidden"}`}
        >
          Yakadasi
        </p>
      </div>
    </>
  );
};

export default Datebox;
