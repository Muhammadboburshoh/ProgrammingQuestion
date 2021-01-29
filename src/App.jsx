import { useRadeucer } from "react"
import './App.css'

function App() {
  return (
    <>
      <section className="questions">
        <div className="container">
          <h1 className="questions__heading">Dasturlashga oid savollar</h1>

          <ul className="questions__list">
            <li className="question__item">
              <h3 className="question__text"><span className="separate-text">JavaScript</span> dasturlash nechanchi yil ishlab chiqilgan.</h3>
              <button className="question__button">1993-yil</button>
              <button className="question__button">1994-yil</button>
              <button className="question__button">1995-yil</button>
              <button className="question__button">1996-yil</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
