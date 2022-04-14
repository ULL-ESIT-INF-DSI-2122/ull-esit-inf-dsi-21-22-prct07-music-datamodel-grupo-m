import inquirer from 'inquirer';
import * as readline from 'readline';

import {Genre, genreInfo} from "./Basic_Class/genre";
import {Song} from "./Basic_Class/song";
import {Album} from "./Basic_Class/album";
import {Artist} from "./Basic_Class/artist";
import {Group} from "./Basic_Class/group";
import {Playlist} from "./Basic_Class/playlist";
import {Collection, albumCollection, artistCollection, groupCollection, genreCollection, songCollection} from './collection'
import {data} from "./data";
import {Manage} from './manage';
import {sortTituloCollection, sortAlbumCollection, sortAlbumYear, sortListenersTotal, sortSingles} from './sort';


let playlistManage: Manage = data();

enum mainOptions {
  consult = 'Realizar una Consulta',
  calculate = 'Realizar una Operación',
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
  sortBySingle  = 'Filtrar los singles que hay en el sistema',
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

enum OperationSelect {
  operatePlaylist = 'Realizar una operación en las Playlist del sistema',
  operateCollection = 'Realizar una operación en las Colecciones del sistema',
  back = 'Volver atras'
};

enum selectOperatePlaylist {
  addNewPlaylist = 'Añadir una Playlist nueva al sistema',
  modifyPlaylist = 'Modificar una Playlist existente',
  removePlaylist =  'Eliminar una Playlist existente',
  back = 'Volver atras'
};

enum selectOperateCollection {
  addNewCollection = 'Añadir nuevos elementos a la Coleccion',
  modifyCollection = 'Realizar una modificación en las Colecciones del sistema',
  removeCollection = 'Eliminar elementos existentes de la Coleccion',
  back = 'Volver atras'
};


enum optionAddCollection {
  addArtist = 'Añadir un Artista a la colección',
  addGroup = 'Añadir un grupo a la colección',
  addSong = 'Añadir una canción a la colección',
  addGenre = 'Añadir un genero musical a la colección',
  addAlbum = 'Añadir un album a la colección',
  back = 'Volver atras'
};

enum optionRemoveCollection {
  removeArtist = 'Eliminar Artista de la colección',
  removeGroup = 'Eliminar Grupos de la colección',
  removeSong = 'Eliminar Canciones de la colección',
  removeGenre = 'Eliminar Generos de la colección',
  removeAlbum = 'Eliminar Albumes de la colección',
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
      whatOperate();
      break;
    case mainOptions.quit:
      console.clear();
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
      promptDefaultCollection();
      break;
    case consultCollectionOptions.sortByTitle:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortTituloCollection());
        } else {
          console.log(sortTituloCollection(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortByAlbum:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortAlbumCollection());
        } else {
          console.log(sortAlbumCollection(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortByPlaylist:
      

      break;
    case consultCollectionOptions.sortBylanzamiento:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortAlbumYear());
        } else {
          console.log(sortAlbumYear(false));
        }
        promptConsultCollection();
      });
      break; 
    case consultCollectionOptions.sortByReproduction:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortListenersTotal());
        } else {
          console.log(sortListenersTotal(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortBySingle:
      console.log(sortSingles());
      promptConsultCollection();
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
// MENU DE OPERACIONES
// ###############################################################################################################################


async function whatOperate(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operateSelect',
    message: 'Qué desea hacer?',
    choices: Object.values(OperationSelect),
  });
  switch(answers["operateSelect"]) {
    case OperationSelect.operatePlaylist: 
      promptOperatePlaylist();
      break;
    case OperationSelect.operateCollection:
      promptOperateCollection();
      break;
    case OperationSelect.back: 
      mainPrompt();
      break;
  }
}

async function promptOperatePlaylist(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operatePlaylist',
    message: 'Qué desea hacer?',
    choices: Object.values(selectOperatePlaylist),
  });
  switch(answers["operatePlaylist"]) {
    case selectOperatePlaylist.addNewPlaylist: 
      addPlaylist();
      break;
    case selectOperatePlaylist.modifyPlaylist:
      break;
    case selectOperatePlaylist.removePlaylist: 
      break;
    case selectOperatePlaylist.back: 
      whatOperate();
      break;
  }
}


