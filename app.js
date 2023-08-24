import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => (
  <p>{text}: {value}</p>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  if (total === 0) {
    return <p>Ei palautteita vielä.</p>
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <Statistic text="Hyvä" value={good} />
      <Statistic text="Neutraali" value={neutral} />
      <Statistic text="Huono" value={bad} />
      <Statistic text="Yhteensä" value={total} />
      <Statistic text="Keskiarvo" value={average} />
      <Statistic text="Positiivisia" value={`${positivePercentage} %`} />
    </div>
  )
}
 
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button text="Hyvä" handleClick={() => setGood(good + 1)} />
      <Button text="Neutraali" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Huono" handleClick={() => setBad(bad + 1)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
