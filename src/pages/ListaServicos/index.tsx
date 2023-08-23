// api
import api from "../../utils/api";

//estilização
import "./style.css";

//hooks
import { useEffect, useState } from "react";

//componentes
import CardServico from "../../components/CardServico";

function ListaServicos() {
    //STATE SERVICOS
    const [servicos, setServicos] = useState<any[]>([]);

    // const [listaServicos, setListaServicosFiltrados] = useState<any[]>(servicos);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            ListarServicos();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarServicoPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servico: any) => servico.hardSkills.includes(skillDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServicos(servicosFiltrados);
        }


    }

    function ListarServicos() {
        api.get("servicos")
            .then((response: any) => {
                console.log(response);
                setServicos(response.data)
                console.log(servicos);
            })
            .catch((error: any) => {
                console.log("Erro ao realizar um requisicao: ", error);
            })
    }

    useEffect(() => {
        //executa acao apos o componente
        ListarServicos();
    }, [])

    return (
        <main id="main_listaservicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post" onSubmit={buscarServicoPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input
                                    type="search"
                                    name="campo-busca"
                                    id="busca"
                                    placeholder="Buscar serviços por tecnologias..."
                                    onChange={verificarCampoSkill}
                                    autoComplete="off"
                                />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {
                                servicos.map((servico: any, indice: number) => {
                                    return <li key={indice}>
                                        <CardServico
                                            valor={servico.valor}
                                            nome={servico.nome}
                                            descricao={servico.descricao}
                                            techs={servico.techs}
                                            id={servico.id}
                                        />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ListaServicos;