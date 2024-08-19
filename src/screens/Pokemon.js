import { ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'

import Header from '../components/Pokemon/Header'
import { getPokemonDetailsApi } from '../api/pokemon'

export default function Pokemon({ navigation, route }) {

    const { params: {id} } = route
    const [pokemon, setPokemon] = useState(null)

    console.log(id)

    useEffect(() => {
        (
            async ()=>{
                try {
                    const response = await getPokemonDetailsApi(id)
                    console.log(response)
                    setPokemon(response)
                } catch (error) {
                    navigation.goBack();
                }
            }
        )()
    },[id])

    if(!pokemon) {
        return null
    }

    return (
        <ScrollView>
            <Header 
                name={pokemon.name} 
                id={pokemon.id} 
                firstType={pokemon.types[0].type.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
            />
        </ScrollView>
    )
}