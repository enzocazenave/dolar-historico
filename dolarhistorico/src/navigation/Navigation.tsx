import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackScreen, SettingsStackScreen } from './tabItemConfigs'
import { useColorScheme } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../data/colors'

const BottomTab = createBottomTabNavigator()

interface tabBarIconParameters {
    focused: boolean
    size: number
}

export const Navigation: React.FC = () => {
    const theme = useColorScheme() ?? 'light'

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors[theme].background2, borderTopColor: 'rgba(0,0,0,0.0)' }
            }}>
            <BottomTab.Screen
                name='HomeStack'
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                        <Icon name={focused ? 'home' : 'home-outline'} size={size} color={colors[theme].color1} />
                    ),
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: colors[theme].background1
                }}
            />
            <BottomTab.Screen
                name='SettingsStack'
                component={SettingsStackScreen}
                options={{
                    tabBarIcon: ({ focused, size }: tabBarIconParameters) => (
                        <Icon name={focused ? 'settings' : 'settings-outline'} size={size} color={colors[theme].color1} />
                    ),
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: colors[theme].background1
                }}
            />
        </BottomTab.Navigator>
    )
}
