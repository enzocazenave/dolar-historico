import { Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'

export const Main: React.FC = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/* TouchableWithoutFeedback is created with the intention of closing the keyboard if you press outside of it. */}
            <View></View>
        </TouchableWithoutFeedback>
    )
}
