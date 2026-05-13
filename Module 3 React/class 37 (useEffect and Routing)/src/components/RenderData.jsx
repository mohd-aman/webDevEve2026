// https://jsonplaceholder.typicode.com/users/1

import { useState,useEffect } from "react";

export default function RenderData(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const user = await resp.json();
                console.log(user);
                setData(user);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]) // only execute cb on mount, means after first component rendered not again.

    console.log("Component Rendered")
    return(
        <div>
            <h1>Fetch and Render Data</h1>
            {
                data===null? "Loader...":<div>
                    <h2>Name : {data.name}</h2>
                    <h2>Email : {data.email}</h2>
                    <h2>username : {data.username}</h2>
                </div>
            }
        </div>
    )
}