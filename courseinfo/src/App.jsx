const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.courseContent.part1} {props.courseContent.exercises1}</p>
      <p>{props.courseContent.part2} {props.courseContent.exercises2}</p>
      <p>{props.courseContent.part3} {props.courseContent.exercises3}</p>
    </>
    
  )
}

const Total = (props) => {
  return (
    <p>Number of exercices {props.sum}</p>
  )
}




const App = () => {
  
  const course = 'Half Stack application development'

  const courseContent = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <Content courseContent={courseContent} />
      <Total sum={courseContent.exercises1 + courseContent.exercises2 + courseContent.exercises3 } />
    </div>
  )
}

export default App