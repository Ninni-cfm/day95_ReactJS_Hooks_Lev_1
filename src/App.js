import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Lev1_1 from './pages/Lev1_1';
import Lev1_2 from './pages/Lev1_2';
import Lev1_3 from './pages/Lev1_3';
import Lev1_4 from './pages/Lev1_4';
import Lev1_5 from './pages/Lev1_5';


function App() {
    return (
        <Router className="App">
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lev1-1" component={Lev1_1} />
                    <Route path="/lev1-2" component={Lev1_2} />
                    <Route path="/lev1-3" component={Lev1_3} />
                    <Route path="/lev1-4" component={Lev1_4} />
                    <Route path="/lev1-5" component={Lev1_5} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
