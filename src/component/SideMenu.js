import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./SideMenu.css";

function SideMenu({ order, filter, setFilter }) {
  const [date, setDate] = useState([]);

  const uniqueDate = useCallback(() => {
    const dateSet = [...new Set(order.map((obj) => obj.item_date).sort())];
    setDate(dateSet);
  }, [order]);

  useEffect(() => {
    uniqueDate();
  }, [uniqueDate]);

  const getData = (e) => {
    setFilter(e.target.innerText);
  };

  return (
    <div className='buttonContainer'>
      <div className='buttonBox'>
        <button onClick={() => (window.location.href = "/")}>All</button>
        {date.map((item, index) => {
          // console.log(item);
          return (
            <button key={index} value={filter} onClick={getData}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SideMenu;
