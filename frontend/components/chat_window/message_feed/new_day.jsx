import React from 'react';
import dateFormat from 'dateformat'

export const NewDay = (props) => {
  let df = dateFormat(props.date, "dddd, mmmm dS")
  const d1 = new Date(props.date);
  const d2 = new Date();

  const d1Days = Math.ceil(d1.getTime() / (1000 * 3600 * 24))
  const d2Days = Math.ceil(d2.getTime() / (1000 * 3600 * 24))

  const diffDays = d2Days - d1Days;

  if (diffDays === 0) df = 'Today';
  if (diffDays === 1) df = 'Yesterday';

  return (
    <div className="newDayDiv">
      <div className="dateTab">
        <div className="pill">
          {"    ".concat(df).concat("   ")}
        </div>
      </div>
    </div>
  )
}
