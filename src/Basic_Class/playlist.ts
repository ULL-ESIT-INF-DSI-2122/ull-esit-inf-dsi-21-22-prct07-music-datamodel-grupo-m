import { Song } from "./song";
import { genreInfo } from "./genre";
/**
 * Clase encargada de definir el funcionamiento de una lista de reproduccion de musica de una plataforma digital.
 */
export class Playlist {
  /**
   * Constructor de la clase Playlist que define el funcionamiento de una lista de reproduccion.
   * @param name Nombre de la playlist.
   * @param songs Canciones incluidas dentro de la playlist.
   * @param duration duracion total de la playlist en horas y minutos.
   * @param genres genres musicales que se incluyen dentro de la playlist.
   */
    constructor(private name: string, private songs: Song[], private duration: number, private genres: genreInfo[], private creationYear: number){
       this.songs = songs;
       this.duration = duration;
       this.genres = genres;
       this.name = name; 
       this.creationYear = creationYear;
    }

    /**
     * Método encargado de obtener la lista de canciones de la playlist.
     * @returns devuelve el atributo asociado a la lista de canciones de la playlist
     */
    getSongs(): Song[] {
      return this.songs;
    }

    getNameSong(): string {
      this.songs.forEach((item) => {
        return item.getName();
      });
      return "No existe ningun nombre";
    }

    getArtistSong(): string {
      this.songs.forEach((item) => {
        return item.getAutor();
      });
      return "No existe ningun Artista o Grupo asociado";
    }

    getDurationSong(): number {
      this.songs.forEach((item) => {
        return item.getDuration();
      });
      return -1;
    }

    getGenrePlaylist(): string {
      this.songs.forEach((item) => {
        return item.getGenres();
      });
      return "No existe Genero";
    }
    /**
     * Metodo que devuelve la duracion total de la playlist.
     * @returns devuelve la duracion.
     */
    getDuration(): number {
      return this.duration;
    }


    getCreateYear(): number {
      return this.creationYear;
    }
    /**
     * Metodo que devuelve los genres de las songs de la playlist.
     * @returns devuelve los genres de la playlist
     */
    getGenres(): genreInfo[] {
      return this.genres;
    }

    /**
     * Metodo que devuelve el name de la playlist
     * @returns devuelve el nombre de la playlist.
     */
    getNombre(): string{
      return this.name;
    }
}