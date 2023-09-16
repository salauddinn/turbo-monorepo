import { Signup } from "ui"
import axios from "axios"
export default function Home() {
  return (
    <>
    <Signup onClick={(username,password)=>{
         const response =axios.post("/api/signup", { username,password}) 
    }}/>  
    </>
  )
}
