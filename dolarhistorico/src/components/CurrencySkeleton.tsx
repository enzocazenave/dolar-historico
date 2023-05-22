import { ActivityIndicator, StyleSheet, View, useColorScheme } from 'react-native'

interface Props {
    height?: number
    backgroundColor?: string
    color?: string
    marginVertical?: number
}

export const CurrencySkeleton: React.FC<Props> = ({ height = 74, backgroundColor = '#fff', color = '#000', marginVertical = 0 }: Props) => {
    const theme = useColorScheme()
    const background = backgroundColor === '#fff'
        ? (theme === 'light'
            ? '#fff'
            : '#333'
        )
        : backgroundColor

    return (
        <View style={[styles.container, { height, backgroundColor: background, marginVertical }]}>
            <ActivityIndicator color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        gap: 5,
        justifyContent: 'center'
    }
})
