import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const c_time = () => {

    let message="";
    const c_style = {
      color :"" 
    }
    const date = new Date();
    const time = date.getHours();
    console.log("date", date);
    console.log("current time ", time);
    if(time >=4 && time<12){
      message= "Good morning";
      c_style.color= "green";

    }
    else if(time >= 12 && time<19){
      message= "Good Afternon";
      c_style.color= "blue";
    }
    else{
      message= "Good Night";
      c_style.color= "purple";
    }
    return {message, c_style};
  };
  const {message , c_style} =c_time();
  
  console.log(message);
  console.log(c_style);

  return (
    <>
      
      <div className="cont " style={{    display:"inline-block" ,  width:"100%", height:"4rem" , backgroundColor:"yellow" }}>
      <h1 className="greeting  text-center pt-2  " style={c_style }>{message} </h1>
      </div>
    </>
  );
}

export default App;
