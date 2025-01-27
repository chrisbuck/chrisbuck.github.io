import React from "react";
import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "@components/TopNav";
// import Home from "@pages/home/index";
import Home from "@pages/brown/visual-storytelling/final-project/index";
import { generateRoutes } from "./utils/generateRoutes";

function App() {
    const routes = generateRoutes();
    return (
        <div className="App">
            <TopNav />
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Routes>
                {/* <Routes>
                    
                    <Route path="/brown/visual-storytelling/final-project" element={<Styles />} />
                    <Route path="/styles" element={<Styles />} />
                </Routes> */}
            </Router>
        </div>
    );
}

export default App;
