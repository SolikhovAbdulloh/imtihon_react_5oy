import React, { useEffect, useState } from "react";
import { request } from "../../server";

function UseAxios({ url, method = "GET", body, params }){
  const [loading, Setloading] = useState(true);
  const [data, Setdata] = useState([]);
  const [error, Seterror] = useState(null);
  useEffect(() => {
    request({
      url,
      method,
      data: body,
      params,
      headers: {
        "Content-Type": "application/json",
        
      },
    })
      .then((data) => {
        Setdata(data.data);
        Setloading(false);
      })
      .catch((error) => {
        Seterror(error.message);
        Setloading(false);
      });
  }, [url,method,body,params]);

  return { data, loading,error };
}

export default UseAxios;
