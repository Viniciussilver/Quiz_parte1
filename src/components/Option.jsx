import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../hook/quizContext'

import './Option.css'

export const Option = ({ option, answer, selectOption }) => {
    const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div className={`option ${quizState.answerSelected && option === answer ? 'correct' : ''}
    ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
    `} onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}