async function promptOperateCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operateCollection',
    message: 'Qué desea hacer?',
    choices: Object.values(selectOperateCollection),
  });
  switch(answers["operateCollection"]) {
    case selectOperateCollection.addNewCollection: 
      selectAddCollection();
      break;
    case selectOperateCollection.modifyCollection:
      break;
    case selectOperateCollection.removeCollection: 
      selectRemoveCollection();
      break;
    case selectOperateCollection.back: 
      whatOperate();
      break;
  }
}


async function selectAddCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'addCollection',
    message: 'Qué desea hacer?',
    choices: Object.values(optionAddCollection),
  });
  switch(answers["addCollection"]) {
    case optionAddCollection.addArtist: 
      addArtist();
      break;
    case optionAddCollection.addGroup:
      addGroup();
      break;
    case optionAddCollection.addGenre: 
      addGenre();
      break;
    case optionAddCollection.addSong: 
      addSong();
      break;
    case optionAddCollection.addAlbum: 
      addAlbum();
      break;
    case optionAddCollection.back: 
    promptOperateCollection();
      break;
  }
}
// Menu que añade un Album a la coleccion
async function addAlbum(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  
  let genreIntroduce: genreInfo;

  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'nameAlbum',
    message: 'Introduzca el nombre del Album:',
  }, {
    type: 'input',
    name: 'author',
    message: 'Por favor, introduzca los artistas o grupos a los que pertenece el Album. (Nota: tienen que estar separados por coma y luego un espacio): ',
  }, {
    type: 'input',
    name: 'yearPublication',
    message: 'Introduzca el año de publicación del Album:',
  }, {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero del Album:',
  }, {
    type: 'input',
    name: 'songsName',
    message: 'Por favor, introduzca los titulos de las canciones que pertenecen al Album. (Nota: tienen que estar separados por coma y luego un espacio): ',
  }]).then((answers: any) => {

    genreIntroduce = findGenre(answers.genres.toUpperCase());

    let artistAnswers: string = answers.author;
    let resultArtist: (Artist| Group)[] = [];
    let artistArray: string[] = artistAnswers.split(", ", artistAnswers.length);
    artistArray.forEach((i) => {
      artistCollection.getList().forEach((j) => {
        groupCollection.getList().forEach((k) => {
          if ((i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) || (i.toLocaleLowerCase() == k.getNombre().toLocaleLowerCase())) {
            resultArtist.push(j);
          }
        });
      });
    });

    let songAnswers: string = answers.songsName;
    let resultSongs: Song[] = [];
    let songArray: string[] = songAnswers.split(", ", songAnswers.length);
    songArray.forEach((i) => {
      songCollection.getList().forEach((j) => {
          if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
            resultSongs.push(j);
          }
      });
    });

    let newAlbum: Album = new Album(answers.nameAlbum, resultArtist, answers.yearPublication, [genreIntroduce], resultSongs);
    albumCollection.addItem(newAlbum);
    console.log('se ha introducido el grupo');
    albumCollection.showCollection();
    inquirer.prompt([{
      type: 'list',
      name: 'continue',
      message: 'Do you want to add another Album?:',
      choices: ['si', 'no'],
    }]).then((answers: any) => {
      if (answers['continue'] == 'si') addAlbum();
      else whatOperate();
    });
  });
}
// Menu que añade un genero a la colleccion de generos:

