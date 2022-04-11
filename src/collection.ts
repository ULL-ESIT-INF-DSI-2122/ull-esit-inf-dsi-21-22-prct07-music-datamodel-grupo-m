import {Genre} from "./Basic_Class/genre";
import {Song} from "./Basic_Class/song";
import {Album} from "./Basic_Class/album";
import {Artist} from "./Basic_Class/artist";
import {Group} from "./Basic_Class/group";
import {Playlist} from "./Basic_Class/playlist";
import { data } from "./data";

export class Collection<T> {
  
  private list : T[] = [];
  constructor() {}

  getList() : T[] {
    return this.list;
  }

  addItem(item: T) : void {
    this.list.push(item);
  }

  setList(newList: T[]) : void {
    this.list = newList;
  }
 
  searchItem(item: T): T | void {
    const search = this.list.find((element) => element === item);
    return (search) ? search : console.log('No existe');
  }

  getLenght(): number {
    return this.list.length;
  }

  showCollection(): void {
    this.list.forEach((T) => {
      console.log(T);
    });
  }

}

export const albumCollection = new Collection<Album>();
export const artistCollection = new Collection<Artist>();
export const groupCollection = new Collection<Group>();
export const genreCollection = new Collection<Genre>();
export const songCollection = new Collection<Song>();
export const playlistCollection = new Collection<Playlist>();


  /*
    Alfabéticamente por título de la canción, ascendente y descendente.
    Alfabéticamente por nombre del álbum, ascendente y descendente.
    Alfabéticamente por nombre de la playlist, ascendente y descendente.
    Por año de lanzamiento del álbum, ascendente y descendente.
    Por número de reproducciones totales, ascendente y descendente.
    Filtrar para mostrar únicamente los singles lanzados.

  */


export function sortTituloCollection(selec: Boolean = true): Song[] {
  if (selec == true) {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }

}
  

export function sortAlbumCollection(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}


export function sortAlbumYear(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getYear() < b.getYear()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getYear() > b.getYear()) ? -1 : 1);
  }
}


export function sortListenersTotal(selec: Boolean = true): Artist[] {
  if (selec == true) {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() < b.getOyentesMensual()) ? -1 : 1);
  } else {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() > b.getOyentesMensual()) ? -1 : 1);
  }
}

export function sortSingles(): Song[] {
  let singleSong: Song[] = [];
  songCollection.getList().forEach((item) => {
    if ( item.getSingle() == true) {
      singleSong.push(item);
    }
  });
  return singleSong;
}
  


data();
// console.log(sortTituloCollection(false));
// console.log(sortAlbumYear(false));
// console.log(sortListenersTotal());
//console.log(sortSingles());
