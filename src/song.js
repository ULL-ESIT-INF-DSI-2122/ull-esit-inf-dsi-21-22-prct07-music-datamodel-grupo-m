"use strict";
exports.__esModule = true;
exports.Song = void 0;
/**
 * Clase encargada de representar la cancion que ha publicado un artista y que se encuentra en un Album.
 */
var Song = /** @class */ (function () {
    /**
     * Constructor de uya cancion del sistema.
     * @param name titulo de la cancion.
     * @param autor autor de la cancion.
     * @param duration tiempo de duracion de la cancion musical.
     * @param genres genero en el que se engloba la cancion
     * @param single flag que determina si fue un single o es lanzado en un album
     * @param reproductions numero total de reproducciones de esta cancion
     */
    function Song(name, autor, duration, genres, single, reproductions) {
        this.name = name;
        this.autor = autor;
        this.duration = duration;
        this.genres = genres;
        this.single = single;
        this.reproductions = reproductions;
        this.autor = autor;
        this.duration = duration;
        this.genres = genres;
        this.name = name;
        this.reproductions = reproductions;
        this.single = single;
    }
    /**
     * metodo encargado de obtener el titulo de una cancion
     * @returns devuelve el titulo de una cancion
     */
    Song.prototype.getName = function () {
        return this.name;
    };
    /**
     * Metodo que obtiene el autor de la cancion ya sea un artista o un grupo
     * @returns devuelve un array de artistas o de grupos que ha realizado la cancion
     */
    Song.prototype.getAutor = function () {
        return this.autor;
    };
    /**
     * Metodo que obtiene la duracion de la cancion
     * @returns devuelve la duracion total de la cancion.
     */
    Song.prototype.getDuration = function () {
        return this.duration;
    };
    /**
     * metodo que obtiene el atributo encargado de definir el genero de una cancion
     * @returns devuelve el genero en el que se engloba una cancion.
     */
    Song.prototype.getGenres = function () {
        return this.genres;
    };
    /**
     * metodo que obtiene el numero total de reproducciones de una cancion
     * @returns
     */
    Song.prototype.getReproducciones = function () {
        return this.reproductions;
    };
    /**
     * metodo encargado de determinar si fue un single o no.
     * @returns devuelve un flag que determina si es un single (true) o no (false).
     */
    Song.prototype.getSingle = function () {
        return this.single;
    };
    return Song;
}());
exports.Song = Song;
