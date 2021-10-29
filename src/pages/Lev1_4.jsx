import { useState } from "react";

import NavBar from "../components/NavBar";

const Lev1_4 = () => {
    const [happy, setMood] = useState(true);

    return (
        <section>
            <NavBar />

            <h1>Lev1_4: Change-Mood</h1>

            <div className="ChangeMood">
                <div>
                    <img src="" alt="" />
                </div>
                <button
                    onClick={() => {
                        setMood(!happy);
                    }}
                >
                    Change Mood
                </button>
            </div>
        </section>
    );
};

export default Lev1_4;
