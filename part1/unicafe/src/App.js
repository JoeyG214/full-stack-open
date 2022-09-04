import { useState } from 'react'

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
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>netural</button>
      <button onClick={increaseBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {netural}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
