import inquirer from 'inquirer';
import * as readline from 'readline';

import {Genre, genreInfo} from "./Basic_Class/genre";
import {Song} from "./Basic_Class/song";
import {Album} from "./Basic_Class/album";
import {Artist} from "./Basic_Class/artist";
import {Group} from "./Basic_Class/group";
import {Playlist} from "./Basic_Class/playlist";
import {Collection, albumCollection, artistCollection, groupCollection, genreCollection, songCollection} from './Gestor/collection'
import {data} from "./data";
import {Manage} from './Gestor/manage';
import {sortTituloCollection, sortAlbumCollection, sortAlbumYear, sortListenersTotal, sortSingles} from './Gestor/sort';
import {whatConsult, whatOperate} from './inquirer/inquirer';
/**
 * Se carga la base de datos desde el fichero data
 */
let playlistManage: Manage = data(); 
data();

/**
 * Implementa las diversas opciones que contendra el menu principal
 */
enum mainOptions {
    consult = 'Realizar una Consulta en el sistema',
    calculate = 'Realizar una Operación en el sistema',
    quit = 'Salir'
  };

/**
 * Menu principal que le da a elegir al usuario las opciones especificadas en "mainOptions".
 */
export async function mainPrompt(): Promise<void>   {
  console.clear();
  console.log(`Bienvenidos a la Biblioteca Musical!\n» Autores: Joel, Micaela & Carla`);
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseSelect',
    message: 'Que desea hacer?:',
    choices: Object.values(mainOptions),
  });
  switch(answers["chooseSelect"]) {
    case mainOptions.consult:
      whatConsult();
      break;
    case mainOptions.calculate:
      whatOperate();
      break;
    case mainOptions.quit:
      console.clear();
      console.log(`Gracias por su visita. Que tenga un buen dia`);
      console.log(`Saliendo...`);
      break;
  }
}

/**
 * Llamada al menu principal
 */
mainPrompt();