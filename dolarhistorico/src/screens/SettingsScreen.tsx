import { Linking, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { colors } from '../data/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export const SettingsScreen: React.FC = () => {
    const theme = useColorScheme() ?? 'light'

    const navigateToGithub: () => void = () => {
        const url = 'https://github.com/enzocazenave'

        void Linking.canOpenURL(url).then(supported => {
            if (supported) void Linking.openURL(url)
        })
    }

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].background1 }]}>
            <View style={[styles.copyrights, { backgroundColor: colors[theme].background2 }]}>
                <Text style={{ color: colors[theme].color1 }}>
                    Aplicación desarrollada con fines de aprendizaje y basada en <Text style={{ color: theme === 'dark' ? '#9f9' : '#00f' }}>Ámbito Dólar</Text>, que es otra aplicación que se utiliza para visualizar las cotizaciones del dólar.
                </Text>
            </View>
            <TouchableOpacity
                style={[styles.copyrights, { backgroundColor: colors[theme].background2 }]}
                onPress={navigateToGithub}
            >
                <Text style={{ color: colors[theme].color1 }}>
                    Desarrollador: <Text style={{ color: theme === 'dark' ? '#9f9' : '#00f' }}>Enzo Cazenave</Text>
                </Text>
                <Icon
                    name="chevron-forward-outline"
                    size={20}
                    color="#aaa"
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        gap: 20
    },
    copyrights: {
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
