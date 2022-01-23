import React, { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';

import { Container } from '../styles/components/NavBar';

import pokeLogo from '../assets/image.png';
import logoutIcon from '../assets/logout.png';
import { Link, useNavigate } from 'react-router-dom';

interface NavBarProps {
    favoriteamount?: number;
}

const NavBar = ({ favoriteamount }: NavBarProps) => {

    const { theme, logOut } = useContext(AppContext);
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/")
    }

    return (
        <Container>
            <div id="grid">
                <div className="logo">
                    <img src={pokeLogo} alt="Pokémon logo" />
                </div>
                <div className="menus">
                    <div className={`favoritos ${window.location.pathname === "/favoritos" && "menu-active"}`}>
                        <Link to={"/favoritos"}>
                            Favoritos&nbsp;
                        </Link>
                        {
                            (favoriteamount !== undefined && favoriteamount > 0) &&
                            <span className="badge-amount">{favoriteamount}</span>
                        }
                    </div>
                    <div className={`procurar ${window.location.pathname === "/procurar" && "menu-active"}`}>
                        <Link to={"/procurar"}>Procurar</Link>
                    </div>
                    <div className={`todos ${window.location.pathname === "/todos" && "menu-active"}`}>
                        <Link to={"/todos"}>Ver Todos</Link>
                    </div>
                </div>
                <div className="exit-button">
                    <button type="button" onClick={() => handleLogout()}>
                        <span>Sair</span>
                        <img id="logout-icon" src={theme.navBar.exitButtonIcon} alt="Logout button" />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export { NavBar };