//estilização
import "./style.css";

function CardServico(props: any) {
    return <div className="servico">
        <div className="topo_servico">
            <h3>{props.nome}</h3>
            <span>R$ {props.valor}</span>
        </div>
        <p>{props.descricao}</p>
        <div className="techs">
            {
                props.techs.map((tech: string, indice: number) => {
                    return <span key={indice}>{tech}</span>
                })
            }
        </div>
    </div>
}

export default CardServico;