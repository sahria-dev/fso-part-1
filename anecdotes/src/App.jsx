import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const NextButton = (props) => {
  return (
    <button onClick={props.handleNextAnecdote}>Next ancedote</button>
  )
}

const VoteButton = (props) => {
  return (
    <button onClick={props.handleVote}>Vote</button>
  )
}

const MostVoted = (props) => {
  const {anecdotes, votes} = props
  
  const indexOfMostVoted = votes.reduce((maxIndex, current, i) => {

    // if (current > votes[maxIndex]) {
    //   return i
    // }
    // return maxIndex
    return current > votes[maxIndex] ? i : maxIndex

  }, 0)


  return (
    <p>{anecdotes[indexOfMostVoted]}</p>
  )

}

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

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  console.log(votes)

  const handleNextAnecdote = () => {
    const index = getRandomInt(anecdotes.length)
    setSelected(index)
  }

  const handleVote = () => {
    const copy = [...votes]

    copy[selected] += 1;

    console.log(copy);
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <NextButton handleNextAnecdote={handleNextAnecdote}/>
      <VoteButton handleVote={handleVote}/>

      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App