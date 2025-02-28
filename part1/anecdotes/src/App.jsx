import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Counter = ({ value }) => (
  <div>
    has {value} votes
  </div>
)

const Header = ({text}) => (
  <h1>{text}</h1>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  let new_votes = {}
  for (let i = 0; i < anecdotes.length; i++) {
    new_votes[i] = 0
  }
  const [votes, setVotes] = useState(new_votes)

  const [mostVoted, setMostVoted] = useState(0)

  const generateRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVoting = () => {
    const votes_copy = { ...votes }
    votes_copy[selected] += 1
    setVotes(votes_copy)

    let arr = Object.values(votes_copy)
    let max = Math.max(...arr)
    setMostVoted(arr.indexOf(max))
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      {anecdotes[selected]}
      <br /><br />
      <Counter value={votes[selected]} />
      <br />
      <Button onClick={handleVoting} text="vote" />
      <Button onClick={generateRandomAnecdote} text="next anecdote" />
      <Header text={"Anecdote with most votes"} />
      {anecdotes[mostVoted]}
      <br /><br />
      <Counter value={votes[mostVoted]} />
    </div>
  )
}

export default App