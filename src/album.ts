import { Artista } from "./artistas";
import {Genero, generoInfo} from "./generos";
import { Cancion } from "./cancion";

/**
 * Clase encargada de representar un album, es decir, la informacion relativa a un disco musical.
 */
export class Album {
    /**
     * Constructor de la clase Album.
     * @param nombre Nombre del album.
     * @param artista Artista u grupo que ha publicado el album.
     * @param añoPubli El año en el que se ha publicado el album.
     * @param genero Genero musical del album.
     * @param canciones Lista de canciones dentro del album.
     */
    // private artista: Artista[] = [];
    constructor(private nombre: string, private artista: string[], private añoPubli: number, private genero: generoInfo[], private canciones: Cancion[]) {
        this.nombre = nombre;
        this.añoPubli = añoPubli;
        this.genero = genero;
        this.canciones = canciones;
    }

    /**
     * metodo que devuelve el nombre del album
     * @returns devuelve el nombre del album
     */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * metodo que obtiene el atributo privado del año de publicacion
     * @returns devuelve el año de lanzamiento del album
     */
    getAño(): number {
        return this.añoPubli;
    }

    /**
     * metodo que obtiene el genero musical del album
     * @returns devuelve el genero en el que se encuentra el album.
     */
    getGenero(): generoInfo[] {
        return this.genero;
    }

    /**
     * metodo que devuelve una lista de canciones dentro del album.
     * @returns devuelve la lista de canciones que contiene el album.
     */
    getTracklist(): Cancion[] {
        return this.canciones;
    }
}