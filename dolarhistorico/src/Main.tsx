import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation/Navigation'

export const Main: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}
