import React from 'react';
import dateFormat from 'dateformat'

export const NewDay = (props) => {
  let df = dateFormat(props.date, "dddd, mmmm dS")
  const d1 = new Date(props.date);
  const d2 = new Date();

  const timeDiff = d2.getTime() - d1.getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (diffDays === 1) df = 'Today';
  if (diffDays === 2) df = 'Yesterday';

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
