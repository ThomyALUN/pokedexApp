import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons, loadPokemons, isNext}) {

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
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (<ActivityIndicator size="large" color="#AEAEAE" style={styles.spinner}/>)}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    spinner:{
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60
    }
})