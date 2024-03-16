import { useState } from "react"
import '../App.css';

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();
    
    const [cTime, setCtime] = useState(time)

    const upDateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(upDateTime, 1000);

    return (
        <div className="clock">

            <h1 id="time">{cTime}</h1>

        </div>
    )
}

export default DigitalClock