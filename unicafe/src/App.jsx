import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleCLick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  const {text, value} = props;
  return (
    <p>{text} : {value}</p>
  )
}

const Statistic = (props) => {
  const {good, neutral, bad} = props;

  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total)*100;

  if (total == 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <StatisticLine text={'good:'} value={good}/>
      <StatisticLine text={'Neutral:'} value={neutral}/>
      <StatisticLine text={'Bad'} value={bad}/>
      <StatisticLine text={'Average'} value={average}/>
      <StatisticLine text={'Positive'} value={total == 0 ? 'None': positive +'%'}/>
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

      <h1>Statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App