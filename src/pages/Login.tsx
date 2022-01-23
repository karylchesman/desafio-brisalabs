import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Container } from '../styles/Container';
import { Content } from '../styles/pages/Login';

import pokelogo from '../assets/image1.png'
import { InputComponent } from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import SwitchTheme from '../components/SwitchTheme';
import { AppContext } from '../context/ContextProvider';

const Login: React.FC = () => {

    const { signIn } = useContext(AppContext);

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    async function handlelogin(event: FormEvent) {
        event.preventDefault();

        if (user === "" || pass === "") return;

        await signIn({ user, pass });
    }

    return (
        <Container>
            <Content>
                <div className="login-form">
                    <img id="poke-logo" src={pokelogo} alt="Pokemon Logo" />
                    <p>
                        Comece a coletar pokémons!
                    </p>
                    <form onSubmit={handlelogin}>
                        <InputComponent id="user" type="text" placeholder="Email" onChange={(event) => setUser(event.target.value)} />
                        <InputComponent id="pass" type="password" placeholder="Senha" onChange={(event) => setPass(event.target.value)} />
                        <ButtonComponent type="submit">
                            Entrar
                        </ButtonComponent>
                    </form>
                </div>
            </Content>
            <SwitchTheme />
        </Container>
    );
}

export { Login };