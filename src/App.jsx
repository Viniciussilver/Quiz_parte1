import React, { useEffect, useState } from 'react'
import { Welcome } from './components/Welcome'

import './style.css'
import { useContext } from 'react'
import { QuizContext } from './hook/quizContext'
import Question from './components/Question'
import { GameOver } from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    // embaralhar as perguntas
    dispatch({type: 'REORDER_QUESTIONS'})

  },[])


  return (
    <div className='App'>
      <h1>Quiz de programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}

    </div>
  )
}

export default App
