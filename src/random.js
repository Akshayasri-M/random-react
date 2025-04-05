import { useState } from "react";

function Randomnum() {
    let [random, setrandom] = useState(0);
    function randomnum() {
        let num = Math.floor(Math.random() * 100 + 1);
        setrandom(num);
    }
    function resetnum() {
        setrandom(0);
    }


    return (
        <>
            <div className="container">
                <h1 className="h1">Random number is :{random}</h1>
                <div className="btn">
                    <button className="button1" onClick={randomnum}>Random</button>
                    <button className="button2" onClick={resetnum}>Reset</button>
                </div>
            </div>
        </>
    )


}

export default Randomnum;