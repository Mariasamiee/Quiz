import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/quiz");
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700">
            <button onClick={handleStart} className="px-8 py-3 rounded-2xl text-3xl font-semibold text-white bg-purple-800 hover:bg-purple-900 shadow-lg transition-transform duration-300 hover:scale-110" > Start Quiz </button>
        </div>
    )
}
export default HomePage