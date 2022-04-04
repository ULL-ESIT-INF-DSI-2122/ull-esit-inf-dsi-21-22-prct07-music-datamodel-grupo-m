import { Cancion } from "./cancion";
import { generoInfo } from "./generos";
/**
 * Clase encargada de definir el funcionamiento de una lista de reproduccion de musica de una plataforma digital.
 */
export class Playlist {
  /**
   * Constructor de la clase Playlist que define el funcionamiento de una lista de reproduccion.
   * @param nombre Nombre de la playlist.
   * @param canciones Canciones incluidas dentro de la playlist.
   * @param duracion duracion total de la playlist en horas y minutos.
   * @param generos generos musicales que se incluyen dentro de la playlist.
   */
    constructor(private nombre: string, private canciones: Cancion[], private duracion: number, private generos: generoInfo[]){
       this.canciones = canciones;
       this.duracion = duracion;
       this.generos = generos;
       this.nombre = nombre; 
    }

    /**
     * Método encargado de obtener la lista de canciones de la playlist.
     * @returns devuelve el atributo asociado a la lista de canciones de la playlist
     */
    getCanciones(): Cancion[] {
      return this.canciones;
    }

    /**
     * Metodo que devuelve la duracion total de la playlist.
     * @returns devuelve la duracion.
     */
    getDuracion(): number {
      return this.duracion;
    }
    /**
     * Metodo que devuelve los generos de las canciones de la playlist.
     * @returns devuelve los generos de la playlist
     */
    getGeneros(): generoInfo[] {
      return this.generos;
    }

    /**
     * Metodo que devuelve el nombre de la playlist
     * @returns devuelve el nombre de la playlist.
     */
    getNombre(): string{
      return this.nombre;
    }
}