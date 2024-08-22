import { ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'
import Icon from "@expo/vector-icons/FontAwesome5";

import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Header from '../components/Pokemon/Header'
import { getPokemonDetailsApi } from '../api/pokemon'
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';

export default function Pokemon({ navigation, route }) {

    const { auth } = useAuth()
    const { params: {id} } = route
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => 
                auth ? <Favorite id={id}/> : null 
            ,
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
    },[navigation, id, auth])

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