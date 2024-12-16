import React, { useContext } from "react";
import UseAxios from "../../UseAxios";

function All_products() {
  const { data } = UseAxios({ url: "/" });
  console.log(data);

  return (
    <div>
      <div className="grid2 w-[90%]  gap-[30px]">
        {data.map((e) => (
          <div key={e.id} className="flex justify-between flex-col">
            <img width={"50%"} src={e.images[0]} alt="" />
            <p>{e.model}</p>
            <mark className="font-medium">{e.price}$</mark>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All_products;
