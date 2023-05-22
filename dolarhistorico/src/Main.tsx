import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation/Navigation'
import { StatusBar } from 'react-native'

export const Main: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Navigation />
        </NavigationContainer>
    )
}
