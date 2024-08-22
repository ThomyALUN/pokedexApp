import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "@expo/vector-icons/FontAwesome5";

import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

export default function Favorite({id}) {

    const [isFavorite, setIsFavorite] = useState(null)

    useEffect(() => {
        const getFavorite = async () => {
            try {
                const response = await isPokemonFavoriteApi(id)
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        }
        getFavorite()
    }, [id])

    const handleFavorite = async () => {
        isFavorite ? await removePokemonFavoriteApi(id) : await addPokemonFavoriteApi(id)
        setIsFavorite(!isFavorite)
    }

    if (isFavorite === null) return null

    return (
        <Icon 
            name="heart" 
            solid={isFavorite}
            color="#fff" size={20} 
            style={{marginRight: 20}} 
            onPress={ handleFavorite } 
        />
    )
}