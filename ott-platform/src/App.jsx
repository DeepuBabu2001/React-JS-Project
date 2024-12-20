import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Resetpass from "./components/Resetpass";
import Movielist from "./components/Movielist";
import Movieview from "./components/Movieview";
import Subscription from "./components/Subscrption";
import Watchlater from "./components/Watchlater";
import Changepass from "./components/Changepass";
import Watchhistory from "./components/Watchhistory";
import Myplan from "./components/Myplan";



function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpass" element={<Forgot />} />
                    <Route path="/resetpass" element={<Resetpass />} />
                    <Route path="/movielist" element={<Movielist />} />
                    <Route path="/movieview/:id" element={<Movieview />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/watchlater" element={<Watchlater />} />
                    <Route path="/changepass" element={<Changepass />} />
                    <Route path="/watchhistory" element={<Watchhistory />} />
                    <Route path="/myplan" element={<Myplan />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;