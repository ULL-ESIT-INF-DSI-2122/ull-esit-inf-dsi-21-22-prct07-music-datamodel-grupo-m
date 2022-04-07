import * as inquirer from 'inquirer';
import {Genre} from "./genre";
import {Song} from "./song";
import {Album} from "./album";
import {Artist} from "./artist";
import {Group} from "./group";
import {Playlist} from "./playlist";
import {Collection} from "./collection";
import { data } from "./data";
import {DataBase, BDD} from './bdd';


// Menu principal
enum Commands {SONG = 'songs', QUIT = 'Quit'};
enum Operations {ADD = 'Add', DELETE = 'Delete'};

enum firstMenu{
  Añadir = 'Añadir un nuevo tipo de dato',
  Borrar = 'Eliminar un nuevo tipo de dato',
  Modificar = 'Sobreescribir la informacion',
  Salir = 'Salir'
}

/**
 * Clase encargada de hacer la gestion de playlist
 */
class Manage {
  private collection: DataBase;
  constructor() {
    this.collection = new DataBase();
  }

  mainPrompt(): void {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'command',
      message: 'What do you want to do?',
      choices: Object.values(Commands),
    }).then((answers: any) => {
      switch (answers['command']) {
        case Commands.SONG:
        case Commands.QUIT:
          console.log('Thank you for using our application');
          return;
      }
    });
  }


  process(option: string): void {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: Object.values(Operations),
    }).then((answers: any) => {
      switch (answers['option']) {
        case Operations.ADD:
          switch (option) {
            case 'song':
              this.addSong();
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
  }


  addSong(): void {
    console.clear();
    inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Song name:',
    }, {
      type: 'input',
      name: 'author',
      message: 'introduce the authors of the song :',
    }, {
      type: 'input',
      name: 'duration',
      message: 'introduce the duration of the song:',
    }, {
      type: 'input',
      name: 'genres',
      message: 'Choose the genre of the song:',
    }, {
      type: 'input',
      name: 'single',
      message: 'its a single?:',
    }, {
      type: 'input',
      name: 'reproduction',
      message: 'how many reproductions have this song?:',
    }]).then((answers: any) => {
      let newSong: Song = new Song(answers['name'], answers['author'], answers['duration'], answers['genres'], answers['single'], answers['reproduction']);
      this.collection.addSong(newSong);
      console.log('Successfully created ingredients');
      inquirer.prompt([{
        type: 'list',
        name: 'continue',
        message: 'Do you want to add another song?:',
        choices: ['Yes', 'No'],
      }]).then((answers: any) => {
        if (answers['continue'] == 'Yes') this.addSong();
        else this.mainPrompt();
      });
    });
  }

}

const prueba = new Manage();
prueba.mainPrompt();