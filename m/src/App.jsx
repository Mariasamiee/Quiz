import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"
import ResultPage from "./pages/ResultPage"
import QuizProvider from "./QuizContext"
function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  )
}
export default App
