import Header from './components/Header'
import Clocked from './components/Clocked'
import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [save,setSave] = useState([])
const [start,setStart] = useState(false)
const [time,setTime] = useState(0)

const clockTime = (boole) => {
  if(boole){
  setSave([...save,{time: time}])
  }else{
    setSave([])
  }
}




//updates time every 10 miliseconds
useEffect(() => {
  if(start){
  const timer=setTimeout(() => {
    setTime(time => time+1);
 }, 10);
  return () => clearTimeout(timer);
}

//add to state

});
  return (
    <div className="App">
      <Header start={start} timer={time}setStart={()=>setStart(!start)}restart={()=>setTime(time=>0)} clockTime={clockTime}/>
      <Clocked timeSave={save} />
    </div>
  );
}

export default App;
