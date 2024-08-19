import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import PokemonList from '../components/PokemonList'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'


export default function Pokedex() {
    
    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    useEffect(() => {
        // Función anónima autoejecutable -> Soluciona el problema de que la función de callback del useEffect no pueda ser declarada async
        (async () => {
            await loadPokemons()
        })()
    }, [])


    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            const pokemonsArray=[];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    firstType: pokemonDetails.types[0].type.name,
                    secondType: pokemonDetails.types[1] ? pokemonDetails.types[1].type.name : null,
                    order: pokemonDetails.order,
                    front_default_img: pokemonDetails.sprites.front_default,
                    official_artwork_image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }
            setNextUrl(response.next)
            setPokemons([...pokemons,...pokemonsArray])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
        </SafeAreaView>
    )
}