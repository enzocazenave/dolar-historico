import { Button, Text, View } from 'react-native'
import { CurrencyScreen, HomeScreen, SearchResultsScreen, SearchScreen, SettingsScreen } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GoBackButton } from '../components'

interface tabBarIconParameters {
    focused: boolean
    size: number
}

const template = {
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: '#f7f7f7'
}

const HomeStack = createStackNavigator<any>()

const HomeStackScreen: React.FC = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                gestureEnabled: false
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio'
                }}
            />
            <HomeStack.Screen
                name="Currency"
                component={CurrencyScreen}
                options={{
                    headerLeft: GoBackButton
                }}
            />
            <HomeStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: 'Buscar cotización por fecha',
                    headerLeft: GoBackButton
                }}
            />
            <HomeStack.Screen
                name="SearchResultsScreen"
                component={SearchResultsScreen}
                options={{
                    title: 'Resultados de busqueda',
                    headerLeft: GoBackButton
                }}
            />
        </HomeStack.Navigator>
    )
}

const SettingsStack = createStackNavigator()

const SettingsStackScreen: React.FC = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                gestureEnabled: false
            }}
        >
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Ajustes'
                }}
            />
        </SettingsStack.Navigator>
    )
}

export const tabItemConfigs = [
    {
        name: 'HomeStack',
        component: HomeStackScreen,
        options: {
            tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                <Icon name={focused ? 'home' : 'home-outline'} size={size} />
            ),
            ...template
        }
    },
    {
        name: 'SettingsStack',
        component: SettingsStackScreen,

        options: {
            tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                <Icon name={focused ? 'settings' : 'settings-outline'} size={size} />
            ),
            ...template
        }
    }
]
