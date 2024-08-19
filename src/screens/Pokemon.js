import { ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'
import Icon from "@expo/vector-icons/FontAwesome5";

import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Header from '../components/Pokemon/Header'
import { getPokemonDetailsApi } from '../api/pokemon'

export default function Pokemon({ navigation, route }) {

    const { params: {id} } = route
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon 
                    name="heart" 
                    color="#fff" 
                    size={20}
                    style={{marginRight: 10}}
                    onPress={() => alert('Favorito')}
                />
            ),
            headerLeft: () => (
                <Icon 
                    name="arrow-left" 
                    color="#fff" 
                    size={20}
                    style={{marginLeft: 10}}
                    onPress={() => navigation.goBack()}
                />
            )
        }) 
    },[navigation, id])

    useEffect(() => {
        (
            async ()=>{
                try {
                    const response = await getPokemonDetailsApi(id)
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
            <Type types={pokemon.types}/>
            <Stats  stats={pokemon.stats}/>
        </ScrollView>
    )
}