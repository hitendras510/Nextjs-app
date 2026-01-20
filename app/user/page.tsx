"use client";

import axios from "axios";

export default async  function user() {
 const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
 const data = response.data;
 


  return <div>
    user page
    {data.name}
    {data.email}
  </div>
}
