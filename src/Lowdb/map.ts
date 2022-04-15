import {Genre} from "../Basic_Class/genre";
import {Song} from "../Basic_Class/song";
import {Album} from "../Basic_Class/album";
import {Artist} from "../Basic_Class/artist";
import {Group} from "../Basic_Class/group";
import {Playlist} from "../Basic_Class/playlist";
import {Collection} from '../Gestor/collection';

/**
 * LowDB no logramos que Funciones pero esta seria la clase que representa las colecciones del sistema
 */
export class MapCollection {

  /**
   * contructor de la clase que deberia de definir y cargar las colecciones de la base de datos
   * @param songsMap 
   */
  protected songsMap: Map<number, Song>
  constructor(){
    this.songsMap = new Map<number,Song>();
  }
  /**
   * metodo que deberia permitir añadir una nueva cancion a la base de datos.
   * @param newSong 
   */
  addSong(newSong: Song) {
    this.songsMap.set(newSong.getId(), newSong);
  }

}