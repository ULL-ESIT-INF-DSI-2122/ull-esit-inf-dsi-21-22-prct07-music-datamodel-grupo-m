import {Artista} from "./artistas";
import {generoInfo} from "./generos";
import { Grupo } from "./grupos";


export class Cancion {
    constructor(private nombre: string, private autor: (Artista | Grupo)[], private duracion: number, private generos: generoInfo[], private single: boolean, private reproducciones: number){
        this.autor = autor;
        this.duracion = duracion;
        this.generos = generos;
        this.nombre = nombre;
        this.reproducciones = reproducciones;
        this.single = single;
    }

    getNombre(): string {
        return this.nombre;
    }

    getAutor(): (Artista | Grupo)[] {
        return this.autor;
    }

    getDuracion(): number {
        return this.duracion;
    }

    getGeneros(): generoInfo[] {
        return this.generos;
    }

    getReproducciones(): number {
        return this.reproducciones;
    }

    getSingle(): boolean {
        return this.single;
    }
}