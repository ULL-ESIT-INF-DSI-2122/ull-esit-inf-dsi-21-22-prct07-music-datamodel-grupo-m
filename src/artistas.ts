import { Album } from "./album";
import { Cancion } from "./cancion";
import { generoInfo } from "./generos";
import {Grupo} from "./grupos";
/**
 * Clase encargada de especificar a los diferentes musicos u artistas que forman parte de grupos o tienen carreras en solitario.
 */
export class Artista {
  
  private grupos: Grupo[] = [];
  private canciones: Cancion[] = [];
  /**
   * Constructor de la entidad Artistas del sistema.
   * @param nombre nombre del artista.
   * @param generos generos en los que suele trabajar el artista
   * @param albumes albumes que ha publicado un artista
   * @param oyentesIndi cantidad de oyentes mensuales que tiene un artista en especifico.
   * @param oyentesMensual Cantidad de oyentes mensuales de un grupo, en caso de ser una carrera solitaria es igual a los oyentes individuales.
   */
  constructor(private nombre: string, private generos: generoInfo[], private albumes: Album[], private oyentesIndi: number, private oyentesMensual: number) {
    this.nombre = nombre;
    this.generos = generos;
    this.albumes = albumes;
    this.oyentesIndi = oyentesIndi;
    this.oyentesMensual = this.calOyentes();
  }
  
  /**
   * metodo encargado de devolver el nombre del artista
   * @returns devuelve el nombre del artista
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * metodo encargada de mostrar los grupos a los que pertenece el artista.
   * @returns devuelve lso grupos en los que se encuentra el artista.
   */
  getGrupos(): Grupo[]{
    return this.grupos;
  }

  /**
   * metodo que devuelve los generos musicales relacionados
   * @returns devuelve el genero musical relacionado a ese artista.
   */
  getGeneros(): generoInfo[] {
    return this.generos;
  }

  /**
   * metodo que devuelve los albumes lanzados por el artista
   * @returns el album lanzado por el artista
   */
  getAlbumes(): Album[] {
    return this.albumes;
  }

  /**
   * Metodo encargado de devolver todas las canciones que tiene un artista
   * @returns devuelve las canciones que ha lanzado el artista.
   */
  getCanciones(): Cancion[] {
    return this.canciones;
  }

  /**
   * metodo que visualiza la cantidad de oyentes mensuales que tiene un artista
   * @returns devuelve la cantidad numerica de oyentes mensuales de un artista.
   */
  getOyentesMensual():number {
    return this.oyentesMensual;
  }

  /**
   * Funcion que calcula la cantidad de oyentes mensuales totales en base al trabajo individual
   * @returns devuelve la suma del trabajo individual mas la cantidad de oyentes mensuales.
   */
  public calOyentes(): number {
    let resultado: number =0;
    for (let i : number = 0; i < this.grupos.length; i++) {
      if (this.grupos[i].getNombre() == " ") {
        resultado = this.oyentesIndi;
      } else {
        resultado += this.oyentesIndi + this.grupos[i].getOyentes();
      }
    }
    return resultado;
  }
}
