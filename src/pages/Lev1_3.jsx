import { useState } from "react";

import NavBar from "../components/NavBar";

const Lev1_3 = () => {
    const [isNight, setNight] = useState(false);

    return (
        <section>
            <NavBar />
            <h1>Lev1_3: Day-Night-Change</h1>

            <div
                className="DayNight"
                style={{
                    background: isNight ? "#000033" : "lightblue",
                    color: isNight ? "lightblue" : "#000033",
                }}
            >
                <div>
                    <h1>{isNight ? "Es ist Nacht!" : "Es ist Tag!"}</h1>
                    <img
                        src={isNight ? "/img/moon-256.png" : "/img/sun-256.png"}
                        alt=""
                    />
                </div>
                <button
                    onClick={() => {
                        setNight(!isNight);
                    }}
                >
                    {isNight ? "Wechsel zu Tag" : "Wechsel zu Nacht"}
                </button>
            </div>
        </section>
    );
};

export default Lev1_3;
