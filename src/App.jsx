import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import SettingPage from "./pages/Setting/Setting";
import ChatPage from "./pages/Chat/Chat";
import LayoutPage from "./pages/Layout/Layout";
import ComponentPage from "./pages/Component/Component";
import "./App.css";
const App = () => {
    return (
        <div className="app-container">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/setting" element={<SettingPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/layout" element={<LayoutPage />} />
                    <Route path="/component" element={<ComponentPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
