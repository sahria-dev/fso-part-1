const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercise}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercise}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercise}</p>
    </>
    
  )
}

const Total = (props) => {


  let sum = 0;

  props.course.parts.forEach((parts) =>  {
    sum += parts.exrcices;
    return sum;
  })

  return (
    <p>Number of exercices {sum}</p>
  )
}




const App = () => {
  

  const course = {

    name: 'Half Stack application development',

    parts: [
      {
        name: 'Foundamentals of React',
        exrcices: 10
      },
      {
        name: 'Using props to pass data',
        exrcices: 7
      },
      {
        name: 'State of a component',
        exrcices: 14
      }
    ]

  }


  return (
    <div>
      <Header course={course.name}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App