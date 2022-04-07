"use strict";
exports.__esModule = true;
exports.Artist = void 0;
/**
 * Clase encargada de especificar a los diferentes musicos u artistas que forman parte de grupos o tienen carreras en solitario.
 */
var Artist = /** @class */ (function () {
    /**
     * Constructor de la entidad Artistas del sistema.
     * @param name nombre del artista.
     * @param genre generos en los que suele trabajar el artista
     * @param albumes albumes que ha publicado un artista
     * @param listenerIndi cantidad de oyentes mensuales que tiene un artista en especifico.
     * @param listenerMensual Cantidad de oyentes mensuales de un grupo, en caso de ser una carrera solitaria es igual a los oyentes individuales.
     */
    function Artist(name, genres, listenerIndi) {
        this.name = name;
        this.genres = genres;
        this.listenerIndi = listenerIndi;
        this.groupList = [];
        this.songsList = [];
        this.albumList = [];
        this.listenerMensual = 0;
        this.name = name;
        this.genres = genres;
        this.listenerIndi = listenerIndi;
    }
    /**
     * metodo encargado de devolver el nombre del artista
     * @returns devuelve el nombre del artista
     */
    Artist.prototype.getName = function () {
        return this.name;
    };
    /**
     * metodo encargada de mostrar los grupos a los que pertenece el artista.
     * @returns devuelve lso grupos en los que se encuentra el artista.
     */
    Artist.prototype.getGroupList = function () {
        return this.groupList;
    };
    /**
     * metodo que devuelve los generos musicales relacionados
     * @returns devuelve el genero musical relacionado a ese artista.
     */
    Artist.prototype.getGenre = function () {
        return this.genres;
    };
    /**
     * metodo que devuelve los albumes lanzados por el artista
     * @returns el album lanzado por el artista
     */
    Artist.prototype.getAlbumList = function () {
        return this.albumList;
    };
    /**
     * Metodo encargado de devolver todas las canciones que tiene un artista
     * @returns devuelve las canciones que ha lanzado el artista.
     */
    Artist.prototype.getSongList = function () {
        return this.songsList;
    };
    /**
     * metodo que visualiza la cantidad de oyentes mensuales que tiene un artista
     * @returns devuelve la cantidad numerica de oyentes mensuales de un artista.
     */
    Artist.prototype.getOyentesMensual = function () {
        return this.listenerMensual;
    };
    /**
     * Funcion que calcula la cantidad de oyentes mensuales totales en base al trabajo individual
     * @returns devuelve la suma del trabajo individual mas la cantidad de oyentes mensuales.
     */
    Artist.prototype.calOyentes = function () {
        var result = 0;
        if (this.groupList.length > 0) {
            this.groupList.forEach(function (group) {
                result += group.getOyentes();
            });
        }
        return result + this.listenerIndi;
    };
    /**
     * Metodo encargado de añadir un nuevo elemento al atributo privados grupos
     * @param newGrupo Nuevo item a añadir al grupo
     * @return añade un nuevo grupo.
     */
    Artist.prototype.setGroups = function (newGroupList) {
        this.groupList = newGroupList;
    };
    Artist.prototype.addGroup = function (newGrupo) {
        this.groupList.push(newGrupo);
    };
    /**
     * Metodo encargado de añadir un nuevo elemento al atributo privados song
     * @param newGrupo Nuevo item a añadir a la lista de canciones
     * @return añade una nueva cancion.
     */
    Artist.prototype.setSongList = function (newList) {
        this.songsList = newList;
    };
    Artist.prototype.setSong = function (newSong) {
        this.songsList.push(newSong);
    };
    /**
     * Metodo encargado de añadir un nuevo elemento a la lista de albumes
     * @param newGrupo Nuevo item a añadir al album
     * @return añade un nuevo album a la lista de albumes.
     */
    Artist.prototype.setAlbum = function (newAlbum) {
        this.albumList.push(newAlbum);
    };
    Artist.prototype.setListeners = function (listeners) {
        this.listenerMensual = listeners;
    };
    return Artist;
}());
exports.Artist = Artist;
