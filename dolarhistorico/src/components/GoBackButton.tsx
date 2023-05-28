import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, useColorScheme } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../data/colors'

export const GoBackButton: React.FC = () => {
    const navigation = useNavigation()
    const theme = useColorScheme() ?? 'light'

    return (
        <TouchableOpacity
            style={{ paddingLeft: 15 }}
            onPress={() => {
                if (navigation.canGoBack()) navigation.goBack()
            }}
        >
            <Icon
                name="arrow-back-outline"
                size={20}
                color={colors[theme === 'dark' ? 'light' : 'dark'].background1}
            />
        </TouchableOpacity>
    )
}
