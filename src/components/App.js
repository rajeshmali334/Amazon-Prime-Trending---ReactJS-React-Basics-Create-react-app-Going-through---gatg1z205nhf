import React, { Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  
  const [getForm, setForm]=useState(props.slides[0]);
  const [getCount, setCount]=useState(0);

  const onNextHandler=()=>{
    if(getCount+1<props.slides.length){
        setCount(getCount+1);
        setForm(props.slides[getCount+1]);
    }
  }

  const  onPreviousHandler=()=>{
    if(getCount>=0){
      setCount(getCount-1);
        setForm(props.slides[getCount+1]);
    }
  }

  const  onRestartHandler=()=>{
    setCount(0);
    setForm(props.slides[0]);
  }
  

  return (
    <>
    <h1>{getForm.title}</h1>
    <p>{getForm.text}</p>
    <button disabled={getCount==props.slides.length-1} data-testid="button-next" onClick={onNextHandler}>Next</button>
    <button disabled={getCount ===0} data-testid="button-prev" onClick={onPreviousHandler}>Prev</button>
    <button data-testind="button-restart" disabled={getCount ==0} onClick={onRestartHandler}>Restart</button>
    </>
  )
}


export default App;
