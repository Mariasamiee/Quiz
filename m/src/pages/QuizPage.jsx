import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../QuizContext";

function QuizPage() {
    const { state, dispatch } = useContext(QuizContext);
    const navigate = useNavigate();
    const { currentQuestion, questions } = state;
    const question = questions[currentQuestion];

    if (questions.length === 0) return <h2>Loading...</h2>
    if (currentQuestion >= questions.length) {
        navigate("/result");
        return null;
    }

    return (
        <div className="text-center bg-purple-500 h-screen">
            <div className=" bg-black opacity-[0.6] bg-transparent text-white h-[300px] w-[400px] rounded-3xl translate-x-[540px] translate-y-[160px]">
                <div className="text-2xl translate-y-[40px]">
                    Question {currentQuestion + 1} / {questions.length}
                </div>
                <h2 className="text-xl translate-y-[100px]">{question.question}</h2>
                <div className="text-base translate-y-[130px] translate-x-[5px] gap-12 flex">
                    {question.options.map((opt, i) => (
                        <button key={i} onClick={() => dispatch({ type: "ANSWER_QUESTION", payload: i })}> {opt} </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default QuizPage