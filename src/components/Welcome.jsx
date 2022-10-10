import React from 'react'
import { useContext, useEffect} from 'react'
import { QuizContext } from '../hook/quizContext'

import Quiz from '../assets/quiz.svg'
import './Welcome.css'

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  
  useEffect(() => {
    // embaralhar as perguntas
    dispatch({type: 'REORDER_QUESTIONS'})

  },[])

  return (
    <div className='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt='imagem quiz' />
    </div>
  )
}
