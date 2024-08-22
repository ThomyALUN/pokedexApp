import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonDetailsByIdApi(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonsFavoriteApi() {
    try {
        const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE)
        if (!favorites) return []
        return JSON.parse(favorites || [])
    } catch (error) {
        throw error;
    }
}

export async function countPokemonsFavoriteApi() {
    try {
        const favorites = await getPokemonsFavoriteApi()
        return favorites.length
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonsFavoriteApi()
        return favorites.includes(id)
    } catch (error) {
        throw error;
    }
}

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonsFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonsFavoriteApi()
        const newFavorites = favorites.filter(fav => fav != id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))    
    } catch (error) {
        throw error;
    }
}