"use strict";
exports.__esModule = true;
exports.playlistCollection = exports.songCollection = exports.genreCollection = exports.groupCollection = exports.artistCollection = exports.albumCollection = exports.Collection = void 0;
var Collection = /** @class */ (function () {
    function Collection() {
        this.list = [];
    }
    Collection.prototype.getList = function () {
        return this.list;
    };
    Collection.prototype.addItem = function (item) {
        this.list.push(item);
    };
    Collection.prototype.setList = function (newList) {
        this.list = newList;
    };
    Collection.prototype.searchItem = function (item) {
        var search = this.list.find(function (element) { return element === item; });
        return (search) ? search : console.log('No existe');
    };
    Collection.prototype.getLenght = function () {
        return this.list.length;
    };
    return Collection;
}());
exports.Collection = Collection;
exports.albumCollection = new Collection();
exports.artistCollection = new Collection();
exports.groupCollection = new Collection();
exports.genreCollection = new Collection();
exports.songCollection = new Collection();
exports.playlistCollection = new Collection();
