import React, {Component} from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event)}>
        <label>
              Número de Inscrição:
          <input maxLength="6" type="text" value={this.props.inscricao} onChange={(event) => this.props.handleChange(event.target.value)} />
        </label>
        <input type='submit' value='Pesquisar' />
      </form>
    )
  }
}

export default Form
