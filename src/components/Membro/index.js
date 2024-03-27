import React, {Component} from "react";

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar=this.entrar.bind(this);
    }

    entrar(nome){
        this.setState({nome: nome})
    }

    render(){
        return(
            <div>
                <h1>Opa {this.state.nome}</h1>
                <button onClick={()=>{this.entrar('Macaco')}}>
                    Entrar como Macaco
                </button>
                <button onClick={()=>this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        )
    }
}

export default Membro;