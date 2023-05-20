import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tabItemConfigs } from './tabItemConfigs'

const BottomTab = createBottomTabNavigator()

export const Navigation: React.FC = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            {tabItemConfigs.map((tabItem, index) => (
                <BottomTab.Screen
                    key={index}
                    {...tabItem}
                />
            ))}
        </BottomTab.Navigator>
    )
}
