import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">Home</Link>

            <ul>
                <li>
                    <Link to="/lev1-1">Lev1_1: Counter</Link>
                </li>
                <li>
                    <Link to="/lev1-2">Lev1_2: State - FAQ</Link>
                </li>
                <li>
                    <Link to="/lev1-3">Lev1_3: Day-Night-Change</Link>
                </li>
                <li>
                    <Link to="/lev1-4">Lev1_4: Change-Mood</Link>
                </li>
                <li>
                    <Link to="/lev1-5">Lev1_5: Random-Mood</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
