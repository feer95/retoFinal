import { User } from "./user";
import { Car } from "./car";
import { Mantenimiento } from "./mantenimiento";

export class Respuesta 
{
    constructor(public error: Boolean,
                public codigo: number,
                public mensaje: string,
                public dataUser: User,
                public dataCar: Car[],
                public dataMant: Mantenimiento[]) {}
}