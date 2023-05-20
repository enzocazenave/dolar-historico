export const obtenerElementosSeparados: any = (array: any) => {
    const longitudSeparacion = Math.ceil(array.length / 6)

    if (array.length <= longitudSeparacion) {
        return array
    }

    const elementosSeparados = []
    const indicesDeElementosAMostrar = []
    let indice = 0

    while (elementosSeparados.length < 6) {
        elementosSeparados.push(array[indice])
        indicesDeElementosAMostrar.push(indice)
        indice += longitudSeparacion
    }

    return [elementosSeparados, indicesDeElementosAMostrar]
}