async function addGenre(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  
  let genreIntroduce: genreInfo;

  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'nameGenre',
    message: 'Introduzca el nombre del Genero que desea crear:',
  }, {
    type: 'input',
    name: 'artistGenre',
    message: 'Por favor, introduzca los artistas o grupos que estan en el Género. (Nota: tienen que estar separados por coma y luego un espacio): ',
  }, {
    type: 'input',
    name: 'albumGenre',
    message: 'Por favor, introduzca los albumes que estan dentro del Género. (Nota: tienen que estar separados por coma y luego un espacio): ',
  },  {
    type: 'input',
    name: 'songsGenre',
    message: 'Por favor, introduzca los titulos de las canciones que pertenecen al Genero. (Nota: tienen que estar separados por coma y luego un espacio): ',
  }]).then((answers: any) => {

    genreIntroduce = findGenre(answers.nameGenre.toUpperCase());

    let artistAnswers: string = answers.artistGenre;
    let resultArtist: (Artist| Group)[] = [];
    let artistArray: string[] = artistAnswers.split(", ", artistAnswers.length);
    artistArray.forEach((i) => {
      artistCollection.getList().forEach((j) => {
          if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
            resultArtist.push(j);
          }
      });
    });

    let albumAnswers: string = answers.albumGenre;
    let resultAlbum: Album[] = [];
    let albumArray: string[] = albumAnswers.split(", ", albumAnswers.length);
    albumArray.forEach((i) => {
      albumCollection.getList().forEach((j) => {
          if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
            resultAlbum.push(j);
          }
      });
    });

    let songAnswers: string = answers.songsGenre;
    let resultSongs: Song[] = [];
    let songArray: string[] = songAnswers.split(", ", songAnswers.length);
    songArray.forEach((i) => {
      songCollection.getList().forEach((j) => {
          if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
            resultSongs.push(j);
          }
      });
    });

    let newGenre: Genre = new Genre(genreIntroduce , resultArtist, resultAlbum, resultSongs);
    genreCollection.addItem(newGenre);
    console.log('se ha introducido el grupo');
    genreCollection.showCollection();
    inquirer.prompt([{
      type: 'list',
      name: 'continue',
      message: 'Do you want to add another Album?:',
      choices: ['si', 'no'],
    }]).then((answers: any) => {
      if (answers['continue'] == 'si') addAlbum();
      else whatOperate();
    });
  });
}


// menu que añade un artista a la coleccion
async function addArtist(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre del artista: ',
  },
  {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero de la musica del artista: ',
  },
  {
    type: 'input',
    name: 'listeners',
    message: 'Introduzca los oyentes individuales del artista:',
  }
  ]);

    let newArtist: Artist = new Artist(answers['name'], answers['genres'], answers['listeners']);
    artistCollection.addItem(newArtist);
    artistCollection.showCollection();
    continueAddArtist();
}

// Menu que pregunta si se desea añadir otro artista a la coleccion
async function continueAddArtist(): Promise<void> {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'continue',
    message: 'Desea añadir otro artista?:',
    choices: ['Si', 'No'],
  })
  if (answers['continue'] == 'Si') addArtist();
  else whatOperate();
}

//menu que añade un grupo a la coleccion
async function addGroup(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  let genreIntroduce: genreInfo;
  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre del Grupo:',
  }, {
    type: 'input',
    name: 'author',
    message: 'Por favor, introduzca los integrantes del grupo que quiere agregar: (tienen que estar separados por coma y luego un espacio)',
  }, {
    type: 'input',
    name: 'creation',
    message: 'Introduzca el año de creacion del Grupo:',
  }, {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero del Grupo:',
  }, {
    type: 'input',
    name: 'listeners',
    message: 'Introduzca los oyentes del Grupo:',
  }]).then((answers: any) => {
    let artistAnswers: string = answers.author;
    let result: Artist[] = [];
    let artistArray: string[] = artistAnswers.split(", ", artistAnswers.length);
    artistArray.forEach((i) => {
      artistCollection.getList().forEach((j) => {
        if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
          result.push(j);
        }
      });
    });
    genreIntroduce = findGenre(answers.genres.toUpperCase());
    let newGroup: Group = new Group(answers.name, result, answers.creation, [genreIntroduce], answers.listeners);
    groupCollection.addItem(newGroup);
    console.log('se ha introducido el grupo');
    groupCollection.showCollection();
    inquirer.prompt([{
      type: 'list',
      name: 'continue',
      message: 'Do you want to add another group?:',
      choices: ['Yes', 'No'],
    }]).then((answers: any) => {
      if (answers['continue'] == 'Yes') addSong();
      else whatOperate();
    });
  });
}

