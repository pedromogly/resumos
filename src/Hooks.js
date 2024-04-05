import React,{useState, useEffect, useMemo, useCallback} from "react";

function Hook() {
//chega de constructor, jeito easy de fazer states, bora usar HOOKS
    //parametro macaco é o nome da state
    //segundo parametro setMacaco é o famoso setState pra alterarmos o valor
    //e o useState é o proprio valor que vai ser manipulado
    const[macaco, setMacaco] = useState('Macaco rede social');

//use Effect, é uma função, eu acho que substitui os carinhas de ciclo de vida dos componentes
//se o [parametro] estiver vazio, essa state vai rodar assim que a pagina for carregada
    useEffect(() => {
        //roda
    }, []);

    //se o parametro estiver com alguma state, esse effect vai sempre rodar quando a state for alterada
    useEffect(()=>{
        //roda
    }, [macaco]);

    //exemplo prático useEffect
        const [count, setCount] = useState(0);
        useEffect( ()=> {
            document.title = `Contagem: ${count}`;
        }, [count]);


    //prototipo de pagina de comentário
    const [error, setError] = useState(false);
    const [comentarios, setComentarios] = useState([
        'taloco@gmail.com',
        'setemproblema@hotmail.com'
    ]);
    const [input, setInput] = useState('');

//useMemo, serve pra economizar desepenho.
//basicamente eu só crio uma nova variavel que recebe o resultado final da state que alterei
const totalEmails = useMemo(()=> comentarios.length, [comentarios]);

    const comentar = useCallback(() => {
        if((input !== '') && (input.includes('@') && (input.includes('.com')))) {
            setComentarios([...comentarios, input]);
            setInput('');
        } else {
            setError(true);
        }
        
    },[input,comentarios])

    const keys = (e) => {
        if(e.key==='Enter'){
            comentar();
        };
    }


    return(
        <div>
            <h1>{macaco}</h1>
            <div>
                <p>Clicou {count} vezes</p>
                <button onClick={()=>{setCount(count+1)}}>Clique</button>
            </div>
            <br/>
            <h3>
                <ol>
                    {comentarios.map(
                        comentario => (
                            <li>{comentario}</li>
                        )
                    )}
                </ol>
            </h3>
            <p>{totalEmails.length} emails cadastrados...</p>
            <h3>Insira seu email:</h3>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={keys}/>
                {error ?
                    <div><br/>Ta errado, digita o email direito com '@' e terminar com '.com'
                        <button onClick={()=>setError(false)}>OK</button>
                    </div>
                :
                    <div></div>
                }
            <button onClick={comentar}>Adicionar</button>
        </div>
    )
}

export default Hook;