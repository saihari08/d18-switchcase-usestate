import logo from './logo.svg';
import './App.css';
import SelectCaptain from './components/SelectCaptain';
import { useState } from 'react';

function App() {
  let [totalscore,settotalscore]=useState(0);
  let [balls,setballs]=useState(0);
  let [fours,setfours]=useState(0);
  let [six,setsix]=useState(0);
  let [wide,setwide]=useState(0);
  let [Noball,setNoball]=useState(0);
  
    
  return (
    <div className="App">
    <SelectCaptain></SelectCaptain>
   
    <h1>totalscore:{totalscore}</h1>
    <h1>fours:{fours}</h1>
    <h1>six:{six}</h1>
    <h1>wide:{wide}</h1>
    <h1>Noball:{Noball}</h1>
    <h1>Overs:{parseInt(balls/6)}.{balls%6}</h1>
    
<button
      onClick={()=>{
       settotalscore(totalscore+1)
       setballs(balls+1)
      }}>Single</button>

<button
      onClick={()=>{
       settotalscore(totalscore+2)
       setballs(balls+1)
      }}>double</button>

<button
      onClick={()=>{
       settotalscore(totalscore+4)
       setfours(fours+1)
       setballs(balls+1)
      }}>Fours</button>
<button
      onClick={()=>{
       settotalscore(totalscore+6)
       setsix(six+6)
       setballs(balls+1)
      }}>Six</button>
<button
      onClick={()=>{
       settotalscore(totalscore+1)
       setNoball(Noball+1)
      }}>Noball</button>
      
<button
      onClick={()=>{
       settotalscore(totalscore+1)
       setwide(wide+1)
       }}>Wide</button>
      
    </div>
  );
}

export default App;
