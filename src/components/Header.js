
const Header = ({start, timer, setStart,restart,clockTime}) => {
    return (
        <div>
            <header>Stop Watch!</header>
            
            <button  onClick={setStart}> {start ? "Stop":"Start"} </button>
            <button onClick={restart}> Restart</button>
            <button onClick={() => clockTime(true)}>Lap</button>
            <button onClick={() => clockTime(false)}>Clear Laps</button>
            
            <p>
                
                <div className="clock">
                {~~(timer/3600) % 60 < 10? '0' + ~~(timer/3600) % 60: ~~(timer/3600)%60}:
                {~~((timer/60) % 60)<10 ? '0'+ ~~((timer/60) % 60): ~~(timer/60) % 60}:
                {(~~(timer) % 60) < 10 ? '0'+((timer) % 60):((timer) % 60)}
                </div>
            </p>
           
        </div>
    )
}

export default Header
