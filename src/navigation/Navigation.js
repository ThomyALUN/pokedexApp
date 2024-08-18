import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import pokeball from "../assets/pokeball.png";
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import RenderIcon from "../components/RenderIcon";
import FavoriteNavigation from "./FavoriteNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="FavoriteNavigation" component={FavoriteNavigation} 
                options={
                    {
                        tabBarLabel: 'Favoritos',
                        tabBarIcon: ( {color, size} ) => (
                            <Icon name="star" size={size} color={color} />
                        ),
                        headerShown: false
                    }
            }/>
            <Tab.Screen name="PokedexNavigation" component={PokedexNavigation} 
                options={
                    {
                        tabBarLabel: '',
                        tabBarIcon: () => (
                            <RenderIcon sourceFile={pokeball} style={styles.pokeball}/>
                        ),
                        headerShown: false
                    }
                }
            />
            <Tab.Screen name="AccountNavigation" component={AccountNavigation} 
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