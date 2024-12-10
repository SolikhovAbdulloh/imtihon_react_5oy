import React from 'react'
import UseAxios from '../UseAxios';

function Sale() {
  const { data} = UseAxios({ url: "/" });

  return (
    <div>
      <div className="grid1 bg-[#063A88] w-full h-full p-8  gap-3 items-center ">
        {data.map((e) => (
          <div key={e.id} className="rounded-[4px] relative bg-[white] flex justify-center items-center flex-col p-[8px] w-[172px] h-[229px] mb-4">
            <img
              className="w-[80%] h-[55%] rounded-2xl"
              src={e.images[1]}
              alt="ss"
            />
            <p className="mt-4 text-[12px] font-light text-center">{e.name}</p>
            <div className="flex gap-[45px] items-end justify-between">
              <p className="line-through text-gray-500">{e.oldprice}</p>
              <p className="text-[14px] mt-4 font-light text-start">
                {e.price}
              </p>
            </div>
            <div className="absolute top-1 left-0 bg-[#FDDBC9] rounded-md p-1">
              <p className="text-[#F45E0C] text-sm">{e.Skidka}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale