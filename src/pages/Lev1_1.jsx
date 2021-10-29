import { useState } from "react";

import NavBar from "../components/NavBar";

const Lev1_1 = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <NavBar />

            <h1>Lev1_1: Counter</h1>

            <div className="Counter">
                <div>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <span> {count} </span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button onClick={() => setCount(0)}>RESET</button>
            </div>
        </section>
    );
};

export default Lev1_1;
