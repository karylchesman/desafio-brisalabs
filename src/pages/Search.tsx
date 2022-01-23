import React, { useContext, useState } from 'react';
import { NavBar } from '../components/NavBar';
import SwitchTheme from '../components/SwitchTheme';

import { Container } from '../styles/Container';
import { Content } from '../styles/pages/Search';

import searchIcon from '../assets/search.png'
import { Card, PokemonCardProps } from '../components/Card';
import { api } from '../services/api';
import { AppContext } from '../context/ContextProvider';

const Search: React.FC = () => {

    const [pokemonFound, setPokemonFound] = useState<PokemonCardProps | null>(null);
    const [pokemonToFind, setPokemonToFind] = useState<string>("");
    const { pokemonsList } = useContext(AppContext);

    async function findPokemon() {
        setPokemonFound(null);

        if (pokemonToFind === "") return;

        try {
            const result = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToFind}`);

            let pokemonsIds = pokemonsList.map(item => item.id)

            setPokemonFound({
                fav: pokemonsIds.includes(result.data.id) ? true : false,
                id: result.data.id,
                name: result.data.name.charAt(0).toUpperCase() + result.data.name.substr(1),
                imageurl: result.data.sprites.front_default,
                detalhesurl: "https://pokeapi.co/api/v2/pokemon/" + result.data.id,
                types: result.data.types,
            })

        } catch (err) {
            console.log("Não encontrado.");
        }
    }

    return (
        <Container>
            <NavBar />
            <Content>
                <div id="search">
                    <input id="pokemon-name" type="text" placeholder="Procure por pokémons" onChange={(event) => setPokemonToFind(event.target.value)} />
                    <button type="button" onClick={() => findPokemon()}><img src={searchIcon} alt="Botão procurar" /></button>
                </div>
                <div id="result">
                    {
                        pokemonFound !== null &&
                        <Card key={pokemonFound.id}
                            fav={pokemonFound.fav}
                            name={pokemonFound.name}
                            imageurl={pokemonFound.imageurl}
                            detalhesurl={pokemonFound.detalhesurl}
                            id={pokemonFound.id}
                            types={pokemonFound.types}
                        />
                    }
                </div>
                <SwitchTheme />
            </Content>
        </Container>
    );
}

export { Search };