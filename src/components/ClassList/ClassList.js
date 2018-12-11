import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Home from './../Home/Home'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    } 
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then( results => {
      this.setState({
        students: results.data
      });
    });
  }

  render() {
    const students = this.state.students.map((student, index) => (
      <Link to={`/student/${student.id}`} key={ index }>
        <h3> { student.first_name } { student.last_name }</h3>
      </Link>
  ))

    return (
      <div className="box">
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
        <Link to='/'>
          <button className='btn'>Back</button>
        </Link>

      </div>
    )
  }
}