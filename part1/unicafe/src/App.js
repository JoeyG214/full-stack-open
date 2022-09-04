import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [netural, setNeutal] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutal(netural + 1)}>netural</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {netural}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
