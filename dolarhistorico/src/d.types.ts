export interface Currency {
    nombre: string
    compra: string
    venta: string
    fecha: string
    variacion: string
    'class-variacion': 'up' | 'down' | 'equal'
    classVariacion: 'up' | 'down' | 'equal'
    valor_cierre_ant: string
    valorCierreAnterior: string
    valor?: string
    'data-valor-descripcion'?: string
    maximo: string
    fecha_maximo: string
    fechaMaximo: string
    minimo: string
    fecha_minimo: string

}
