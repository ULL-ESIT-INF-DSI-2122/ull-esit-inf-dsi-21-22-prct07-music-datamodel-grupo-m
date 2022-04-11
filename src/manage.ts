import {Playlist} from "./Basic_Class/playlist";
import { Song } from "./Basic_Class/song";
import {Collection} from  "./collection";
import { data } from "./data";
/**
 * Clase Gestora encargada de realizar los diversos métodos para manejar Playlist en nuestro sistema.
 */
export class Manage extends Collection<Playlist> {
  
  constructor(private listPlaylist: Playlist[]) {
    super();
    this.listPlaylist = listPlaylist;
  }

  /*
  Alfabéticamente por título de la canción, ascendente y descendente.
  Alfabéticamente por nombre del grupo/artista, ascendente y descendente.
  Por año de lanzamiento, ascendente y descendente.
  Por duración de la canción, ascendente y descendente.
  Por género musical, ascendente y descendente.
  Por número de reproducciones totales, ascendente y descendente.
  */

  // Visualizar PLaylist Actual y atributos privados
  showPlaylist (): Playlist[] {
    return this.listPlaylist;
  }

  // Navegar una playlist
  sortSongPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() < b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() > b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortArtistPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() < b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() > b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortYeartPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() < b.getCreateYear()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() > b.getCreateYear()) ? -1 : 1);
    }
  }

  sortDurationPlaylistSong (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() < b.getDurationSong()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() > b.getDurationSong()) ? -1 : 1);
    }
  }

  sortGenrePlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() < b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() > b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortDurationPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDuration() < b.getDuration()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDuration() > b.getDuration()) ? -1 : 1);
    }
  }


  // Crear una PLaylist nueva o a partir de una existente ??

  // Borrar y guardar una playlist 

}
