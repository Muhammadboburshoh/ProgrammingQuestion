import data from "../data"

const answersArr = ["1995-yil", "alert()"]


const reducer = (state, action) => {

  console.log(action)
  data.forEach(question => {
    const a = question.answers.find(answer => answer.answer == action);
    console.log(a)
    // return action
    /* if(a.isCorrect === true) {
      console.log("to'g'ri")
    }
    else {
      console.log("noto'g'ri");
    } */

  })

  return state

}

export default reducer