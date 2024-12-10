import { Button } from 'antd'
import React from 'react'

function Pls() {
  return (
    <div className="flex justify-between flex-wrap gap-3 items-center">
      <div className="pls py-6 w-[57%] gap-7 flex flex-col justify-between rounded-lg items-end  h-[300px] px-6">
        <div className='flex justify-between flex-col items-center gap-5'>
          <p className="text-gray-700">
            Get ready for the future of <br /> smartphones.Experience <br />{" "}
            innovation like never before. Stay <br /> tuned for the big iPhone
            15 pre-sale.
          </p>
          <Button type="primary" color="primary">
            Register Now
          </Button>
        </div>
      </div>
      <div className="pls1 rounded-lg flex flex-col gap-10 justify-center items-start px-3  pt-16 pl-5 w-[42%] h-[300px]">
        <p className=" font-medium text-center text-[20px] text-[#005690]">
          Digital Edition + 2TB
        </p>
        <Button type="primary" color="primary">
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default Pls