// menu que añade una Cancion a la colleccion
async function addSong(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  let genreIntroduce: genreInfo;
  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre de la Canción:',
  }, {
    type: 'input',
    name: 'author',
    message: 'Introduzca el autor de la Canción:',
  }, {
    type: 'input',
    name: 'duration',
    message: 'Introduzca la duración de la Canción:',
  }, {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero de la Cancion:',
  }, {
    type: 'list',
    name: 'single',
    message: 'La canción fue un single?:',
    choices: ['si', 'no'],
  }, {
    type: 'input',
    name: 'reproduction',
    message: 'Introduzca la cantidad de veces que fue reproducida la Canción:',
  }]).then((answers: any) => {
    if(answers.single == 'si') {
      single = true;
    }
    artistMatch = findAuthor(answers.author);
    genreIntroduce = findGenre(answers.genres.toUpperCase());
    let newSong: Song = new Song(answers['name'], artistMatch, answers['duration'], [genreIntroduce], single,  answers['reproduction']);
    songCollection.addItem(newSong);
    console.log('se ha introducido el artista');
    songCollection.showCollection();
    inquirer.prompt([{
      type: 'list',
      name: 'continue',
      message: 'Do you want to add another song?:',
      choices: ['Yes', 'No'],
    }]).then((answers: any) => {
      if (answers['continue'] == 'Yes') addSong();
      else whatOperate();
    });
  });
}

function findAuthor(name: string): Artist | Group {
  let pos: number = 0;
  let count: number = 1;
  console.log(`no ha entrado ${name}`);
  artistCollection.getList().forEach((item, index) => {
    if (item.getName().toLocaleLowerCase() == name.toLocaleLowerCase()) {
      count = 1;
      pos = index;
      console.log(`es un artista en la posicion ${pos}`);
    } else {
      groupCollection.getList().forEach((item, index) =>{
        if(item.getNombre().toLocaleLowerCase() == name.toLocaleLowerCase()) {
          count = 2;
          pos = index;
          console.log(`es un grupo en la posicion ${pos}`);
        }
      });
    }
  });

  if (count == 2) {
    return groupCollection.getList()[pos];
  } else {
    return artistCollection.getList()[pos];
  }
  

}

function findArtist(name: string): Artist {
  let pos: number = 0;
  artistCollection.getList().forEach((item, index) => {
    if (item.getName().toLocaleLowerCase() == name.toLocaleLowerCase()) {
      pos = index;
    }
  });
  return artistCollection.getList()[pos];
}


function findGenre(name: string): genreInfo {
  let pos: number = 0;
  genreCollection.getList().forEach((item, index) => {
    if (item.getNombre().toLocaleLowerCase() == name.toLocaleLowerCase()) {
      pos = index;
    }
  });
  return genreCollection.getList()[pos].getNombre();
}


function findSong(name: string):Song  {
  let pos: number = 0;
  songCollection.getList().forEach((item, index) => {
    if (item.getName().toLocaleLowerCase() == name.toLocaleLowerCase()) {
      pos = index;
    }
  });
  return songCollection.getList()[pos];
}


