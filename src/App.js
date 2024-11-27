import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Registration from "./Registration";
import JobApplication from "./JobApplication";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MockTest from "./MockTest";
import JobPortalMail from "./JobPortalMail";
import ChatBot1 from "./ChatBot1";


function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/JobApplication" element={<JobApplication />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="AboutUs" element={<AboutUs/>} />
                    <Route path="ContactUs" element={<ContactUs/>} />
                    <Route path="MockTest" element={<MockTest/>} />
                    <Route path="/send-email" element={<JobPortalMail />} />
                    <Route path="/ChatBot1" element={<ChatBot1/>} />
                </Routes>
            </Router>
    );
}

export default App;