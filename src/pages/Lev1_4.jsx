import { useState } from "react";

import { Cat } from "react-kawaii";

import NavBar from "../components/NavBar";

let moods = ["happy", "sad"];
const Lev1_4 = () => {
    const [mood, setMood] = useState(0);

    return (
        <section>
            <NavBar />

            <h1>Lev1_4: Change-Mood</h1>

            <div className="ChangeMood">
                <div>
                    <Cat size={200} mood={moods[mood]} color="#FDA7DC" />
                </div>
                <button
                    onClick={() => {
                        setMood(1 - mood);
                    }}
                >
                    Change Mood
                </button>
            </div>
        </section>
    );
};

export default Lev1_4;
