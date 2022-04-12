import inquirer from 'inquirer';
import * as readline from 'readline';

import {Genre} from "./Basic_Class/genre";
import {Song} from "./Basic_Class/song";
import {Album} from "./Basic_Class/album";
import {Artist} from "./Basic_Class/artist";
import {Group} from "./Basic_Class/group";
import {Playlist} from "./Basic_Class/playlist";
import {Collection, albumCollection, artistCollection, groupCollection, genreCollection, songCollection} from './collection'
import {data} from "./data";
import {Manage} from './manage';


let playlistManage: Manage = data();

enum mainOptions {
  consult = 'Consultar',
  calculate = 'Operar',
  quit = 'Salir'
};
  
enum consultType {
  consultPlaylist = 'Consultar las Playlist del sistema',
  consultCollection = 'Consultar la Colecciones del sistema',
  back = 'Volver atrás'
};
  

enum consultPlaylistOptions {
  defaultVisualize = 'Visualizar por defecto las Playlist del sistema',
  sortByTitle = 'Visualizar por titulo de las canciones de la Playlist',
  sortByArtist = 'Visualizar por nombre de los artistas de la Playlist',
  sortByYear = 'Visualizar por año de lanzamiento de la Playlist',
  sortByDuration = 'Visualizar por duracion de las canciónes de la Playlist ',
  sortByGenre = 'Visualizar alfabeticamente por los generos de la Playlist',
  sortByTotal  = 'Visualizar por reproducciones totales ',
  back = 'Volver atras'
};

enum consultCollectionOptions {
  defaultVisualize = 'Visualizar por defecto las diversas Collecciones del sistema',
  sortByTitle = 'Visualizar por titulo de las canciones',
  sortByAlbum = 'Visualizar por nombre de los Albumes',
  sortByPlaylist = 'Visualizar por nombre de las Playlists',
  sortBylanzamiento = 'Visualizar por fechas de lanzamiento de los Albumes ',
  sortByReproduction = 'Visualizar por numero de reproducciones totales',
  sortBySingle  = 'Filtrar lso singles que hay en el sistema',
  back = 'Volver atras'
};

enum consultDefaultCollection {
  printArtist = 'Visualizar la lista de Artistas del sistema',
  printSong = 'Visualizar la lista de Canciones del sistema',
  printAlbum = 'Visualizar la lista de Albumes del sistema',
  printGroup = 'Visualizar la lista de Grupos del sistema',
  printGenre = 'Visualizar la lista de Generos del sistema',
  back = 'Volver atras'
};
// ###############################################################################################################################
// Menu principal
async function mainPrompt(): Promise<void>   {
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

      break;
    case mainOptions.quit:
      console.log(`Gracias por su visita. Que tenga un buen dia`);
      console.log(`Saliendo...`);
      break;
  }
}

// OPERACION DE VISUALIZAR
// ###############################################################################################################################
// En caso de seleccionar visualizar
async function whatConsult(): Promise<void>   {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'consultOptionSelect',
    message: 'Que desea consultar?:',
    choices: Object.values(consultType),
  });
  switch(answers["consultOptionSelect"]) {
    case consultType.consultPlaylist:
      promptConsultPlaylist();
      break;
    case consultType.consultCollection:
      promptConsultCollection();
      break;
    case consultType.back:
      console.log(`Volviendo atras, espere por favor...`);
      mainPrompt();
      break;
  }
}
// en caso de visualizar playlist
async function promptConsultPlaylist(): Promise<void>   {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'choosePlaylistConsult',
    message: 'Que desea consultar?:',
    choices: Object.values(consultPlaylistOptions),
  });
  switch(answers["choosePlaylistConsult"]) {
    case consultPlaylistOptions.defaultVisualize:
      console.clear();
      playlistManage.showPlaylist();
      promptConsultPlaylist();
      break;
    case consultPlaylistOptions.sortByTitle:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortSongPlaylist());
        } else {
          console.log(playlistManage.sortSongPlaylist(false));
        }
        promptConsultPlaylist();
      });
      break;
    case consultPlaylistOptions.sortByArtist:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortArtistPlaylist());
        } else {
          console.log(playlistManage.sortArtistPlaylist(false));
        }
        promptConsultPlaylist();
      });
      break;
    case consultPlaylistOptions.sortByYear:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortYeartPlaylist());
        } else {
          console.log(playlistManage.sortYeartPlaylist(false));
        }
        promptConsultPlaylist();
      });
      break;
    case consultPlaylistOptions.sortByDuration:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortDurationPlaylistSong());
        } else {
          console.log(playlistManage.sortDurationPlaylistSong(false));
        }
        promptConsultPlaylist();
      });
      break; 
    case consultPlaylistOptions.sortByGenre:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortGenrePlaylist());
        } else {
          console.log(playlistManage.sortGenrePlaylist(false));
        }
        promptConsultPlaylist();
      });
      break;
    case consultPlaylistOptions.sortByTotal:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(playlistManage.sortDurationPlaylist());
        } else {
          console.log(playlistManage.sortDurationPlaylist(false));
        }
        promptConsultPlaylist();
      });
      break;
    case consultPlaylistOptions.back:
      console.clear();
      console.log(`Volviendo atras, espere por favor...`);
      whatConsult();
      break;
  }
}

// En caso de visualizar la collecion
async function promptConsultCollection(): Promise<void>   {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseCollectionVisualize',
    message: 'Que desea visualizar?:',
    choices: Object.values(consultCollectionOptions),
  });
  switch(answers["chooseCollectionVisualize"]) {
    case consultCollectionOptions.defaultVisualize:
      console.clear();
      promptDefaultCollection()
      break;
    case consultCollectionOptions.sortByTitle:

      break;
    case consultCollectionOptions.sortByAlbum:

      break;
    case consultCollectionOptions.sortByPlaylist:

      break;
    case consultCollectionOptions.sortBylanzamiento:

      break; 
    case consultCollectionOptions.sortByReproduction:

      break;
    case consultCollectionOptions.sortBySingle:

      break;
    case consultCollectionOptions.back:
      console.log(`Volviendo atras, espere por favor...`);
      whatConsult();
      break;
  }
}

// En caso de seleccionar la visualizacion de collecciones por defecto

// En caso de visualizar la collecion
async function promptDefaultCollection(): Promise<void>   {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseDefaultCollection',
    message: 'Que Collección del sistema desea Visualizar?:',
    choices: Object.values(consultDefaultCollection),
  });
  switch(answers["chooseDefaultCollection"]) {
    case consultDefaultCollection.printArtist:
      console.log();
      artistCollection.showCollection();
      promptDefaultCollection();
      break;
    case consultDefaultCollection.printSong:
      console.log();
      songCollection.showCollection();
      promptDefaultCollection();
      break;
    case consultDefaultCollection.printAlbum:
      console.log();
      albumCollection.showCollection();
      promptDefaultCollection();
      break;
    case consultDefaultCollection.printGroup:
      console.log();
      groupCollection.showCollection();
      promptDefaultCollection();
      break;
    case consultDefaultCollection.printGenre:
      console.log();
      genreCollection.showCollection();
      promptDefaultCollection();
      break; 
    case consultDefaultCollection.back:
      console.log(`Volviendo atras, espere por favor...`);
      promptConsultCollection();
      break;
  }
}
// ###############################################################################################################################

mainPrompt();