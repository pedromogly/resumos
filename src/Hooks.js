import React,{useState} from "react";

function Hook() {
//chega de constructor, jeito easy de fazer states
    //parametro macaco é o nome da state
    //segundo parametro setMacaco é o famoso setState pra alterarmos o valor
    //e o useState é o proprio valor que vai ser manipulado
    const[macaco, setMacaco] = useState('Macaco rede social');


//prototipo de pagina de comentário
    const [comentarios, setComentarios] = useState([
        'Achei esse macaco fedido',
        'Caraca, monki effects?'
    ]);
    const [input, setInput] = useState('');

    const comentar = () => {
        setComentarios([...comentarios, input]);
        setInput('');
    }


    return(
        <div>
            <h1>{macaco}</h1>
            <h3>
                <ol>
                    {comentarios.map(
                        comentario => (
                            <li>{comentario}</li>
                        )
                    )}
                </ol>
            </h3>

            <p>Insira seu comentário:</p>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={comentar} />
            <button onClick={comentar}>Adicionar</button>
        </div>
    )
}

export default Hook;