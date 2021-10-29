import { useState } from "react";

import NavBar from "../components/NavBar";

const Lev1_2 = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section>
            <NavBar />

            <h1>Lev1_2: State - FAQ</h1>

            <div className="Faq">
                <h1>Why is React great?</h1>
                <button
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    {expanded ? "-" : "+"}
                </button>
                <div
                    className="FaqAnswer"
                    style={
                        expanded ? { display: "block" } : { display: "none" }
                    }
                >
                    <h1>Fast Learning Curve</h1>
                </div>
            </div>
        </section>
    );
};

export default Lev1_2;
