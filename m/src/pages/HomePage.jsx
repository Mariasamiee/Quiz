import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate("/quiz");
    }

    return (
        <div className="bg-purple-500 h-screen flex items-center justify-center">
            <button className="rounded-xl border-none text-4xl text-white bg-purple-800 h-[60px] w-[180px] hover:bg-purple-900 transition-transform hover:scale-110" onClick={handleStart} > Start Quiz </button>
        </div>
    )
}
export default HomePage