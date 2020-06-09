import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
<p>
  {props.parts}  
</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0] + props.parts[1] + props.parts[2]}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <>
      <Header course={course.name}/>
      <Content parts={[ [course.parts[0].name, course.parts[0].exercises], [course.parts[1].name, course.parts[1].exercises], [course.parts[2].name, course.parts[2].exercises] ]}/>
      <Total parts={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))