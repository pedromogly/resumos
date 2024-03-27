import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      vagaroso: '',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.lista = this.lista.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  diminuir(){
     let state = this.state;
    if(state.contador === 0) {
      alert("Ta loco?");
      return;
    }
    state.contador -= 1;
    this.setState(state);   
  }

  lista(){
    let state= this.state;
    switch(state.vagaroso) {
      case '':
        state.vagaroso = 'Pedro';
        break;      
      case 'Pedro':
        state.vagaroso = 'Endy';
        break;
      case 'Endy':
        state.vagaroso = 'Felipe';
        break;
      case 'Felipe':
        state.vagaroso = 'Eduardo';
        break;
      case 'Eduardo':
        state.vagaroso = 'Pedro';
        break;
    }
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h3>
          <button onClick={this.diminuir}>-</button>
            {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
        <h3>
          Selecione o vagaroso:
          <button onClick={this.lista}>&lt;</button>
             {this.state.vagaroso}
          <button onClick={this.lista}>&gt;</button>
        </h3>
      </div>
    )
  }
}

export default App;
