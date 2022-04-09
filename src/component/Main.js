import React from "react";
import "./Main.css";

function Main({ order, filter }) {
  // console.log(filter);
  return (
    <div className='mainContainer'>
      <table className='table'>
        <thead>
          <tr>
            <th>Schedule time</th>
            <th>Slot</th>
            <th>Item date</th>
          </tr>
        </thead>
        <tbody>
          {order
            .filter((obj) => obj.item_date.includes(filter))
            .map((item, index) => {
              // console.log(item);
              const { item_date, schedule_time, slot } = item;
              return (
                <tr key={index}>
                  <td>{schedule_time}</td>
                  <td>{slot}</td>
                  <td>{item_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
