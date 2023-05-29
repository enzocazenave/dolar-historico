import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation/Navigation'
import { StatusBar, useColorScheme } from 'react-native'

export const App: React.FC = () => {
    const theme = useColorScheme()
    const barStyle = theme === 'dark' ? 'light-content' : 'dark-content'

    return (
        <NavigationContainer>
            <StatusBar barStyle={barStyle} />
            <Navigation />
        </NavigationContainer>
    )
}
