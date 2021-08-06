const Clocked = ({timeSave}) => {
    console.log()
    return (
        <div className="lap">
            Lap Speeds
            {timeSave.map((time) => (
               <li> {~~(time.time/3600) % 60 < 10? '0' + ~~(time.time/3600) % 60: ~~(time.time/3600)%60}:
               {~~((time.time/60) % 60)<10 ? '0'+ ~~((time.time/60) % 60): ~~(time.time/60) % 60}:
               {(~~(time.time) % 60) < 10 ? '0'+((time.time) % 60):((time.time) % 60)}</li> 
               
            )
            )}
        </div>
    )
}

export default Clocked
