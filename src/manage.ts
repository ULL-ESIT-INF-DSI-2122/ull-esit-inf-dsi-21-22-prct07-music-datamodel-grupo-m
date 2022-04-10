import inquirer from 'inquirer';
import {Genre} from "./genre";
import {Song} from "./song";
import {Album} from "./album";
import {Artist} from "./artist";
import {Group} from "./group";
import {Playlist} from "./playlist";
import {Collection, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './collection'
import { data } from "./data";
//import {DataBase, BDD} from './bdd';

/*
// Menu principal
enum Commands {SONG = 'songs', QUIT = 'Quit'};
enum Operations {ADD = 'Add', DELETE = 'Delete'};

enum firstMenu{
  Añadir = 'Añadir un nuevo tipo de dato',
  Borrar = 'Eliminar un nuevo tipo de dato',
  Modificar = 'Sobreescribir la informacion',
  Salir = 'Salir'
}

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

        case Operations.DELETE:
          switch (option) {
            case 'food':
              this.deleteFood();
              break;
          }
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
*/

data();

enum mainOptionCommands {
  managePlaylist = 'Gestionar una Playlist', 
  manageCollection = 'Gestionar alguna colleccion de canciones, albumes, artistas, etc...',
  quit = 'Salir'
};

enum managePlaylistCommands {
  create = 'Crear una nueva playlist', 
  remove = 'Eliminar una Playlist',
  modify = 'Modificar una Playlist existente',
  sort = 'Ordenar una playlist existente',
  quit = 'Volver atras'
};

enum modifyArtist {
  modifyName = 'Modificar el Nombre de un artista',
  modifyGenres = 'Modificar el genero de un artista',
  modifyListeners = 'Modificar los oyentes de un artista',
  quit = 'Volver atras'
}

enum manageCollectionCommands {
  add = 'Añadir una nueva cancion, album, artista, grupo o genero ',
  remove = 'Eliminar una cancion, album, artista, grupo o genero',
  modify = 'Modificar una una cancion, album, artista, grupo o genero',
  sort = 'Ordenar una cancion, album, artista, grupo o genero',
  quit = 'Volver atras'
}

enum sortCollection {
  titleSong = 'Ordenar por Titulo de la Canciones',
  titleAlbum = 'Ordenar por Nombre del Album',
  titlePlaylist = 'Ordenar por Nombre del Playlist',
  yearAlbum = 'Ordenar por año de lanzamiento del Album',
  reproductionTotal = 'Ordenar por numero de reproducciones totales',
  singleFilter = 'Filtrar por singles lanzados',
  quit = 'volver atras'
}

enum addType {
  addArtist = 'Añadir Artista',
  addSong = 'Añadir Cancion',
  addGenre = 'Añadir Generos',
  addAlbum = 'Añadir Albumes',
  addGroups = 'Añadir Grupos',
  quit = 'volver atras'
}

enum removeType {
  removeArtist = 'Eliminar Artista',
  removeSong = 'Eliminar Cancion',
  removeGenre = 'Eliminar Generos',
  removeAlbumes = 'Eliminar Albumes',
  removeGroups = 'Eliminar Grupos',
  quit = 'volver atras'
}

enum modifyType {
  modifyArtist = 'Modificar Artista',
  modifySong = 'Modificar Cancion',
  modifyGenre = 'Modificar Generos',
  modifyAlbumes = 'Modificar Albumes',
  modifyGroups = 'Modificar Grupos',
  quit = 'volver atras'
}


enum sortPlaylist {
  titleSong = 'Ordenar por Titulo de la Canciones',
  titleAlbum = 'Ordenar por Nombre del artista o grupo',
  titlePlaylist = 'Ordenar por Nombre del Playlist',
  yearAlbum = 'Ordenar por año de lanzamiento ',
  durationSong = 'Ordenar por duracion cancion',
  musicalGenre = 'Ordenar por genero musical',
  reproductionTotal = 'Ordenar por numero de reproducciones totales',
  quit = 'volver atras'
}

enum sortOption {
  asc = "Ordenar Ascendentemente",
  desc = 'Ordenar Descendentemente',
  quit = 'volver atras'
}



class Manage {

  constructor(private playlistArray: Playlist[]) {
    this.playlistArray = playlistArray;
  }
}




// USO DE LOS MENUS PRINCIPALES
//##########################################################################################################################################################################

// Prompt principal
async function mainPrompt(): Promise<void>   {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseSelect',
    message: 'Seleccione una de las siguientes opciones:',
    choices: Object.values(mainOptionCommands),
  });
  switch(answers["chooseSelect"]) {
    case mainOptionCommands.managePlaylist:
      console.log(`Entrando en gestion de PLaylist`);
      promptManagePlaylist();
      break;
    case mainOptionCommands.manageCollection:
      console.log(`Entrando en la gestion de las colecciones`);
      promptManageCollection();
      break;
    case mainOptionCommands.quit:
      console.log(`Saliendo...`);
      break;
  }
}

