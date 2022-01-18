import react from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Routes, Link, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Nav />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<AboutUs />}></Route>
                <Route path="work" element={<OurWork />}></Route>
                <Route path="contact" element={<ContactUs />}></Route>
            </Routes>
        </div>
    );
}

export default App;
