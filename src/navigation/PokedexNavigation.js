import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function PokedexNavigation() {
    return (
        <Stack.Navigator initialRouteName='Pokedex'>
            <Stack.Screen
                name="Pokedex"
                component={Pokedex}
                options={{
                    title: '',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{
                    title: 'Pokemon'
                }}
            />
        </Stack.Navigator>
    )
}