import React from 'react';
import './globals.css';

export default function Contato() {
    const [nome, setNome] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [message, setMessage] = React.useState('');
    let [classFeedback, setClassFeedback] = React.useState('error-message');


    const limparstates = () => {
        setNome('');
        setTelefone('');
    }

    function saveContato(event) {
        event.preventDefault();

        if (!nome || !telefone) {
            setClassFeedback('error-message');
            setMessage('Preencha os campos corretamente!');
        } else {
            setClassFeedback('success-message');
            setMessage("Sua solicitação foi enviada com sucesso, aguarde enquanto nossa equipe análisa sua solicitação!");
            limparstates();
        }
    }

    return <>
        <div className={`box-message ${classFeedback}`}>
            {message}
        </div>


        <h1>Contato Page</h1>
        <form onSubmit={saveContato} className="contato-form">
            <div >
                <label>Nome</label>
                <input type="text" placeholder="escreva seu nome"
                    value={nome}
                    onChange={(el) => setNome(el.target.value)}
                />
            </div>

            <div>
                <label>Telefone</label>
                <input
                    type="text"
                    placeholder="Seu telefone"
                    value={telefone}
                    onChange={(el) => setTelefone(el.target.value)}
                />
            </div>

            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </>;
}