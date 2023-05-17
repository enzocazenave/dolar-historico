import { HomeScreen, SettingsScreen } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'

interface tabBarIconParameters {
    focused: boolean
    size: number
}

const template = {
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: '#f7f7f7'
}

export const tabItemConfigs = [
    {
        name: 'Home',
        component: HomeScreen,
        options: {
            tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                <Icon name={focused ? 'home' : 'home-outline'} size={size} />
            ),
            title: 'Inicio',
            ...template
        }
    },
    {
        name: 'Settings',
        component: HomeScreen,
        options: {
            tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                <Icon name={focused ? 'settings' : 'settings-outline'} size={size} />
            ),
            title: 'Configuración',
            ...template
        }
    }
]
