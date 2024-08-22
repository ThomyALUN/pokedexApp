import { Pressable, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import useAuth from '../hooks/useAuth'
import NotLogged from '../components/NotLogged'
import PokemonList from '../components/PokemonList'
import { getPokemonsFavoriteApi, getPokemonDetailsByIdApi } from '../api/favorite'

export default function Favorites() {

    const { auth } = useAuth()

    const [favorites, setFavorites] = useState(null)

    const getFavorites = async () => {
        if (!auth) {
            setFavorites([])
            return
        }
        try {
            const response = await getPokemonsFavoriteApi(auth)
            const favoritesArray = []
            for await (const favorite of response.sort((a, b) => a - b)) {
                const pokemonDetails = await getPokemonDetailsByIdApi(favorite)
                favoritesArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    firstType: pokemonDetails.types[0].type.name,
                    secondType: pokemonDetails.types[1] ? pokemonDetails.types[1].type.name : null,
                    order: pokemonDetails.order,
                    front_default_img: pokemonDetails.sprites.front_default,
                    official_artwork_image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }
            setFavorites(favoritesArray)
        } catch (error) {
            setFavorites([])
        }
    }

    useFocusEffect(
        useCallback(() => {
            getFavorites()
    }, [auth]))

    return (
        <SafeAreaView>
            {!auth ? 
                (<NotLogged/>) 
            : 
                (<PokemonList pokemons={favorites} loadPokemons={getFavorites} isNext={null}/>)
            }
        </SafeAreaView>
    )
}