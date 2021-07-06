
import './App.css';
import { useState,useEffect } from 'react';
function App() {
const[quote,setQuote]=useState(null);
const[loading,setLoading]=useState(true);
useEffect(()=>{
  fetchAdvice();
},[])
async function fetchAdvice(){
  try{
    const resp=await fetch(`https://api.adviceslip.com/advice`);
    const data=await resp.json();
    console.log(data);
    setQuote(data.slip.advice);
    setLoading(false);
    }
    catch(err)
    {
      console.log(err);
    }

}
  if(loading)
  {
    return(
      <div className="App">
        <h1>Random Advice Generator</h1>
        <div className="loading">Loading...</div>
      </div>
    )
  }
   return(
     <div className="App">
     <h1>Random Advice Generator</h1>
     <div className="quote">{quote}</div>
     <button onClick={fetchAdvice}>Get Advice!</button>
     </div>
   )
}
  
export default App;
