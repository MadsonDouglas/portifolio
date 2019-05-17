import React, { Component } from 'react';

import './Servicos.css';
import img1 from '../../img/servicos-2.jpg'
import img2 from '../../img/carrousel-2.jpg'

import { FaAngellist, FaCommentDots, FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdSkipForward } from "react-icons/io";
import { DiCss3, DiHtml5,DiJavascript1} from "react-icons/di";

export default class servicos extends Component {
    render() {
        return (
            <section>
                <div className="img-hover container">
                    <img src={img1} className="image img-h-1" alt="developer - 1" />
                    <div className="content-escondido">
                        <h1>Plataforma avançada</h1>
                        <p>Conheça os nossos serviços avançados.</p>
                        <div className="icon-escondido">
                            <div>
                                <IoMdSkipForward className="icon" />
                                <p>Monitoramento</p>
                            </div>
                            <div>
                                <FaCommentDots className="icon" />
                                <p>Bate papo</p>
                            </div>
                            <div>
                                <FaCloudDownloadAlt className="icon" />
                                <p>Serviços em nuvem</p>
                            </div>

                        </div>
                        <a href="/">Entrar em contato</a>
                    </div>
                    <div class="middle">
                        <div class="text">
                            <h1>Avançado</h1>
                            <p>Os nossos serviços avançada envolvem desde a parte de banco de dado, até a gerencia de projetos com paginas Dinamicas.</p>
                            <FaAngellist className="icon" />
                        </div>
                    </div>
                </div>
                <div className="img-hover container" >
                    <img src={img2} className="image img-h-2" alt="developer - 2" />
                    <div className="content-escondido">
                    <h1>Plataforma Básica</h1>
                    <p>Conheça os nossos serviços basicos de conteudos estaticos com.</p>
                    <div className="icon-escondido">
                        <div>
                            <DiCss3 className="icon" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <DiHtml5 className="icon" />
                            <p>Html 5</p>
                        </div>
                        <div>
                            <DiJavascript1 className="icon" />
                            <p>Java Script</p>
                        </div>

                    </div>
                    <a href="/">Entrar em contato</a>
                    </div>
                    <div class="middle">
                        <div class="text">
                            <h1>Básico</h1>
                            <p>Os nossos serviços basicos envolvem a criação de paginas staticas com conteudo fixo.</p>
                            <FaAngellist className="icon" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
