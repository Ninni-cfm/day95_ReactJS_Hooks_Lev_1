import { useState } from "react";

import { Planet } from "react-kawaii";

import NavBar from "../components/NavBar";

let moods = [
    "happy",
    "sad",
    "blissful",
    "shocked",
    "lovestruck",
    "excited",
    "ko",
];

const Lev1_5 = () => {
    const [mood, setMood] = useState(0);
    const [moodState] = useState(moods);

    return (
        <section>
            <NavBar />

            <h1>Lev1_5: Random-Mood</h1>

            <div className="RandomMood">
                <div>
                    <Planet size={200} mood={moodState[mood]} color="Yellow" />
                </div>
                <button
                    onClick={() => {
                        setMood(Math.floor(Math.random() * moodState.length));
                        // setMood(mood + 1 >= moodState.length ? 0 : mood + 1);
                    }}
                >
                    Change Mood
                </button>
            </div>
        </section>
    );
};

export default Lev1_5;
