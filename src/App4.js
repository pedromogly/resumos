import React, {Component} from "react";

class App4 extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[
        'Que isso primata?',
        'Effects and language simio'
      ],
      input: '',
    };

    this.adicionar = this.adicionar.bind(this);
  }

  adicionar(){
    let feed = this.state.feed;
    let input = this.state.input;
    this.setState({feed: [...feed,input], input: ''});

  }

  render(){
    return(
      <div>
        <ul>
          {this.state.feed.map(
            comentario => (
              <li>{comentario}</li>
            )
          )}
        </ul>
        <input onKeyDown={(e)=>{if(e.key==='Enter'){this.adicionar()}}} type="text" value={this.state.input} 
          onChange={(e)=>{this.setState({input:e.target.value})}} />
      <button onClick={this.adicionar}>Adicionar</button>
      </div>
    )
  }
}

export default App4;