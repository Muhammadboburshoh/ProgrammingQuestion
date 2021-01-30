import { useReducer } from "react"
import reducer from "./Reducer/reducer.jsx"
import './App.css'

import data from "./data"

function App() {

  const [answers, setAnswers] = useReducer(reducer, [])

  return (
    <>
      <section className="questions">
        <div className="container">
          <h1 className="questions__heading">Dasturlashga oid savollar</h1>


          <ul>
            {
              data.map( question => {
                return (
                 <li key={question.id}>
                  <h3>{question.id}.{question.question}</h3>
                  {
                    question.answers.map(answer => {
                      return(
                        <button 
                        onClick={() => setAnswers(answer.answer)} key={answer.id}>{answer.id}.{answer.answer}</button>
                      )
                    })
                  }
                </li>
                )
              })
            }
          </ul>

          {/* <ul className="questions__list">
            <li className="question__item">
              <h3 className="question__text"><span className="separate-text">JavaScript</span> dasturlash tili nechanchi yil ishlab chiqilgan?</h3>
              <button onClick={questionOnClick} className="question__button">1993-yil</button>
              <button className="question__button">1994-yil</button>
              <button className="question__button">1995-yil</button>
              <button className="question__button">1996-yil</button>
            </li>

            <li className="question__item">
              <h3 className="question__text"><span className="separate-text">JavaScript</span> dasturlash tilida ogohlantirish oynasini qanday chiqarish mumkin?</h3>
              <button className="question__button">alert()</button>
              <button className="question__button">prompt()</button>
              <button className="question__button">confirm()</button>
              <button className="question__button">console.log()</button>
            </li>
          </ul> */}
        </div>
      </section>
    </>
  )
}

export default App