// Prompt de la gestion de Playlist
async function promptManagePlaylist(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseManageOption',
    message: 'Seleccione lo que desea hacer con las playlist:  ',
    choices: Object.values(managePlaylistCommands),
  });
  switch(answers["chooseManageOption"]) {
    case managePlaylistCommands.create:
      console.log(`creando una nueva Playlist`);
      break;
    case managePlaylistCommands.remove:
      console.log(`Eliminar una PLaylist`);
      break;
    case managePlaylistCommands.sort:
      console.log(`Ordenando una playlist`);
      promptSortPlaylist();
      break;
    case managePlaylistCommands.quit:
      console.log(`Saliendo al menu principal...`);
      mainPrompt();
      break;
  }
}

// Prompt de la gestion de canciones, albumes, etc...
async function promptManageCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseCollectionOption',
    message: 'Seleccione lo que desea hacer con las canciones, albumes, artistas, grupos o generos: ',
    choices: Object.values(manageCollectionCommands),
  });
  switch(answers["chooseCollectionOption"]) {
    case manageCollectionCommands.add:
      console.log(`Añadiendo canciones, albumes, artistas, grupos o generos`);
      promptAddSomething();
      break;
    case manageCollectionCommands.remove:
      console.log(`Eliminar canciones, albumes, artistas, grupos o generos`);
      promptRemoveSomething();
      break;
    case manageCollectionCommands.modify:
      console.log(`modificar una coleccion`);
      promptModifyCollection();
      break;
    case manageCollectionCommands.sort:
      console.log(`Ordenar una coleccion`);
      promptSortCollection();
      break;
    case manageCollectionCommands.quit:
      console.log(`Saliendo al menu principal...`);
      mainPrompt();
      break;
  }
}

//##########################################################################################################################################################################


// MENU DE AÑADIR, ELIMINAR O MODIFICAR
//##########################################################################################################################################################################
// Prompt que se dedica a añadir colecciones
async function promptAddSomething(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'ChooseAddOptions',
    message: 'Seleccione que desea añadir:  ',
    choices: Object.values(addType),
  });
  switch(answers["ChooseAddOptions"]) {
    case addType.addArtist:
      addArtist();
      break;
    case addType.addGenre:
      break;
    case addType.addSong:
      break;
    case addType.addAlbum:
      break;
    case addType.addGroups:
      break;
    case addType.quit:
      console.log(`Saliendo al menu principal...`);
      promptManageCollection();
      break;
  }
}

// Prompt que se dedica a eliminar colecciones
async function promptRemoveSomething(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'ChooseRemoveOptions',
    message: 'Seleccione que desea elegir:  ',
    choices: Object.values(removeType),
  });
  switch(answers["ChooseRemoveOptions"]) {
    case removeType.removeArtist:
      removeArtist();
      break;
    case removeType.removeGenre:
      break;
    case removeType.removeSong:
      break;
    case removeType.removeAlbumes:
      break;
    case removeType.removeGroups:
      break;
    case removeType.quit:
      console.log(`Saliendo al menu principal...`);
      promptManageCollection();
      break;
  }
}

// Menu que da las opciones de que se qere modificar
async function promptModifyCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseModifyOption',
    message: 'Selecciona que deseas modificar:  ',
    choices: Object.values(modifyType),
  });
  switch(answers["chooseModifyOption"]) {
    case modifyType.modifyArtist:
      promptModifyArtist();
      break;
    case modifyType.modifySong:
      break;
    case modifyType.modifyAlbumes:
      break;
    case modifyType.modifyGroups:
      break;
    case modifyType.modifyGenre:
        break;  
    case modifyType.quit:
      console.log(`Saliendo`);
      mainPrompt();
      break;
  }
}



