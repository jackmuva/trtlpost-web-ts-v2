import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./ui/pages/LoginPage.tsx";
import HomePage from "./ui/pages/HomePage.tsx";
import ConfirmUserPage from "./ui/pages/ConfirmUserPage.tsx";

function App() {
    const isAuthenticated = () => {
        const accessToken = sessionStorage.getItem('accessToken');
        return !!accessToken;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/confirm" element={<ConfirmUserPage />} />
                <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App