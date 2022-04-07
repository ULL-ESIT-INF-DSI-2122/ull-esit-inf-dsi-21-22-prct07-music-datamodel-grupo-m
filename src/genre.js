"use strict";
exports.__esModule = true;
exports.Genre = void 0;
/**
 * Clase encargada de implementar un genero musical dentro del sistema.
 */
var Genre = /** @class */ (function () {
    /**
     * Constructor de la clase encargada de implementar el genero musical.
     * @param name nombre del genero.
     * @param artists artistas que hay dentro de un genero.
     * @param albums albums que hay dentro de un genero.
     * @param song song que hay dentro de un genero determinado.
     */
    function Genre(name, artists, albums, song) {
        this.name = name;
        this.artists = artists;
        this.albums = albums;
        this.song = song;
        this.name = name;
        this.artists = artists;
        this.albums = albums;
        this.song = song;
    }
    /**
     * Metodo que obtiene el nombre del genero.
     * @returns devuelve el nombre de un genero musical.
     */
    Genre.prototype.getNombre = function () {
        return this.name;
    };
    /**
     * Metodo que devuelve todos los artists dentro del genero.
     * @returns devuelve los artistas que estan englobados dentro de un genero.
     */
    Genre.prototype.getArtistas = function () {
        return this.artists;
    };
    /**
     * metodo que devuelve los albums que hay dentro de un genero.
     * @returns devuelve los albums de un genero.
     */
    Genre.prototype.getAlbumes = function () {
        return this.albums;
    };
    /**
     * metodos que obtiene las songs que hay dentro de un genero.
     * @returns devuelve la lsita de songs de un genero determinado.
     */
    Genre.prototype.getSongs = function () {
        return this.song;
    };
    return Genre;
}());
exports.Genre = Genre;
