import React, {Component} from 'react';
import Form from '../Form/Form';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 557};
  }

  render() {
    return (
      <div>
        {this.state.value}
        <h1>Verifique se o Cd está quite :)</h1>
        <Form inscricao={this.state.value}/>
      </div>);
  }
}

export default App;
