import React, {Component} from "react";
import Membro from './components/Membro';

class App3 extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: false
    };
    this.entrar=this.entrar.bind(this);
    this.sair=this.sair.bind(this);
  }

  entrar(){
    this.setState({status: true})
  }

  sair(){
    this.setState({status: false})
  }

  render(){
    return(
      <div>
        <h1>Vagarosos Club!</h1>
        {this.state.status ?
          <h1>
            logado, bó sair?
            <button onClick={this.sair}>Entrar</button>
          </h1>
          :
          <h1>
            bó logar
            <button onClick={this.entrar}>Entrar</button>
          </h1>
        }

      </div>
    )
  }
}

export default App3;