import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../QuizContext";

function QuizPage() {

    const { state, dispatch } = useContext(QuizContext);
    const { currentQuestion, questions } = state;
    const question = questions[currentQuestion];
    const navigate = useNavigate();

    if (questions.length === 0) return <h2 className="text-white text-2xl">Loading...</h2>

    if (currentQuestion >= questions.length) {
        navigate("/result");
        return null;
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white">

            <div className="bg-black bg-opacity-60 p-8 rounded-3xl w-[400px] text-center shadow-2xl">

                <div className="text-2xl font-semibold mb-6">
                    Question {currentQuestion + 1} / {questions.length}
                </div>

                <h2 className="text-xl mb-8">{question.question}</h2>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    {question.options.map((opt, i) => (
                        <button key={i} onClick={() => dispatch({ type: "ANSWER_QUESTION", payload: i })} className="px-4 py-2 rounded-xl bg-purple-800 hover:bg-purple-900 transition-colors shadow-md" >  {opt} </button>
                    ))}
                </div>

            </div>

        </div>
    )
}
export default QuizPage