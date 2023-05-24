import { CurrencyScreen, HomeScreen, SearchResultsScreen, SearchScreen, SettingsScreen } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'
import { GoBackButton } from '../components'
import { useColorScheme } from 'react-native'
import { colors } from '../data/colors'

const template = {
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: '#f7f7f7'
}

const HomeStack = createStackNavigator<any>()

export const HomeStackScreen: React.FC = () => {
    const theme = useColorScheme()

    return (
        <HomeStack.Navigator >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    headerStyle: {
                        backgroundColor: colors[theme].background2,
                    },
                    headerTitleStyle: {
                        color: colors[theme].color1
                    }
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

export const SettingsStackScreen: React.FC = () => {
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
