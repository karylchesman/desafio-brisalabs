import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/styled';
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';
import { useNavigate } from 'react-router-dom';
import { PokemonCardProps } from '../components/Card';
import CryptoJS from 'crypto-js';

interface IUser {
    nome: string;
    theme: string;
}

interface ISign {
    user: string;
    pass: string;
}

interface IAppContext {
    user: IUser | null,
    isAuthenticated: boolean;
    theme: Theme,
    signIn: ({ user, pass }: ISign) => Promise<void>;
    logOut: () => void;
    switchThemeFunc: () => void;
    addPokemonToList: (pokemon: PokemonCardProps) => void;
    removePokemonFromList: (pokemon_id: string) => void;
    pokemonsList: PokemonCardProps[];
}

export const AppContext = createContext({} as IAppContext);

export const ContextProvider: React.FC = (props) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null);
    const isAuthenticated = !!user;

    const [theme, setTheme] = useState<Theme>(lightTheme);
    const [pokemonsList, setPokemonList] = useState<PokemonCardProps[]>([])

    async function signIn({ user, pass }: ISign) {

        let token = CryptoJS.AES.encrypt(JSON.stringify({ user: { nome: user } }), process.env.REACT_APP_TOKEN_KEY || "").toString();

        localStorage.setItem("desafio-brisa-token", token);

        setUser({
            nome: user,
            theme: "light"
        });

        navigate("/favoritos");
    }

    function verifySessionExists() {
        const obj_string = localStorage.getItem("desafio-brisa-token");

        if (obj_string !== null && obj_string !== "") {
            let descrypt = CryptoJS.AES.decrypt(obj_string, process.env.REACT_APP_TOKEN_KEY || "");

            let user = JSON.parse(descrypt.toString(CryptoJS.enc.Utf8))

            setUser({ nome: user.nome, theme: user.theme });

            setTheme(user.theme === "light" ? lightTheme : darkTheme);

            navigate("/todos");
        }
    }

    async function logOut() {
        setUser(null);

        localStorage.removeItem("desafio-brisa-token");

        navigate("/");
    }

    function getPokemons(): PokemonCardProps[] {
        const obj_string = localStorage.getItem("pokemons");

        if (obj_string !== null) {
            return JSON.parse(obj_string)
        } else {
            return [];
        }
    }

    function setPokemons(pokemons: PokemonCardProps[]) {
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
    }

    function addPokemonToList(pokemon: PokemonCardProps) {
        // Problema ao separar os iguais dos que devem ficar
        let pokemonAlreadyAdded = pokemonsList.filter(item => {
            if (item.id === pokemon.id) return item;
        });

        if (pokemonAlreadyAdded.length > 0) {
            pokemonAlreadyAdded.map(item => {
                removePokemonFromList(item.id);
            })

            return;
        }

        pokemonsList.push(pokemon);

        setPokemons(pokemonsList);
        loadPokemonList()
    }

    function removePokemonFromList(pokemon_id: string) {

        let pokemons = pokemonsList.filter(item => {
            if (item.id !== pokemon_id) return item;
        });

        setPokemons(pokemons);
        loadPokemonList()
    }

    async function switchThemeFunc() {
        if (theme.name === "light") {

            setTheme(darkTheme);
            if (user !== null) user.theme = "dark";

        } else if (theme.name === "dark") {

            setTheme(lightTheme);
            if (user !== null) user.theme = "light"

        }
    }

    function loadPokemonList() {
        setPokemonList(getPokemons());
    }

    useEffect(() => {
        verifySessionExists();
        loadPokemonList();
    }, [])

    return (
        <AppContext.Provider value={
            {
                user,
                isAuthenticated,
                theme,
                signIn,
                logOut,
                switchThemeFunc,
                addPokemonToList,
                removePokemonFromList,
                pokemonsList
            }
        }>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}
