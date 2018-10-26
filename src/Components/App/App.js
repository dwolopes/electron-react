import React from 'react'
import Form from '../Form/Form'
import * as bd from './../../BD/Connection'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      profissional: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (value) {
    this.setState({value})
  }

  handleSubmit (event) {
    event.preventDefault();
    let results = bd.consultaQuite(this.state.value)
    console.log(results)
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <h1>Verifique se o Cd está quite :)</h1>
        <h2>{this.state.value}</h2>
        <Form inscricao={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>)
  }
}

export default App
