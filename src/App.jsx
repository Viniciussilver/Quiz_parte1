import React, { useState } from 'react'
import { Welcome } from './components/Welcome'

import './style.css'
import { useContext } from 'react'
import { QuizContext } from './hook/quizContext'
import Question from './components/Question'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div className='App'>
      <h1>Quiz de programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameState === 'Playing' && <Question />}
    </div>
  )
}

export default App
