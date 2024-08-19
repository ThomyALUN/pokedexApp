import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import getColorByType from '../../utils/getColorByType'

export default function Header({name, id, firstType, image}) {

	const color = getColorByType(firstType)
	const bgStyles = { backgroundColor: color, ...styles.bg }

	return (
		<>
			<View style={bgStyles}/>
			<SafeAreaView style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.name}>
						{name}
					</Text>
					<Text style={styles.id}>
						#{`${id}`.padStart(3, 0)}
					</Text>
				</View>
				<View style={styles.contentImg}>
					<Image source={{uri: image}} style={styles.image}/>
				</View>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	bg: {
		width: '100%',
		height: 400,
		position: 'absolute',
		borderBottomEndRadius: 300,
		borderBottomStartRadius: 300,
		transform: [
			{ scaleX: 2 }
		]
	},
	content:{
		marginHorizontal: 20,
		marginTop: 30
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 40,
	},
	name:{
		color: 'white',
		fontSize: 27,
		fontWeight: 'bold',
		textTransform: 'capitalize'
	},
	id: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	contentImg: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		top: 10,
	},
	image: {
		width: 250,
		height: 300,
		resizeMode: 'contain',
	}
})