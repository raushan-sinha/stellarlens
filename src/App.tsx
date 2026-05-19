import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components/navigation";
import { About } from "./pages/About";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}