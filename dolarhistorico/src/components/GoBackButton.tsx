import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const GoBackButton: React.FC = () => {
    const navigation = useNavigation()

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
            />
        </TouchableOpacity>
    )
}
