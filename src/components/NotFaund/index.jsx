import React from "react";
import { Empty } from "antd";
function Notfound() {
  return (
    <div>
      <div className=" text-center w-[100%] bg-grey-700 m-auto mt-10  font-light">
        <Empty />
        <h1 className="text-gray-600">Malumot topilmadi</h1>
      </div>
    </div>
  );
}

export default Notfound;
