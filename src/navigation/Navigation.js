import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import pokeball from "../assets/pokeball.png";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorite from "../screens/Favorite";
import RenderIcon from "../components/RenderIcon";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={Favorite} 
                options={
                    {
                        tabBarLabel: 'Favoritos',
                        tabBarIcon: ( {color, size} ) => (
                            <Icon name="star" size={size} color={color} />
                        )
                    }
            }/>
            <Tab.Screen name="Pokedex" component={Pokedex} 
                options={
                    {
                        tabBarLabel: '',
                        tabBarIcon: () => (
                            <RenderIcon sourceFile={pokeball} style={styles.pokeball}/>
                        )
                    }
                }
            />
            <Tab.Screen name="Account" component={Account} 
                options={
                    {
                        tabBarLabel: 'Mi cuenta',
                        tabBarIcon: ( { color, size } ) => (
                            <Icon name="user" size={size} color={color} />
                        )
                    }
                }
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    pokeball: {
        width: 75,
        height: 75,
        top: -15
    }
})