import React, { useContext } from "react";
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
    <div className="h-screen bg-purple-500 text-white text-center">
      <div className=" bg-black opacity-[0.6] bg-transparent text-white h-[300px] w-[400px] rounded-3xl translate-x-[540px] translate-y-[160px]">
        <p className="text-2xl translate-y-[80px]">Your score: {score} / {questions.length} </p>
        <button className="rounded-xl border-none text-xl bg-purple-800 h-[40px] w-[140px] hover:bg-purple-900 translate-y-[140px] translate-x-[0px]" onClick={handlerRestart}>Restart Quiz</button>
      </div>
    </div>
  )
}
export default ResultPage