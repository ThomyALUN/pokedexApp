import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import getColorByType from '../utils/getColorByType'

export default function PokemonCard({pokemon}) {

    const pokemonColor = getColorByType(pokemon.firstType)
    const bg = {
        backgroundColor: pokemonColor, ...styles.bg
    }

    const goToPokemon = () => {
        console.log(`Go to pokemon ${pokemon.name}`)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bg}>
                        <Text style={styles.number}># {`${pokemon.id}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{ uri: pokemon.official_artwork_image }} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex:1,
        padding: 5,
    },
    bg: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
        textTransform: 'capitalize',
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'white',
        fontSize: 11,
    }
})