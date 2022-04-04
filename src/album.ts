import { Artista } from "./artistas";
import {Genero, generoInfo} from "./generos";
import { Cancion } from "./cancion";

export class Album {
    // private artista: Artista[] = [];
    constructor(private nombre: string, private artista: string[], private añoPubli: number, private genero: generoInfo[], private canciones: Cancion[]) {
        this.nombre = nombre;
        this.añoPubli = añoPubli;
        this.genero = genero;
        this.canciones = canciones;
    }

    getNombre(): string {
        return this.nombre;
    }

    getAño(): number {
        return this.añoPubli;
    }

    getGenero(): generoInfo[] {
        return this.genero;
    }

    getTracklist(): Cancion[] {
        return this.canciones;
    }
}