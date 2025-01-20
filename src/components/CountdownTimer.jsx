import { useState, useEffect } from "react";

export function CountdownTimer({oc}) {
    const [timeLeft, setTimeLeft] = useState(30*60);
    
    useEffect(() => {
        if (timeLeft <= 0) {
            oc();
            return; 
        } 

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId); //cleanup function
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <div className="timer">
            <p>Time left {formatTime(timeLeft)}</p>
        </div>
    );
}
