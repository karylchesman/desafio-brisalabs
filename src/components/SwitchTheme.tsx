import React, { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';

import { Container } from '../styles/components/SwitchTheme';

import moon from '../assets/moon.png';
import sun from '../assets/sun.png';

const SwitchTheme = () => {

    const { theme, switchThemeFunc } = useContext(AppContext);

    return (
        <Container>
            <button onClick={() => switchThemeFunc()}>
                <img id="theme-icon" src={theme.name === "light" ? moon : sun} alt="moon or sun" />
                <span>{theme.name === "light" ? "Tema Escuro" : "Tema Claro"}</span>
            </button>
        </Container>
    );
}

export default SwitchTheme;