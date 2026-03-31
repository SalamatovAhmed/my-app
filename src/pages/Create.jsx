import { useState } from "react";

export default function Create(){
  const [title,setTitle]=useState("");

  return (
    <form onSubmit={(e)=>{e.preventDefault(); alert("Created")}}>
      <h2>Create</h2>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} />
      <button>Create</button>
    </form>
  )
}
