import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import getColorByType from '../../utils/getColorByType'

export default function Type({types}) {

    return (
        <View style={styles.content}>
            {types.map(
                (type, index) => {
                    const pillStyles = { ...styles.pill, backgroundColor: getColorByType(type.type.name) }
                    return (
                        <View key={index} style={pillStyles}>
                            <Text style={styles.type}>
                                {type.type.name}
                            </Text>
                        </View>
                    )
                }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginHorizontal: 10
    },
    type: {
        color: 'white',
        textTransform: 'capitalize',
        textAlign: 'center'
    }
})