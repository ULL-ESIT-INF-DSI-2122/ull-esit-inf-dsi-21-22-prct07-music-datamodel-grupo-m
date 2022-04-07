"use strict";
exports.__esModule = true;
exports.Album = void 0;
/**
 * Clase encargada de representar un album, es decir, la informacion relativa a un disco musical.
 */
var Album = /** @class */ (function () {
    /**
     * Constructor de la clase Album.
     * @param name Nombre del album.
     * @param artist Artist u grupo que ha publicado el album.
     * @param anioPubli El año en el que se ha publicado el album.
     * @param genre Genre musical del album.
     * @param song Lista de song dentro del album.
     */
    function Album(name, artist, anioPubli, genre, song) {
        this.name = name;
        this.artist = artist;
        this.anioPubli = anioPubli;
        this.genre = genre;
        this.song = song;
        this.name = name;
        this.anioPubli = anioPubli;
        this.genre = genre;
        this.song = song;
    }
    /**
     * metodo que devuelve el nombre del album
     * @returns devuelve el nombre del album
     */
    Album.prototype.getNombre = function () {
        return this.name;
    };
    /**
     * metodo que obtiene el atributo privado del año de publicacion
     * @returns devuelve el año de lanzamiento del album
     */
    Album.prototype.getAnio = function () {
        return this.anioPubli;
    };
    /**
     * metodo que obtiene el genero musical del album
     * @returns devuelve el genero en el que se encuentra el album.
     */
    Album.prototype.getGenero = function () {
        return this.genre;
    };
    /**
     * metodo que devuelve una lista de song dentro del album.
     * @returns devuelve la lista de song que contiene el album.
     */
    Album.prototype.getTracklist = function () {
        return this.song;
    };
    return Album;
}());
exports.Album = Album;
