"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataBase = void 0;
var lowdb_1 = require("lowdb");
var FileSync_1 = require("lowdb/adapters/FileSync");
var map_1 = require("./map");
var DataBase = /** @class */ (function (_super) {
    __extends(DataBase, _super);
    function DataBase() {
        var _this = _super.call(this) || this;
        _this.database = (0, lowdb_1["default"])(new FileSync_1["default"]("./src/database.json"));
        _this.loadSong();
        return _this;
    }
    DataBase.prototype.loadSong = function () {
        var _this = this;
        if (this.database.has("Songs").value()) {
            var dbItems = this.database.get("Songs").value();
            var aux_1;
            dbItems.forEach(function (item) {
                _super.prototype.addSong.call(_this, aux_1);
            });
        }
        else {
            this.database.set("Songs", []).write();
        }
    };
    DataBase.prototype.addSon = function (songForAdd) {
        _super.prototype.addSong.call(this, songForAdd);
        this.store('Song');
    };
    DataBase.prototype.store = function (type) {
        switch (type) {
            case 'Song':
                this.database.set("songs", this.getSong()).write();
        }
    };
    return DataBase;
}(map_1.MapCollection));
exports.DataBase = DataBase;
