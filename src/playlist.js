"use strict";
exports.__esModule = true;
exports.Playlist = void 0;
/**
 * Clase encargada de definir el funcionamiento de una lista de reproduccion de musica de una plataforma digital.
 */
var Playlist = /** @class */ (function () {
    /**
     * Constructor de la clase Playlist que define el funcionamiento de una lista de reproduccion.
     * @param name Nombre de la playlist.
     * @param songs Canciones incluidas dentro de la playlist.
     * @param duration duracion total de la playlist en horas y minutos.
     * @param genres genres musicales que se incluyen dentro de la playlist.
     */
    function Playlist(name, songs, duration, genres) {
        this.name = name;
        this.songs = songs;
        this.duration = duration;
        this.genres = genres;
        this.songs = songs;
        this.duration = duration;
        this.genres = genres;
        this.name = name;
    }
    /**
     * Método encargado de obtener la lista de canciones de la playlist.
     * @returns devuelve el atributo asociado a la lista de canciones de la playlist
     */
    Playlist.prototype.getSongs = function () {
        return this.songs;
    };
    /**
     * Metodo que devuelve la duracion total de la playlist.
     * @returns devuelve la duracion.
     */
    Playlist.prototype.getDuration = function () {
        return this.duration;
    };
    /**
     * Metodo que devuelve los genres de las songs de la playlist.
     * @returns devuelve los genres de la playlist
     */
    Playlist.prototype.getGenres = function () {
        return this.genres;
    };
    /**
     * Metodo que devuelve el name de la playlist
     * @returns devuelve el nombre de la playlist.
     */
    Playlist.prototype.getNombre = function () {
        return this.name;
    };
    return Playlist;
}());
exports.Playlist = Playlist;
