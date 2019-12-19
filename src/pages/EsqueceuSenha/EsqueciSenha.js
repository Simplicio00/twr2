import React, { Component } from 'react';


class EsqueciSenha extends Component {

    constructor(props){
        super(props);
        this.state = {
            esqSenha: [],
            email: '',
            nomeCompleto: ''
                    }
        this.pEmail = this.pEmail.bind(this)
        this.atualizaEmail = this.atualizaEmail.bind(this)
        this.atualizaNomeCompleto = this.atualizaNomeCompleto.bind(this)
                    }

    atualizaEmail(event){
        this.setState({email: event.target.value})
    }

    atualizaNomeCompleto(event){
        this.setState({nomeCompleto: event.target.value})
    }

    pEmail = (event) => {
        event.preventDefault();
        fetch('https://localhost:5001/api/Usuario/forgotPassword', {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({nomeCompleto: this.state.nomeCompleto, email: this.state.email})
        })
        .then(resposta => resposta.json())
        .then(resposta => {
            if (resposta.status === 200) {
                window.location.reload()
            }
        }
        )
        .then(data => {
            console.log(data)
            this.setState({ esqSenha: data })
        })
        .catch((erro) => console.log(erro))
    }
    
        
    render(){
        return(
            <div>
                <form>
                    <label>Nome Completo</label>
                    <input value={this.state.nomeCompleto} onChange={this.atualizaNomeCompleto} />
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.atualizaEmail} />
                    <button type="submit" onClick={this.pEmail}>Esqueci a senha</button>
                </form>
            </div>
        )
    }
}

export default EsqueciSenha;