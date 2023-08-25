//style
import "./style.css";

//hooks
import { useState, useEffect } from "react";

//api
import api from "../../utils/api";

//rotas
import { useNavigate } from "react-router-dom";

//localStorage
import secureLocalStorage from "react-secure-storage";

function Login() {

    // variavel de navegacao de componentes = useNavegate
    const navigate =useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function realizarAutenticacao(event:any){
        event.preventDefault();

        const usuario ={
            email: email,
            password: senha
        };

        
        api.post("login", usuario)
        .then((response: any) => {
            console.log(response.data);

            secureLocalStorage.setItem("user", response.data);

            navigate("/perfil/" + response.data.user.id);
            navigate(0)
            

        })
        .catch((error: any) => {
            alert("Erro ao realizar login: ");
        })
    }

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form className="login_formulario" method="POST" onSubmit={realizarAutenticacao}>
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                required
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;






// function login() {
//     return (
//         <>
//             <main id="main_login">
//                 <div className="container container_login">
//                     <div className="login_conteudo">
//                         <h1>Login</h1>
//                             <hr />
//                             <form className="login_formulario" action="">
//                                 <div className="login_box_input">
//                                     <label htmlFor="email">E-mail:</label>
//                                     <input type="email" id="email" placeholder="Digite aqui seu e-mail:"/>
//                                 </div>
//                                 <div className="login_box_input">
//                                     <label htmlFor="senha">Senha:</label>
//                                     <input type="password" id="senha" placeholder="Digite aqui sua senha:"/>
//                                 </div>
//                                 <input className="login_botao" type="button" value="Logar"/>
//                             </form>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );

// }

// export default login;


