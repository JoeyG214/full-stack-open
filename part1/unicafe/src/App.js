import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={(good - bad) / all} />
        <StatisticLine text='positive' value={(good / all) * 100} symbol='%' />
      </>
    )
  }
}

//takes text and value prop
const StatisticLine = ({text, value, symbol}) => {
  return (
    <>
    <p>{text} {value}{symbol}</p>
    </>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
}

export default App;
