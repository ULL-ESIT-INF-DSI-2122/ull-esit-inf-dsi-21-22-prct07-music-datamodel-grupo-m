import {Album} from "./album";
import {Genero, generoInfo} from "./generos";
import {Artista} from "./artistas";
/**
 * Clase encargada de implementar la entidad de un grupo, asociacion de diversos artistas.
 */
export class Grupo {
  private albumes: Album[] = [];
  /**
   * Constructor de la clase Grupo
   * @param nombre nombre del grupo
   * @param artistas artistas que conforman el grupo
   * @param añoCreacion año de creacion del grupo
   * @param genero genero en el que se encasilla un grupo
   * @param oyentes cantidad de oyentes mensuales que tiene un grupo
   */
  constructor(private nombre: string, private artistas: Artista[], private añoCreacion: number, private genero: generoInfo[], private oyentes: number){
      this.nombre = nombre;
      this.artistas = artistas;
      this.añoCreacion = añoCreacion;
      this.genero = genero;
      this.oyentes = oyentes;
  }

    /**
   * metodo encargado de obtener el nombre del grupo
   * @returns devuelve el nombre del grupo
   */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * metodo que obtiene los artistas que conforman el grupo
     * @returns devuelve los artistas que conforman el grupo
     */
    getArtistas(): Artista[] {
        return this.artistas;
    }

    /**
     * Metodo que obtiene el año de creacion del grupo
     * @returns devuelve el año en el que se creo el grupo.
     */
    getAñoCreacion(): number {
        return this.añoCreacion;
    }

    /**
     * metodo que obtiene el genero en el que trabaja un grupo
     * @returns devuelve el genero en el que se engloba al grupo
     */
    getGenero(): generoInfo[] {
        return this.genero;
    }

    /**
     * metodo que obtiene los albumes que ha lanzado el grupo
     * @returns devuelve los albumnes que ha lanzado el grupo.
     */
    getAlbumes(): Album[] {
        return this.albumes;
    }

    /**
     * metodo que obtiene la cantida de oyentes mensuales del grupo
     * @returns devuelve la cantidad de oyentes mensuales del grupo.
     */
    getOyentes(): number {
        return this.oyentes;
    }

}