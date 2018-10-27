import React, {Component} from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form name="quiteForm" onSubmit={(event) => this.props.handleSubmit(event)}>
        <label>
              Número de Inscrição:
          <input maxLength="6" type="text" name="inscricao"/>
        </label>
        <input type='submit' value='Pesquisar' />
      </form>
    )
  }
}

export default Form
