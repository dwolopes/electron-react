import React, {Component} from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <form>
            <label>
              Número de Inscrição:
              <input type="number" value={this.props.inscricao}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default Form;