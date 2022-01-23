import React, { useContext, useEffect, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { Card, PokemonCardProps } from '../components/Card';
import { NavBar } from '../components/NavBar';
import SwitchTheme from '../components/SwitchTheme';
import { AppContext } from '../context/ContextProvider';
import { api } from '../services/api';

import { Container } from '../styles/Container';
import { Content } from '../styles/pages/Todos';

enum ETypePokemon {
    "Todos" = "Todos",
    "Fire" = "Fire",
    "Electric" = "Electric",
    "Water" = "Water",
}

const Todos: React.FC = () => {

    const { pokemonsList } = useContext(AppContext);
    const [typeFilter, setTypeFilter] = useState<ETypePokemon>(ETypePokemon["Todos"]);
    const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);

    async function findAllPokemon() {
        setPokemons([]);
        
        try {
            let url = (typeFilter === "Todos" ? "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20" : `https://pokeapi.co/api/v2/type/${typeFilter.toLowerCase()}`)

            const result = await api.get(url);

            let pokemonsIds = pokemonsList.map(item => item.id);

            let pokemons: PokemonCardProps[] = [];

            const list = (typeFilter === "Todos" ? result.data.results : result.data.pokemon)

            for await (let item of list) {
                if (pokemons.length <= 19) {
                    const pokeinfo = await api.get(typeFilter === "Todos" ? item.url : item.pokemon.url);

                    pokemons.push({
                        fav: pokemonsIds.includes(pokeinfo.data.id) ? true : false,
                        id: pokeinfo.data.id,
                        name: pokeinfo.data.name.charAt(0).toUpperCase() + pokeinfo.data.name.substr(1),
                        imageurl: pokeinfo.data.sprites.front_default,
                        detalhesurl: "https://pokeapi.co/api/v2/pokemon/" + pokeinfo.data.id,
                        types: pokeinfo.data.types,
                    });
                }
            }

            setPokemons(pokemons);

        } catch (err) {
            console.log("Não encontrado.");
        }
    }

    useEffect(() => {
        findAllPokemon();
    }, [typeFilter])

    useEffect(() => {
        findAllPokemon();
    }, [])

    return (
        <Container>
            <NavBar />
            <Content>
                <div id="filter">
                    <ButtonComponent variant={typeFilter !== "Todos" ? "secondary" : ""} maxWidth="145px" onClick={() => setTypeFilter(ETypePokemon["Todos"])}>Todos</ButtonComponent>
                    <ButtonComponent variant={typeFilter !== "Fire" ? "secondary" : ""} maxWidth="145px" onClick={() => setTypeFilter(ETypePokemon["Fire"])}>Fire</ButtonComponent>
                    <ButtonComponent variant={typeFilter !== "Electric" ? "secondary" : ""} maxWidth="145px" onClick={() => setTypeFilter(ETypePokemon["Electric"])}>Eletric</ButtonComponent>
                    <ButtonComponent variant={typeFilter !== "Water" ? "secondary" : ""} maxWidth="145px" onClick={() => setTypeFilter(ETypePokemon["Water"])}>Water</ButtonComponent>
                </div>
                <div id="pokemon-list">
                    {
                        pokemons.length > 0 && pokemons.map(item => {
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
            </Content>
            <SwitchTheme />
        </Container>
    );
}

export { Todos };