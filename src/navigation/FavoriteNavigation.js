import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Pokemon from '../screens/Pokemon'
import Favorites from '../screens/Favorites'

const Stack = createNativeStackNavigator()

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    title: 'Favoritos'
                }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{
                    title: '',
                    headerShown: true,
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}