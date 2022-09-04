import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [netural, setNeutal] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutal(netural + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral}text='neutral' />
      <Button onClick={increaseBad} text='bad' />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {netural}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
