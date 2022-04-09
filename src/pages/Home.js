import React, { useEffect, useState } from "react";

import data from "../data";
import SideMenu from "../component/SideMenu";
import Main from "../component/Main";

function Home() {
  const [order, setOrder] = useState([]);
  const [filter, setFilter] = useState("");

  const getData = () => {
    setOrder(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <SideMenu order={order} filter={filter} setFilter={setFilter} />
      <Main order={order} filter={filter} />
    </div>
  );
}

export default Home;
