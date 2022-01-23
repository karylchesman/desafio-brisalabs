import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/ContextProvider';
import { api } from '../services/api';

import { Container } from '../styles/components/DetailsModal';
import { ITypePokemon } from './Card';

import favIcon2 from '../assets/fav.png';

import { captalizeString } from '../services/stringFormatter';
import { RangeBarComponent } from './RangeBarComponent';
import ButtonComponent from './ButtonComponent';

interface DetailsModalProps {
    onhide: () => void;
    show: boolean;
    pokemonurl: string;
    favoriteFunction: () => void;
}

interface IPokemonStats {
    hp: number;
    atk: number;
    def: number;
    satk: number;
    sdef: number;
    spd: number;
}

interface IPokemonInfo {
    fav: boolean;
    id: string;
    name: string;
    image_front: string;
    image_back: string;
    height: number;
    weight: number;
    types: ITypePokemon[];
    stats: IPokemonStats;
}

const DetailsModal = ({ onhide, show, pokemonurl, favoriteFunction }: DetailsModalProps) => {

    const { theme, logOut, pokemonsList, addPokemonToList } = useContext(AppContext);
    const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo | null>(null);

    async function getPokemonInfo() {
        try {
            const result = await api.get(pokemonurl);

            let pokemonsIds = pokemonsList.map(item => item.id)

            let stats = {
                hp: result.data.stats[0].base_stat,
                atk: result.data.stats[1].base_stat,
                def: result.data.stats[2].base_stat,
                satk: result.data.stats[3].base_stat,
                sdef: result.data.stats[4].base_stat,
                spd: result.data.stats[5].base_stat
            }


            setPokemonInfo({
                fav: pokemonsIds.includes(result.data.id) ? true : false,
                id: result.data.id,
                name: result.data.name.charAt(0).toUpperCase() + result.data.name.substr(1),
                image_front: result.data.sprites.front_default,
                image_back: result.data.sprites.back_default,
                height: result.data.height,
                weight: result.data.weight,
                types: result.data.types,
                stats
            })
        } catch (err) {
            console.log("Falha ao coletar informações do pokemon.");
        }
    }

    function favoritePokemon() {
        if (pokemonInfo !== null) {
            let fav = pokemonInfo.fav ? false : true

            pokemonInfo.fav = fav

            favoriteFunction()
        }
    }

    useEffect(() => {
        getPokemonInfo();
    }, []);

    return (
        <Container>
            <div id="modal-content">
                {
                    pokemonInfo !== null ?
                        <>
                            <div id="close-button" >
                                <span>Detalhes</span>
                                <a onClick={() => onhide()}><img src={theme.detailsModal.closeIcon} alt="Botão Fechar" /></a>
                            </div>

                            <div className="name">
                                {
                                    pokemonInfo.name
                                }
                            </div>

                            <div className="images">
                                <img src={pokemonInfo.image_front} alt="Imagem pokemon frente" />
                                <img src={pokemonInfo.image_back} alt="Imagem pokemon atrás" />
                            </div>

                            <div className="properties">
                                <div className="height">
                                    {
                                        pokemonInfo.height / 10
                                    }
                                    m
                                </div>

                                <div className="weight">
                                    {
                                        pokemonInfo.weight / 10
                                    }
                                    Kg
                                </div>
                            </div>

                            <div className="modal-types">
                                {pokemonInfo.types.map(item => {
                                    if (item.type.name === "electric") return <div className="badge-eletric">{captalizeString(item.type.name)}</div>
                                    if (item.type.name === "fire") return <div className="badge-fire">{captalizeString(item.type.name)}</div>
                                    if (item.type.name === "water") return <div className="badge-water">{captalizeString(item.type.name)}</div>

                                    return <div className="badge-eletric">{captalizeString(item.type.name)}</div>
                                })}
                            </div>

                            <div className="stats">
                                <div className="estatisticas">
                                    Estatisticas
                                </div>
                                <div className="hp">
                                    <span>HP</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.hp) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.hp}</span>
                                </div>
                                <div className="atk">
                                    <span>ATK</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.atk) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.atk}</span>
                                </div>
                                <div className="def">
                                    <span>DEF</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.def) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.def}</span>
                                </div>
                                <div className="satk">
                                    <span>S.ATK</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.satk) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.satk}</span>
                                </div>
                                <div className="sdef">
                                    <span>S.DEF</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.sdef) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.sdef}</span>
                                </div>
                                <div className="spd">
                                    <span>SPD</span>
                                    <RangeBarComponent className="range-bar" width={String(pokemonInfo.stats.spd) + "%"} />
                                    <span className={!pokemonInfo.fav ? "stat-number-fav" : "stat-number"}>{pokemonInfo.stats.spd}</span>
                                </div>
                            </div>

                            <div className="fav-button">
                                {
                                    pokemonInfo.fav === false ?
                                        <ButtonComponent maxHeight="46px" onClick={() => favoritePokemon()}><img src={favIcon2} alt="fav" />&nbsp;Adicionar aos favoritos</ButtonComponent>
                                        :
                                        <ButtonComponent maxHeight="46px" variant="danger" onClick={() => favoritePokemon()}>Remover dos favoritos</ButtonComponent>
                                }

                            </div>
                        </>
                        :

                        <>
                            Carregando...
                        </>
                }
            </div>
        </Container>
    );
}

export { DetailsModal };