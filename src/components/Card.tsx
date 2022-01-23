import React, { useContext, useEffect, useState } from 'react';

import { Container } from '../styles/components/Card';

import ButtonComponent from './ButtonComponent';
import { AppContext } from '../context/ContextProvider';

import { captalizeString } from '../services/stringFormatter';
import { DetailsModal } from './DetailsModal';

export interface PokemonCardProps {
    fav: boolean;
    name: string;
    imageurl: string;
    detalhesurl: string;
    id: string;
    types: ITypePokemon[];
}

export interface ITypePokemon {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

const Card = ({ fav, name, imageurl, detalhesurl, id, types }: PokemonCardProps) => {

    const { theme ,addPokemonToList } = useContext(AppContext);
    const [favorite, setFavorite] = useState(fav);
    const [showPokemonDetails, setShowPokemonDetails] = useState(false);

    function favoritePokemon() {
        let fav = favorite ? false : true

        setFavorite(fav)

        let pokemon = { fav, name, imageurl, detalhesurl, id, types }

        addPokemonToList(pokemon);
    }

    return (
        <Container>
            <button id="fav-icon" type="button" onClick={() => favoritePokemon()}>
                <img src={favorite === false ? theme.card.heartIcon : theme.card.heartFillIcon} alt="Fav icone" />
            </button>
            <img id="poke-img" src={imageurl} alt="Pokemon imagem" />

            <p className="name">{name}</p>
            <p className="poke-id">ID: {id}</p>

            <div className="types">
                {types.map(item => {
                    if (item.type.name === "electric") return <div className="badge-eletric">{captalizeString(item.type.name)}</div>
                    if (item.type.name === "fire") return <div className="badge-fire">{captalizeString(item.type.name)}</div>
                    if (item.type.name === "water") return <div className="badge-water">{captalizeString(item.type.name)}</div>

                    return <div className="badge-eletric">{captalizeString(item.type.name)}</div>
                })}
            </div>

            <div id="ver-detalhes">
                <ButtonComponent height="32px" onClick={() => setShowPokemonDetails(true)}>Ver Detalhes</ButtonComponent>
            </div>

            {
                showPokemonDetails && <DetailsModal
                    onhide={() => setShowPokemonDetails(false)}
                    show={showPokemonDetails}
                    pokemonurl={detalhesurl}
                    favoriteFunction={() => {
                        favoritePokemon()

                        if (window.location.pathname === "/favoritos") {
                            setShowPokemonDetails(false)
                        }
                    }}
                />
            }
        </Container>
    );
}

export { Card };