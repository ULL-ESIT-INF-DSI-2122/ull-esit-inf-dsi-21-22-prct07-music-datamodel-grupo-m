import {Genre} from "../Basic_Class/genre";
import {Song} from "../Basic_Class/song";
import {Album} from "../Basic_Class/album";
import {Artist} from "../Basic_Class/artist";
import {Group} from "../Basic_Class/group";
import {Playlist} from "../Basic_Class/playlist";
import { data } from "../data";

/**
 * Clase encargada de definir las diversas colecciones que contiene el sistema.
 */
export class Collection<T> {
  
  /**
   * Constructor por defecto de la clase collection
   * @param list lista de elementos de tipo generico
   */
  private list : T[] = [];
  constructor() {}

  /**
   * Metodo que obtiene la lista de elementos de la collecion
   * @returns devuelve la lista de objetos de la coleccion
   */
  getList() : T[] {
    return this.list;
  }

  /**
   * metodo que añade un nuevo elemento a la lista que define la coleccion
   * @param item elemento de tipo generico que se añade
   */
  addItem(item: T) : void {
    this.list.push(item);
  }

  /**
   * metodo que actualiza el valor de la lista 
   * @param newList nueva lista que sustituira a la anterior
   */
  setList(newList: T[]) : void {
    this.list = newList;
  }
  
  /**
   * metodo que busca un elemento en la lista de colecciones
   * @param item objeto que se desea buscar en la lista
   * @returns devuelve el objeto en caso de encoentrarlo, en caso negativo manda un mensaje 
   */
  searchItem(item: T): T | void {
    const search = this.list.find((element) => element === item);
    return (search) ? search : console.log('No existe');
  }

  /**
   * metodo que obtiene el numero de elementos que conforma la lista
   * @returns devuelve el tamaño de la lista 
   */
  getLenght(): number {
    return this.list.length;
  }

  /**
   * metodo que muestra la coleccion de elementos actuales 
   */
  showCollection(): void {
    this.list.forEach((T) => {
      console.log(T);
    });
  }
}

/**
 * Declaracion de las distintas colecciones que habra en el sistema
 */
export const albumCollection = new Collection<Album>();
export const artistCollection = new Collection<Artist>();
export const groupCollection = new Collection<Group>();
export const genreCollection = new Collection<Genre>();
export const songCollection = new Collection<Song>();
export const playCollection = new Collection<Playlist>();
