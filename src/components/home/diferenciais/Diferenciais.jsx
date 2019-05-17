import React, { Component } from 'react';
import { IoIosAddCircleOutline, IoMdEye } from "react-icons/io"
import { MdVerifiedUser, MdTrendingUp, MdAttachMoney } from "react-icons/md"
import { TiThumbsUp } from "react-icons/ti"

import './Diferenciais.css';

export default class Diferenciais extends Component {
  render() {
    return (
      <div className="diferenciais">
        <div className="dif-text">
          <h1>Nossos<br /> Diferenciais</h1>
        </div>
        <div className="dif-cards">
          <div className="dif dif-cards-1">
            <IoIosAddCircleOutline className="react-icons" />
            <h5>Comrpometimento</h5>
            <p>Com a nossa equipe o cliente terá certeza de que seu pedido será entregue conforme  o solicitado.</p>
          </div>
          <div className="dif dif-cards-2">
            <IoMdEye className="react-icons" />
            <h5>Atualizações</h5>
            <p>A equipe de desenvolvimento estará sempre de olho em novas tecnologias para alertar os clientes qual o melhor serviço de atualizações.</p>
          </div>
          <div className="dif dif-cards-3">
            <MdVerifiedUser className="react-icons" />
            <h5>Conhecimento Especifico</h5>
            <p>Temos uma equipe altamente qualificada para prestar os melhores serviços ao cliente.</p>
          </div>
          <div className="dif dif-cards-4">
            <MdTrendingUp className="react-icons" />
            <h5>Cuidado com o Mercado</h5>
            <p>A nossa equipe está sempre de olho nas melhores tecnologias do mercado que possam ajudar na interação do usuario com o software.</p>
          </div>
          <div className="dif dif-cards-5">
            <MdAttachMoney className="react-icons" />
            <h5>Custo Acessível</h5>
            <p>A menor preço possivel em relação ao que for solicitado pelo cliente.</p>
          </div>
          <div className="dif dif-cards-6">
            <TiThumbsUp className="react-icons" />
            <h5>Comunicação</h5>
            <p>A nossa equipe preza por dar o melhor atendimento possivel ao cliente.</p>
          </div>
        </div>
      </div>
    )
  }
}