// Prompt de ordenacion de Collecciones
async function promptSortCollection(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'sortPlaylistOption',
    message: 'Seleccione una forma de ordenar:  ',
    choices: Object.values(sortPlaylist),
  });

  switch(answers["sortPlaylistOption"]) {
    case sortPlaylist.titleSong:
      console.log(`Ordenar por Titulo de la Canciones`);
      break;
    case sortPlaylist.titleAlbum:
      console.log(`Ordenar por Nombre del Album`);
      break;
    case sortPlaylist.titlePlaylist:
      console.log(`Ordenar por Nombre del Playlist`);
      break;
    case sortPlaylist.yearAlbum:
      console.log(`Ordenar por año de lanzamiento del Album`);
      break;
    case sortPlaylist.durationSong:
      console.log(`Ordenar por numero de reproducciones totales`); 
      break;
    case sortPlaylist.musicalGenre:
      console.log(`Filtrar por singles lanzados`);
      break;
    case sortPlaylist.quit:
      console.log(`volviendo atras...`);
      promptManagePlaylist();
      break;
  }
}

// Prompt de ordenacion de Playlist
async function promptSortPlaylist(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'sortCollectionOption',
    message: 'Seleccione una forma de ordenar:  ',
    choices: Object.values(sortCollection),
  });
  // console.log(answers); 
  switch(answers["sortCollectionOption"]) {
    case sortCollection.titleSong:
      console.log(`Ordenar por Titulo de la Canciones`);
      // promptSortASCDESC();
      break;
    case sortCollection.titleAlbum:
      console.log(`Ordenar por Nombre del Album`);
      break;
    case sortCollection.titlePlaylist:
      console.log(`Ordenar por Nombre del Playlist`);
      break;
    case sortCollection.yearAlbum:
      console.log(`Ordenar por año de lanzamiento del Album`);
      break;
    case sortCollection.reproductionTotal:
      console.log(`Ordenar por numero de reproducciones totales`);
      break;
    case sortCollection.singleFilter:
      console.log(`Filtrar por singles lanzados`);
      break;
    case sortCollection.quit:
      console.log(`volviendo atras...`);
      promptManageCollection();
      break;
  }
}

//##########################################################################################################################################################################


// MENUS DE LAS OPERACIONES DE UN ARTISTA
//##########################################################################################################################################################################
// menu encargado de dar las diferentes posibilidades de modificacion de un artista
async function promptModifyArtist(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseArtistModify',
    message: 'Selecciona que desea modificar del artista: ',
    choices: Object.values(modifyArtist),
  });
  switch(answers["chooseArtistModify"]) {
    case modifyArtist.modifyName:
      modifyArtistName();
      break;
    case modifyArtist.modifyGenres:
      break;
    case modifyArtist.modifyListeners:
      break;
    case modifyArtist.quit:
      console.log(`Saliendo al menu principal...`);
      promptModifyCollection();
      break;
  }
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
  else promptAddSomething();
}

// menus que pregunta si se desea eliminar otro artista
async function continueRemoveArtist(): Promise<void> {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'continue',
    message: 'Desea añadir otro artista?:',
    choices: ['Si', 'No'],
  })
  if (answers['continue'] == 'Si') 
    removeArtist();
  else mainPrompt();
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

// Menu que elimina un artista de la coleccion
async function removeArtist(): Promise<void> {
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre del artista que desea eliminar: ',
  });
    artistCollection.getList().forEach((item) => {
      if (item.getName() == answers['name']) {
        var index = artistCollection.getList().indexOf(item);
        if (index !== -1) {
          artistCollection.getList().splice(index, 1);
        }
      }
    });
    artistCollection.showCollection();
    continueRemoveArtist();
}

// Menu que modifica el nombre de un artista
async function modifyArtistName(): Promise<void> {
  const answers: any = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre actual del artista: ',
  },
  {
    type: 'input',
    name: 'newName',
    message: 'Introduzca el nuevo nombre del artista: '
  }
  ]);
  artistCollection.getList().forEach((item) => {
    if (item.getName() == answers['name']) {
      item.setName(answers['newName']);
    }
  });
  artistCollection.showCollection();
    //promptModifyArtist();
}

/*
// prompt de ordenacion ascendente y descendente
async function promptSortASCDESC(    ): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseCollectionOption',
    message: 'A ver hijo de la re mil puta que te re mil pario elegi algo ya, la concha de tu vieja, salu2:  ',
    choices: Object.values(manageCollectionCommands),
  });
  console.log(answers); 
  switch(answers["chooseManageOption"]) {
    case manageCollectionCommands.add:
      console.log(`creando una nueva coleccion`);

      break;
    case manageCollectionCommands.remove:
      console.log(`Eliminar una colleccion`);

      break;
    case manageCollectionCommands.quit:
      console.log(`Saliendo al menu principal...`);
      promptManageCollection();
      break;
  }
}
*/
//##########################################################################################################################################################################


// LLAMADA A LA FUNCION PRINCIPAL
//##########################################################################################################################################################################
mainPrompt();
//##########################################################################################################################################################################


