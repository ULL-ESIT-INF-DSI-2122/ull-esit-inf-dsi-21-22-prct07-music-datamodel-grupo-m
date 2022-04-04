import {Artista} from "./artistas";
import {generoInfo} from "./generos";
import { Grupo } from "./grupos";

/**
 * Clase encargada de representar la cancion que ha publicado un artista y que se encuentra en un Album.
 */
export class Cancion {
    /**
     * Constructor de uya cancion del sistema.
     * @param nombre titulo de la cancion.
     * @param autor autor de la cancion.
     * @param duracion tiempo de duracion de la cancion musical.
     * @param generos genero en el que se engloba la cancion
     * @param single flag que determina si fue un single o es lanzado en un album
     * @param reproducciones numero total de reproducciones de esta cancion
     */
    constructor(private nombre: string, private autor: (Artista | Grupo)[], private duracion: number, private generos: generoInfo[], private single: boolean, private reproducciones: number){
        this.autor = autor;
        this.duracion = duracion;
        this.generos = generos;
        this.nombre = nombre;
        this.reproducciones = reproducciones;
        this.single = single;
    }
    
    /**
     * metodo encargado de obtener el titulo de una cancion
     * @returns devuelve el titulo de una cancion
     */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * Metodo que obtiene el autor de la cancion ya sea un artista o un grupo
     * @returns devuelve un array de artistas o de grupos que ha realizado la cancion
     */
    getAutor(): (Artista | Grupo)[] {
        return this.autor;
    }

    /**
     * Metodo que obtiene la duracion de la cancion
     * @returns devuelve la duracion total de la cancion.
     */
    getDuracion(): number {
        return this.duracion;
    }

    /**
     * metodo que obtiene el atributo encargado de definir el genero de una cancion
     * @returns devuelve el genero en el que se engloba una cancion.
     */
    getGeneros(): generoInfo[] {
        return this.generos;
    }

    /**
     * metodo que obtiene el numero total de reproducciones de una cancion
     * @returns 
     */
    getReproducciones(): number {
        return this.reproducciones;
    }

    /**
     * metodo encargado de determinar si fue un single o no.
     * @returns devuelve un flag que determina si es un single (true) o no (false).
     */
    getSingle(): boolean {
        return this.single;
    }
}