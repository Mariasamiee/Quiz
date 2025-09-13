import { createContext, useReducer, useEffect } from "react";
import React from "react";
import api from "./services/api";

export const QuizContext = createContext();

const initialState = {
    currentQuestion: 0,
    score: 0,
    questions: [],
    loading: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
                loading: false,
                currentQuestion: 0,
                score: 0,
            }
        case "ANSWER_QUESTION": {
            const question = state.questions[state.currentQuestion];
            const isCorrect = action.payload === question.correctAnswer;
            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                currentQuestion: state.currentQuestion + 1,
            }
        }
        case "RESTART_QUIZ":
            return {
                ...initialState,
                loading: false,
                questions: state.questions,
            }
        default:
            return state;
    }
}

function QuizProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        api.get("/questio")
            .then((res) => {
                const mm = res.data.map((q) => ({
                    question: q.question,
                    options: q.answers,
                    correctAnswer: q.correctAnswer,
                    id: q.id,
                }))
                dispatch({ type: "SET_QUESTIONS", payload: mm });
            })
    }, []);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider