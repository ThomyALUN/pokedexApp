import React ,{ useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import useAuth from '../../hooks/useAuth'
import { countPokemonsFavoriteApi } from '../../api/favorite'

export default function UserData() {

    const { auth, logout } = useAuth()

    const [favCount, setFavCount] = useState(null)

    const getCountPokemonsFavorite = async () => {
        try {
            const count = await countPokemonsFavoriteApi()
            setFavCount(count)
        } catch (error) {
            setFavCount(0)
        }
    }

    useFocusEffect(
        useCallback(() => {
            getCountPokemonsFavorite()
        }, [])
    )
    
    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenida,</Text>
                <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
                <ItemMenu title="Username" text={auth.username} />
                <ItemMenu title="Email" text={auth.email} />
                <ItemMenu title="Total de favoritos" text={favCount} />
            </View>
            <Pressable onPress={logout} style={styles.btnLogout}>
                <Text style={styles.logoutText}>Desconectarse</Text>
            </Pressable>
        </View>
    )
}

function ItemMenu({title, text}){
    return (
        <View style={styles.itemBlock}>
            <Text style={styles.itemTitle}>{title}:</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleBlock: {
        marginBottom: 30
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    dataContent: {
        marginBottom: 20
    },
    itemBlock: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf'
    },
    itemTitle: {
        fontWeight: 'bold',
        paddingRight: 10,
        width: 130
    },
    btnLogout: {
        backgroundColor: '#f00',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})