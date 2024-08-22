import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function NotLogged() {

    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla debes iniciar sesión</Text>
            <Pressable onPress={() => navigation.navigate('Account')}>
                <Text style={styles.text}>Iniciar sesión</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    }
})