import Header from './components/Header'
import Clocked from './components/Clocked'
import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [save,setSave] = useState([{time: 0},{time: 0},{time: 0}])
const [start,setStart] = useState(false)
const [time,setTime] = useState(0)


//updates time every 10 miliseconds
useEffect(() => {
  if(start){
  const timer=setTimeout(() => {
    setTime(time => time+1);
 
  }, 10);
  return () => clearTimeout(timer);
}

});


  return (
    <div className="App">
      <Header start={start} timer={time}setStart={()=>setStart(!start)}restart={()=>setTime(time=>0)}/>
      
    </div>
  );
}

export default App;
