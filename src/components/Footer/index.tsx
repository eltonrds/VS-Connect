import "./style.css";

import imgLogo from "../../assets/img/logo.svg";
import imgDev from "../../assets/img/dev.png";
import imgFacebook from "../../assets/img/facebook.svg";
import imgInstagram from "../../assets/img/instagram.svg";
import imgLinkedin from "../../assets/img/linkedin.svg";

import {Link} from "react-router-dom";


function Footer() {
    return(
        //Codigo do footer
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a className="botao botao_dicas" href="#">mais dicas</a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>
                                <Link to={"#"}>Login</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Listar Serviços</Link>
                            </li>
                            <li>
                                <Link to={"lista/devs"}>Listar Desenvolvedores</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Cliente</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Desenvolvedor</Link>
                            </li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <Link to={"#"}>
                                <img src={imgFacebook} alt="" />
                            </Link> 
                            <Link to={"#"}>
                                <img src={imgInstagram} alt="" />
                            </Link>
                            <Link to={"#"}>
                                <img src={imgLinkedin} alt="" />
                            </Link>
                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    );
}

export default Footer;