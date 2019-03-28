import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {message: "Hello World."}
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        const myData = response.data.data
        this.setState({data: myData})
      })
      .catch(err => {
        this.setState({data: ["error retrieving names"]})
      })
  }

  handleClick = () => {
    this.setState({
      message: "Clicked"
    })
  }

  render() {
    return(
      <div>{this.state.data && this.state.data.map( (obj, index) =>
        <div key={index}>{obj.first_name}</div>
      )}
      </div>

    )
  }
}

export default App
