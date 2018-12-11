import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ClassList from './../ClassList/ClassList'

export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo: {}
    }

  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then( results => {
      this.setState({
        studentInfo: results.data
      })
    })
    // {console.log(this.state.studentInfo)}
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <Switch>
          <Route exact path='classlist/:class' component={ ClassList } />
        </Switch>
        {/* {console.log(this.state.studentInfo)} */}
        <Link to={`/classlist/${this.state.studentInfo.class}`}>
        <button className='btn'>Back</button>
        </Link>
        
      </div>
      
    )
  }
}