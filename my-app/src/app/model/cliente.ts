export class Cliente {
    nombre!: string;
    apellido!: string;
    detalleDireccion!: DetalleDireccion;
    foto!: string;
}
export class DetalleDireccion {
    calle!: string;
    ciudad!: string;
    pais!: string;
}