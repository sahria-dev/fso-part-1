import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleCLick}>{props.text}</button>
  )
}

const Statistic = (props) => {

  const {good, neutral, bad} = props;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    return setGood(good +1)
  }

  const incrementNeutral = () => {
    return setNeutral(neutral +1)
  }

  const incrementBad = () => {
    return setBad(bad +1)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button handleCLick={incrementGood} text={"Good!"}/>
      <Button handleCLick={incrementNeutral} text={"Neutral"}/>
      <Button handleCLick={incrementBad} text={"Bad..."}/>

      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App