// AÑADIR PLAYLIST
// ###############################################################################################################################
async function addPlaylist(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  let genreIntroduce: genreInfo;
  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre de la Playlist:',
  }, {
    type: 'input',
    name: 'songsName',
    message: 'Por favor, introduzca los titulos de las canciones que quiere agregar: (tienen que estar separados por coma y luego un espacio)',
  }, {
    type: 'input',
    name: 'duration',
    message: 'Introduzca la duración de la Playlist:',
  }, {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero de la Playlist:',
  }, {
    type: 'input',
    name: 'yearCreation',
    message: 'Año de creacion:',
  }]).then((answers: any) => {
    genreIntroduce = findGenre(answers.genres.toUpperCase());
    let resultArray: Song[] = [];
    let UserAnswer: string = answers.songsName;
    let songsArrayName: string[] = UserAnswer.split(", ", UserAnswer.length);
    songsArrayName.forEach((i) => {
      songCollection.getList().forEach((j) => {
        if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
          resultArray.push(j);
        }
      });
    });
    let newPlaylist: Playlist =  new Playlist(answers.name, resultArray, answers.duration, [genreIntroduce], answers.yearCreation);
    playlistManage.addItem(newPlaylist);
    playlistManage.showPlaylist();

  });
}

// ELIMINAR DE LAS COLLECCIONES
// ###############################################################################################################################
// Menu que da a elegir que eliminar
async function selectRemoveCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'removeCollection',
    message: 'Qué desea hacer?',
    choices: Object.values(optionRemoveCollection),
  });
  switch(answers["removeCollection"]) {
    case optionRemoveCollection.removeArtist: 
      removeArtist();
      break;
    case optionRemoveCollection.removeGroup:
      removeGroup();
      break;
    case optionRemoveCollection.removeGenre: 
      removeGenre();
      break;
    case optionRemoveCollection.removeSong: 
      removeSong();
      break;
    case optionRemoveCollection.removeAlbum: 
      removeAlbum();
      break;
    case optionRemoveCollection.back: 
      promptOperateCollection();
      break;
  }
}
// menu que añade un artista a la coleccion
async function removeArtist(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de los artistas que desea eliminar de la Collecion.(tienen que estar separados por coma y luego un espacio): ',
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    artistCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
        let index = artistCollection.getList().indexOf(j);
        if (index !== -1) {
          artistCollection.getList().splice(index, 1);
        }
      }
    });
  });
  artistCollection.showCollection();
}


async function removeSong(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de las canciones que desea eliminar de la Collecion.(tienen que estar separados por coma y luego un espacio): ',
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    songCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
        let index = songCollection.getList().indexOf(j);
        if (index !== -1) {
          songCollection.getList().splice(index, 1);
        }
      }
    });
  });
  songCollection.showCollection();
}


async function removeGenre(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de los  generos que desea eliminar de la Collecion: (tienen que estar separados por coma y luego un espacio): ', 
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    genreCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getNombre().toLocaleLowerCase()) {
        let index = genreCollection.getList().indexOf(j);
        if (index !== -1) {
          genreCollection.getList().splice(index, 1);
        }
      }
    });
  });
  genreCollection.showCollection();
}

async function removeGroup(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de los  generos que desea eliminar de la Collecion: (tienen que estar separados por coma y luego un espacio): ', 
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    groupCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getNombre().toLocaleLowerCase()) {
        let index = groupCollection.getList().indexOf(j);
        if (index !== -1) {
          groupCollection.getList().splice(index, 1);
        }
      }
    });
  });
  groupCollection.showCollection();
}

async function removeAlbum(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de los  generos que desea eliminar de la Collecion: (tienen que estar separados por coma y luego un espacio): ', 
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    albumCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
        let index = albumCollection.getList().indexOf(j);
        if (index !== -1) {
          albumCollection.getList().splice(index, 1);
        }
      }
    });
  });
  albumCollection.showCollection();
}
// ###############################################################################################################################


// ELIMINAR UNA PLAYLIST
// ###############################################################################################################################



// ###############################################################################################################################
mainPrompt();

