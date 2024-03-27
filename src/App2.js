import React, {Component} from "react";

class App2 extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  //toda vez que a tela for completamente montada, esse componente vai rodar
  componentDidMount(){
    setInterval(()=> {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 5000);
  }

  //toda vez que a state atualiza
  componentDidUpdate(){
    console.log('opa');
  }

  

  render(){
    return(
      <div>
        <h3>Hora: {this.state.hora}</h3>
      </div>
    )
  }
}

export default App2;