"use strict";
exports.__esModule = true;
var inquirer = require("inquirer");
var song_1 = require("./song");
var bdd_1 = require("./bdd");
// Menu principal
var Commands;
(function (Commands) {
    Commands["SONG"] = "songs";
    Commands["QUIT"] = "Quit";
})(Commands || (Commands = {}));
;
var Operations;
(function (Operations) {
    Operations["ADD"] = "Add";
    Operations["DELETE"] = "Delete";
})(Operations || (Operations = {}));
;
var firstMenu;
(function (firstMenu) {
    firstMenu["A\u00F1adir"] = "A\u00F1adir un nuevo tipo de dato";
    firstMenu["Borrar"] = "Eliminar un nuevo tipo de dato";
    firstMenu["Modificar"] = "Sobreescribir la informacion";
    firstMenu["Salir"] = "Salir";
})(firstMenu || (firstMenu = {}));
/**
 * Clase encargada de hacer la gestion de playlist
 */
var Manage = /** @class */ (function () {
    function Manage() {
        this.collection = new bdd_1.DataBase();
    }
    Manage.prototype.mainPrompt = function () {
        console.clear();
        inquirer.prompt({
            type: 'list',
            name: 'command',
            message: 'What do you want to do?',
            choices: Object.values(Commands)
        }).then(function (answers) {
            switch (answers['command']) {
                case Commands.SONG:
                case Commands.QUIT:
                    console.log('Thank you for using our application');
                    return;
            }
        });
    };
    Manage.prototype.process = function (option) {
        var _this = this;
        console.clear();
        inquirer.prompt({
            type: 'list',
            name: 'option',
            message: 'Choose an option:',
            choices: Object.values(Operations)
        }).then(function (answers) {
            switch (answers['option']) {
                case Operations.ADD:
                    switch (option) {
                        case 'song':
                            _this.addSong();
                            break;
                    }
                    break;
                /*
                case Operations.DELETE:
                  switch (option) {
                    case 'food':
                      this.deleteFood();
                      break;
                  }*/
            }
        });
    };
    Manage.prototype.addSong = function () {
        var _this = this;
        console.clear();
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Song name:'
            }, {
                type: 'input',
                name: 'author',
                message: 'introduce the authors of the song :'
            }, {
                type: 'input',
                name: 'duration',
                message: 'introduce the duration of the song:'
            }, {
                type: 'input',
                name: 'genres',
                message: 'Choose the genre of the song:'
            }, {
                type: 'input',
                name: 'single',
                message: 'its a single?:'
            }, {
                type: 'input',
                name: 'reproduction',
                message: 'how many reproductions have this song?:'
            }]).then(function (answers) {
            var newSong = new song_1.Song(answers['name'], answers['author'], answers['duration'], answers['genres'], answers['single'], answers['reproduction']);
            _this.collection.addSong(newSong);
            console.log('Successfully created ingredients');
            inquirer.prompt([{
                    type: 'list',
                    name: 'continue',
                    message: 'Do you want to add another song?:',
                    choices: ['Yes', 'No']
                }]).then(function (answers) {
                if (answers['continue'] == 'Yes')
                    _this.addSong();
                else
                    _this.mainPrompt();
            });
        });
    };
    return Manage;
}());
var prueba = new Manage();
prueba.mainPrompt();
