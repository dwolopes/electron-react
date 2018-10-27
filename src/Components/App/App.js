import React from 'react'
import Form from '../Form/Form'
import * as bd from './../../BD/Connection'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profissional: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getQuite = this.getQuite.bind(this);
  }

  getQuite (error, profissional) {
    if (error){
      console.log(error);
    } else {
      this.setState({profissional});
      console.log(this.state)
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    bd.consultaQuite(document.forms["quiteForm"]["inscricao"].value, this.getQuite);
  }

  render () {
    return (
      <div>
        <h1>Verifique se o Cd está quite :)</h1>
        <h2>{this.state.value}</h2>
        <Form inscricao={this.state.value} handleSubmit={this.handleSubmit}/>
      </div>)
  }
}

export default App
