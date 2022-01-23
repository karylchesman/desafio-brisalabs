import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { DetailsModal } from '../components/DetailsModal';
import { NavBar } from '../components/NavBar';
import SwitchTheme from '../components/SwitchTheme';
import { AppContext } from '../context/ContextProvider';
import { twoCaseNumberFormatter } from '../services/stringFormatter';

import { Container } from '../styles/Container';
import { Content } from '../styles/pages/Favoritos';

const Favoritos: React.FC = () => {

    const navigate = useNavigate();
    const { pokemonsList } = useContext(AppContext);
    const [showPokemonDetails, setShowPokemonDetails] = useState(true);

    return (
        <Container>
            <NavBar favoriteamount={pokemonsList.length} />
            <Content>
                {
                    pokemonsList.length <= 0 ?
                        <div id="no-content">
                            <div id="banner-no-fav" />
                            <span>Está meio vazio por aqui.</span>
                            <p>
                                Procure por pokémons para adicioná-los aos seus favoritos.
                            </p>
                            <ButtonComponent variant="secondary" maxWidth="233px" onClick={() => navigate("/procurar")}>
                                Procurar pokémons
                            </ButtonComponent>
                        </div>
                        :
                        <div id="content">
                            <div id="content-header">
                                <p>
                                    Olá, você tem {twoCaseNumberFormatter(String(pokemonsList.length))} {pokemonsList.length > 1 ? "pokémons salvos!" : "pokémon salvo!"}
                                </p>
                            </div>

                            <div id="pokemon-list">
                                {
                                    pokemonsList.map(item => {
                                        return <Card key={item.id}
                                            fav={item.fav}
                                            name={item.name}
                                            imageurl={item.imageurl}
                                            detalhesurl={item.detalhesurl}
                                            id={item.id}
                                            types={item.types}
                                        />
                                    })
                                }
                            </div>
                        </div>
                }
                <SwitchTheme />
            </Content>
        </Container>
    );
}

export { Favoritos };