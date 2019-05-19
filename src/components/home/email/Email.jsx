import React, { Component } from 'react';

import axios from 'axios'

import './Email.css';




export default class email extends Component {

    constructor() {
        super()
        this.state = {
            email: {
                user_name: '',
                user_email: '',
                user_message: ''
            }
        }
    }
    sendEmail = () => {
        const { user_name, user_email, user_message  } = this.state
        // console.log(user_email, user_name, user_message)
        const url = `http://localhost:3001/send`
        // axios.post(url, {
        //     client_name: user_name,
        //     client_contact:user_email,
        //     client_message:user_message
        // }).then(resp => {
        //         console.log('requisição finalizada')
        // })
    }
  
    render() {
        const { email } = this.state.email
        // console.log(this.state)
        return (
            <div className="send-email">
                <div className="form-email">
                    <h1 className="titulo">Envie-nos um email</h1>
                    <div>
                        <input type="text" onChange={e => this.setState({ ...email, user_name: e.target.value })} placeholder="Nome" className="data-email" />
                        <input type="email" onChange={e => this.setState({ ...email, user_email: e.target.value })} placeholder="Email para contato" className="data-email" />
                    </div>
                    <textarea onChange={e => this.setState({ ...email, user_message: e.target.value })} placeholder="Digite sua mensagem" className="data-message" />
                    <button onClick={this.sendEmail} className="enviar-email">enviar</button>
                </div>
                <h2 className="titulo">Ou entre em contato</h2>
                <div className="logo">
                    <p className='black' >
                        Contatos para detalhes
                    </p>
                </div>
                <p className="paragrafo">
                    madsonevesUFRN@gmail.com
                </p>
                <p className="paragrafo">
                    +55 84 9-8891-8621
                </p>
                <div className="numeros-contatos">
                    <p className="paragrafo">
                        Estes contatos são exclusivos para demandas relacionadas à
                        produtos e ofertas.
                    </p>
                </div>
            </div>
        )
    }
}
