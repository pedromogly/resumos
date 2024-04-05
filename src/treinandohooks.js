import React, {useState} from "react";

function TreinandoHooks(){
    const [vagaroso, setVagaroso] = useState([
        'Pedrovisk',
        'Eduarduianho',
    ]);
    const [localizador, setLocalizador] = useState(0)
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState('');

    function aumentar(){
        setContador(contador+1);
    }

    function avançar(){
        setLocalizador((localizador + 1) % vagaroso.length);
    }
    function retroceder(){
        if(localizador <= 0) {
            setLocalizador(0);
        } else {
        setLocalizador(localizador - 1);
        }
    }


    function cadastrar(){
        setVagaroso([...vagaroso, input]);
        setInput('');
    }

    return(
        <div>
            <div>
                <h3>
                <button onClick={()=>{setContador(contador-1)}}>-</button>
                    {contador}
                <button onClick={aumentar}>+</button>
                </h3>
                <h3>
                    Selecione o vagaroso:<br/>
                    {vagaroso[localizador]}<br/>
                    <button onClick={retroceder}>&lt;</button>    
                    <button onClick={avançar}>&gt;</button>
                </h3>
                <h4>
                    Cadastrar novo vagaroso:
                    <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                    <button onClick={cadastrar}>+</button>
                </h4>
            </div>
        </div>
    )
}

export default TreinandoHooks;
