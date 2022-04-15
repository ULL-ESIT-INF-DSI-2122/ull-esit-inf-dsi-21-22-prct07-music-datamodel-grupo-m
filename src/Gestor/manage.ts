import {Playlist} from "../Basic_Class/playlist";
import { Song } from "../Basic_Class/song";
import {Collection} from  "./collection";
import { data } from "../data";
/**
 * Clase Gestora encargada de realizar los diversos métodos para manejar Playlist en nuestro sistema.
 */
export class Manage extends Collection<Playlist> {
  /**
   * Constructor de la clase manage que hereda de la clase collection
   * @param listPlaylist  lista de las playlist de nuestro sistema
   */
  constructor(private listPlaylist: Playlist[]) {
    super();
    this.listPlaylist = listPlaylist;
  }
  /**
   * metodo encargado de obtener la listas de palylist del sistema
   * @returns devuelve la lista de playlist que conforman el sistema
   */
  getList() : Playlist[] {
    return this.listPlaylist;
  }
  /**
   * metodo que introduce en la lista de playlist una nueva playlist 
   * @param item nueva playlist que se introduce
   */
  addItem(item: Playlist) : void {
    this.listPlaylist.push(item);
  }

  /**
   * metodo que busca una playlit dentro de la lista de playlists del sistema
   * @param namePlaylist nombre de la playlist que se desea buscar
   * @returns devuelve en caso de que se encuentre el nombre de la playlist
   */
  searchPlaylist(namePlaylist: string): Playlist[] {
    const arrayMatchedPlaylist: Playlist[] = [];
    this.listPlaylist.forEach((element) => {
      if (element.getName().search(namePlaylist) > -1) {
        arrayMatchedPlaylist.push(element);
      }
    });
    return arrayMatchedPlaylist;
  }

  /**
   * Metodo encargado de mostrar las playlist actuales del sistema
   */
  showPlaylist (): void {
    this.listPlaylist.forEach((item) => {
      console.log(item);
    });
  }

  /**
   * metodo que muestra las playlist ordenadas alfabeticamente por titulo de la cancion
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun el titulo de la cancion
   */
  sortSongPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() < b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() > b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }


  /**
   * metodo que muestra las playlist ordenadas alfabeticamente por nombre del grupo/artista
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun el nombre del grupo/artista.
   */
  sortArtistPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() < b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() > b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  /**
   * metodo que muestra las playlist ordenadaspor año de lanzamiento
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun el año de lanzamiento
   */
  sortYeartPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() < b.getCreateYear()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() > b.getCreateYear()) ? -1 : 1);
    }
  }

  /**
   * metodo que muestra las playlist ordenadas por la duracion de las canciones de la playlist
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun la duracion de las canciones de la playlist
   */
  sortDurationPlaylistSong (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() < b.getDurationSong()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() > b.getDurationSong()) ? -1 : 1);
    }
  }

  /**
   * metodo que muestra las playlist ordenadas por el genero de las playlists
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun  el genero de las playlists
   */
  sortGenrePlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() < b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() > b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  /**
   * metodo que muestra las playlist ordenadas por la duracion de la playlist
   * @param selec flag que selecciona si se muestra de forma ascendente o descendente
   * @returns devuelve la lista ordenada segun la duracion de la playlist
   */
  sortDurationPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDuration() < b.getDuration()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDuration() > b.getDuration()) ? -1 : 1);
    }
  } 
  
}
