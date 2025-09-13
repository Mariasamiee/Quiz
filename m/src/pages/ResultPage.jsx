import React from "react";
import { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { useNavigate } from "react-router-dom";

function ResultPage() {

  const { state, dispatch } = useContext(QuizContext);

  const navigate = useNavigate();

  const { score, questions } = state;

  const handlerRestart = () => {
    dispatch({ type: "RESTART_QUIZ" });
    navigate("/quiz");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white">

      <div className="bg-black bg-opacity-60 p-8 rounded-3xl w-[400px] text-center shadow-2xl">

        <p className="text-2xl font-semibold mb-6">
          Your score: {score} / {questions.length}
        </p>

        <button onClick={handlerRestart} className="px-6 py-2 rounded-xl text-xl font-medium bg-purple-800 hover:bg-purple-900 shadow-lg transition-transform duration-300 hover:scale-105" > Restart Quiz  </button>

      </div>

    </div>
  )
}
export default ResultPage