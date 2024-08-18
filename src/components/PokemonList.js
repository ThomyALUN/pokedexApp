import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons, loadPokemons, isNext}) {
    console.log(pokemons)

    const loadMorePokemons = () => {
        loadPokemons()
    }

    return (
        <FlatList 
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={pokemon => pokemon.id}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMorePokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isNext && <ActivityIndicator size="large" color="#AEAEAE" style={styles.spinner}/>}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner:{
        marginTop: 20,
        marginBottom: 60
    }
})