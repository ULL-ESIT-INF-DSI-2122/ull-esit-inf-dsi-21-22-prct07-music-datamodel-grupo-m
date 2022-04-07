"use strict";
exports.__esModule = true;
exports.Group = void 0;
/**
 * Clase encargada de implementar la entidad de un grupo, asociacion de diversos artistas.
 */
var Group = /** @class */ (function () {
    /**
     * Constructor de la clase Grupo
     * @param name nombre del grupo
     * @param artists artistas que conforman el grupo
     * @param anioCreacion anio de creacion del grupo
     * @param genre genero en el que se encasilla un grupo
     * @param listeners cantidad de oyentes mensuales que tiene un grupo
     */
    function Group(name, artists, anioCreacion, genre, listeners) {
        this.name = name;
        this.artists = artists;
        this.anioCreacion = anioCreacion;
        this.genre = genre;
        this.listeners = listeners;
        this.albums = [];
        this.name = name;
        this.artists = artists;
        this.anioCreacion = anioCreacion;
        this.genre = genre;
        this.listeners = listeners;
    }
    /**
   * metodo encargado de obtener el nombre del grupo
   * @returns devuelve el nombre del grupo
   */
    Group.prototype.getNombre = function () {
        return this.name;
    };
    /**
     * metodo que obtiene los artistas que conforman el grupo
     * @returns devuelve los artistas que conforman el grupo
     */
    Group.prototype.getArtistas = function () {
        return this.artists;
    };
    /**
     * Metodo que obtiene el anio de creacion del grupo
     * @returns devuelve el anio en el que se creo el grupo.
     */
    Group.prototype.getAñoCreacion = function () {
        return this.anioCreacion;
    };
    /**
     * metodo que obtiene el genero en el que trabaja un grupo
     * @returns devuelve el genero en el que se engloba al grupo
     */
    Group.prototype.getGenero = function () {
        return this.genre;
    };
    /**
     * metodo que obtiene los albums que ha lanzado el grupo
     * @returns devuelve los albumnes que ha lanzado el grupo.
     */
    Group.prototype.getAlbumes = function () {
        return this.albums;
    };
    /**
     * metodo que obtiene la cantida de oyentes mensuales del grupo
     * @returns devuelve la cantidad de oyentes mensuales del grupo.
     */
    Group.prototype.getOyentes = function () {
        return this.listeners;
    };
    /**
     * Metodo encargado de establecer un valor al album
     * @param newAlbum nuevo elemento a añadir en la lista de albums.
     */
    Group.prototype.setAlbum = function (newAlbum) {
        this.albums.push(newAlbum);
    };
    return Group;
}());
exports.Group = Group;
