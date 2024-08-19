import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Stats({stats}) {

    const barStyles = (base_stat) => {
        let color
        if(base_stat < 25) {
            color = 'red'
        } else if(base_stat < 50) {
            color = 'orange'
        } else if(base_stat < 100) {
            color = 'yellow'
        } else {
            color = 'green'
        }
        return {
            width: `${base_stat}%`,
            backgroundColor: color
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Estadísticas base</Text>
            {stats.map(
                (stat, index) => {
                    return (
                        <View key={index} style={styles.block}>
                            <View style={styles.blockTitle}>
                                <Text style={styles.statName}>{stat.stat.name}</Text>
                            </View>
                            <View style={styles.blockInfo}>
                                <Text style={styles.number}>{stat.base_stat}</Text>
                                <View style={styles.bgBar}>
                                    <View style={[styles.bar, barStyles(stat.base_stat)]}/>
                                </View>
                            </View>
                        </View>
                    )
                }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '30%'
    },
    statName: {
        textTransform: 'capitalize',
        fontSize: 12,
        color: '#6b6b6b'
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        width: '12%',
        fontSize: 12,
    },
    bgBar: {
        width: '88%',
        height: 10,
        backgroundColor: '#dedede',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bar: {
        height: 10,
        borderRadius: 20
    }
})