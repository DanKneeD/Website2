
const Header = ({start, timer, setStart,restart}) => {
    return (
        <div>
            
            <button  onClick={setStart}> {start ? "Stop":"Start"} </button>
            <button onClick={restart}> Restart</button>
            <p>
                <div>
                {~~(timer/3600) % 60 < 10? '0' + ~~(timer/3600) % 60: ~~(timer/3600)%60}:
                {~~((timer/60) % 60)<10 ? '0'+ ~~((timer/60) % 60): ~~(timer/60) % 60}:
                {(~~(timer) % 60) < 10 ? '0'+((timer) % 60):((timer) % 60)}
                </div>
            </p>
           
        </div>
    )
}

export default Header
