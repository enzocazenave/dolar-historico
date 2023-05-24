import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface HomeHeaderRightProps {
    onPress: () => void
}

export const HomeHeaderRight: React.FC<HomeHeaderRightProps> = ({ onPress }: HomeHeaderRightProps) => {
    const [disabled, setDisabled] = useState(false)
    const [activeOpacity, setActiveOpacity] = useState(0.5)

    const handleOnPress: () => void = () => {
        if (disabled) return

        setDisabled(true)
        setActiveOpacity(1)
        onPress()
        setTimeout(() => {
            setDisabled(false)
            setActiveOpacity(0.5)
        }, 5000)
    }

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            activeOpacity={activeOpacity}
        >
            <Icon
                name="refresh"
                size={25}
                style={{ paddingHorizontal: 20 }}
            />
        </TouchableOpacity>

    )
}
