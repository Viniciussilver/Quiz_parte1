import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../hook/quizContext'

import Quiz from '../assets/quiz.svg'
import './Welcome.css'

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  

  return (
    <div className='container'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt='imagem quiz' />
    </div>
  )
}
