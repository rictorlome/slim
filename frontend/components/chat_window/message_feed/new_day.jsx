import React from 'react';
import dateFormat from 'dateformat'

export const NewDay = (props) => {
  let df = dateFormat(props.date, "dddd, mmmm dS")
  return (
    <div className="newDayDiv">
      <div className="dateTab">
        {"    ".concat(df).concat("   ")}
      </div>
    </div>
  )
}
