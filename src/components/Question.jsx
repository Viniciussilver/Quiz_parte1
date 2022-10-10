import React from "react"
import { useContext } from "react"
import { QuizContext } from "../hook/quizContext"
import { Option } from "./Option"

import "./Question.css"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
        type: 'CHECK_ANSWER', 
        peyload: { answer: currentQuestion.answer, option }
    })
  }

  return (
    <div className="container">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((item) => (
          <Option
            key={item}
            option={item}
            selectOption={() => onSelectOption(item)}
            answer={currentQuestion.answer}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  )
}

export default Question
