import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const CurrencySkeleton: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={'#000'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 74,
        backgroundColor: '#fff',
        borderRadius: 10,
        gap: 5,
        justifyContent: 'center'
    }
})
