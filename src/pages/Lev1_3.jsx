import { useState } from "react";

import NavBar from "../components/NavBar";

const Lev1_3 = () => {
    const [isNight, setNight] = useState(false);

    return (
        <section>
            <NavBar />
            <h1>Lev1_3: Day-Night-Change</h1>

            <div className="DayNight">
                <h1>
                    {isNight ? "Es ist Nacht!" : "Es ist Tag!"}
                    <img
                        src={isNight ? "/img/moon-256.png" : "/img/sun-256.png"}
                        alt=""
                    />
                </h1>
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
