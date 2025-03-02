
const Course = (props) => {
    return (
      <div>
        {props.courses.map(course => (
          <div key={course['id']}>
            <Header course={course['name']}/>
            <Content parts={course['parts']}/>
            <Total parts={course['parts']}/>
          </div>
        ))}
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <p>
        Total of {props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0,)} exercises
      </p>
    )
  }

  export default Course;