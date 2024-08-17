import { Image, StyleSheet } from 'react-native'

export default function RenderIcon({sourceFile, style=styles.icon}) {
    return (
        <Image 
            source={sourceFile}
            style={style}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})