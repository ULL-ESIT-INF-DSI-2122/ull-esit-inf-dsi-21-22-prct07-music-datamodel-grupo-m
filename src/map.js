"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MapCollection = void 0;
var MapCollection = /** @class */ (function () {
    function MapCollection() {
        this.songs = new Map();
        this.genres = new Map();
        this.albums = new Map();
        this.artists = new Map();
        this.groups = new Map();
    }
    MapCollection.prototype.addSong = function (newSong) {
        this.songs.set(newSong.getName(), newSong);
    };
    MapCollection.prototype.getSong = function () {
        return __spreadArray([], this.songs.values(), true);
    };
    return MapCollection;
}());
exports.MapCollection = MapCollection;
