import {Album} from "./album";
import {Cancion} from "./cancion";
import {Artista} from "./artistas";
import {Grupo} from "./grupos";
/**
 * Objeto generoInfo que define los diferentes generos reconocidos dentro del sistema.
 */
export type generoInfo = 'CLASICA'| 'ROCK'| 'HIP-HOP' | 'REGGEATON' | 'POP' | 'TRAP' | 'PUNK' | 'K-POP' | 'METAL' | 'CUMBIA' | 'BLUES' | 'JAZZ'| 'COUNTRY' | 'EDM' | 'FLAMENCO' | 'SALSA' | 'REGGAE' | 'GOSPEL' | 'DISCO' | 'BANDA SONORA' ;

/**
 * Clase encargada de implementar un genero musical dentro del sistema.
 */
export class Genero {
    /**
     * Constructor de la clase encargada de implementar el genero musical.
     * @param nombre nombre del genero.
     * @param artistas artistas que hay dentro de un genero.
     * @param albumes albumes que hay dentro de un genero.
     * @param canciones canciones que hay dentro de un genero determinado.
     */
    constructor(private nombre: generoInfo, private artistas: (Artista | Grupo)[], private albumes: Album[], private canciones: Cancion[]) {
        this.nombre = nombre;
        this.artistas = artistas;
        this.albumes = albumes;
        this.canciones = canciones;
    }

    /**
     * Metodo que obtiene el nombre del genero.
     * @returns devuelve el nombre de un genero musical.
     */
    getNombre(): generoInfo {
        return this.nombre;
    }

    /**
     * Metodo que devuelve todos los artistas dentro del genero.
     * @returns devuelve los artistas que estan englobados dentro de un genero.
     */
    getArtistas(): (Artista | Grupo)[] {
        return this.artistas;
    }

    /**
     * metodo que devuelve los albumes que hay dentro de un genero.
     * @returns devuelve los albumes de un genero.
     */
    getAlbumes():Album[] {
        return this.albumes;
    }
    
    /**
     * metodos que obtiene las canciones que hay dentro de un genero.
     * @returns devuelve la lsita de canciones de un genero determinado.
     */
    getCanciones(): Cancion[] {
        return this.canciones;
    }
}