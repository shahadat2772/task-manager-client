import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="pt-[64px]">
      <div className="calenderContainer h-[88vh] max-w-[100vw] flex justify-center items-center">
        <Calendar className="calender" onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default CalendarPage;
