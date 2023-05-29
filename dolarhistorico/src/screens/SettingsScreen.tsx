import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { colors } from '../data/colors'

export const SettingsScreen: React.FC = () => {
    const theme = useColorScheme() ?? 'light'

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].background1 }]}>
            <Text>
                Settings
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
