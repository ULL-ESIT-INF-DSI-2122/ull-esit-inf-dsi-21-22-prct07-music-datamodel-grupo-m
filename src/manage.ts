import {Playlist} from "./playlist";

/**
 * Clase Gestora encargada de realizar los diversos métodos para manejar Playlist en nuestro sistema.
 */
class Manage {
  /**
   * Constructor de la clase Gestora
   * @param playlistArray Un vector que almacenara todas las playlist que hay en nuestro sistema
   */
  constructor(private playlistArray: Playlist[]) {
    this.playlistArray = playlistArray;
  }
  /**
   * Método encargado de obtener todas las playlist de nuestro sistema
   * @returns Todas las Playlis de nuestor sistema
   */
  getPlaylistArray(): Playlist[] {
    return this.playlistArray;
  }

  /**
   * Método que devuelve el numero de elementos que tiene la Playlist.
   * @returns Devuelve el número de playlist que hay dentro de la clase gestora.
   */
  getIndexOfPlaylist(): number {
    return this.playlistArray.length;
  }
}