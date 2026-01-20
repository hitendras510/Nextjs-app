import axios from "axios";
import { use, useState } from "react";
export default function signup() {
    const [username , setUsername] = useState('');
    const[password , setPassword] = useState('');
  return (
    <div className="w-screen h-screen flex justify-center">
      <input type="text" placeholder="username" onChange={e=> {
        setUsername(e.target.value);
      }}/>
      <input type="password" placeholder="password" onChange={e=> {
        setPassword(e.target.value);
        }}/>

      <button onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin",{
                username,
                password
            });
      }}> Sign up</button>
    </div>
  );
}
