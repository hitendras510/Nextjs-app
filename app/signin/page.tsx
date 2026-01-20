"use client";
import axios from "axios";
export default function signin(){
    return <div className="w-screen h-screen flex justify-center">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/signin")
        }}> Sign in</button>
    </div>
}