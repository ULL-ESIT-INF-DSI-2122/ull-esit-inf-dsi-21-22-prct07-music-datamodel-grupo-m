import {Playlist} from "./Basic_Class/playlist";
/**
 * Clase Gestora encargada de realizar los diversos métodos para manejar Playlist en nuestro sistema.
 */
class Manage {

  constructor(private playlistArray: Playlist[]) {
    this.playlistArray = playlistArray;
  }

  getPlaylistArray(): Playlist[] {
    return this.playlistArray;
  }

  getIndexOfPlaylist(): number {
    return this.playlistArray.length;
  }

  addPlaylist(newItem: Playlist): void { 
    this.playlistArray.push(newItem);
  }

}