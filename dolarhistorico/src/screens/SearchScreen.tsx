import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { type RouteProp, useRoute, useNavigation, type NavigationProp } from '@react-navigation/native'

export const SearchScreen: React.FC = () => {
    const [date, setDate] = useState({
        from: new Date(),
        to: new Date()
    })
    const { params } = useRoute<RouteProp<any>>()
    const navigation = useNavigation<NavigationProp<any>>()

    const formatDate = (date: Date, type: 'show' | 'request'): string => {
        return type === 'show'
            ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    const [openFrom, setOpenFrom] = useState(false)
    const [openTo, setOpenTo] = useState(false)

    const condition = formatDate(date.to, 'show') !== formatDate(date.from, 'show')

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { setOpenFrom(true) }}
                style={styles.datePicker}
            >
                <Text style={styles.datePickerText}>Seleccionar fecha desde</Text>
                <Text>{formatDate(date.from, 'show')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { setOpenTo(true) }}
                style={styles.datePicker}
            >
                <Text style={styles.datePickerText}>Seleccionar fecha hasta</Text>
                <Text>{formatDate(date.to, 'show')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={!condition}
                activeOpacity={0.6}
                style={[styles.datePicker, { backgroundColor: '#ddd' }]}
                onPress={() => { navigation.navigate('SearchResultsScreen', { from: formatDate(date.from, 'request'), to: formatDate(date.to, 'request'), name: params?.name }) }}
            >
                <Text style={[styles.textButton, !condition && { color: '#aaa' }]}>Buscar</Text>
            </TouchableOpacity>

            {!condition && <View style={styles.error}><Text style={styles.errorText}>Las fechas de busqueda no pueden ser iguales</Text></View>}

            <DatePicker
                modal
                open={openFrom}
                date={date.from}
                onConfirm={(date) => {
                    setOpenFrom(false)
                    setDate((prev) => ({ ...prev, from: date }))
                }}
                onCancel={() => {
                    setOpenFrom(false)
                }}
                locale='es-ES'
                title="Seleccionar desde"
                confirmText='Confirmar'
                cancelText='Cancelar'
                mode="date"
                maximumDate={date.to}
            />
            <DatePicker
                modal
                open={openTo}
                date={date.to}
                onConfirm={(date) => {
                    setOpenTo(false)
                    setDate((prev) => ({ ...prev, to: date }))
                }}
                onCancel={() => {
                    setOpenTo(false)
                }}
                locale='es-ES'
                title="Seleccionar hasta"
                confirmText='Confirmar'
                cancelText='Cancelar'
                mode="date"
                maximumDate={new Date()}
                minimumDate={date.from}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10
    },
    datePicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    datePickerText: {
        fontWeight: '500'
    },
    textButton: {
        fontSize: 16,
        textAlign: 'center',
        flex: 1,
        fontWeight: '500'
    },
    error: {
        padding: 10,
        backgroundColor: '#rgba(255, 0, 0, 0.32)',
        borderRadius: 10
    },
    errorText: {
        color: '#f00',
        textAlign: 'center'
    }
})
