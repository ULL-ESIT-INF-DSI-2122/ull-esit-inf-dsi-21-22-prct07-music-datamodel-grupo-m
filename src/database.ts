import {Album} from './album';
import {Artist} from './artistas';
import {Group} from './grupos';
import {Genre, genreInfo} from './generos';
import {Playlist} from './playlist';
import {Song} from './cancion';

export class DataBase<T> {
  
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
}

export const albumCollection = new DataBase<Album>();
export const artistCollection = new DataBase<Artist>();
export const groupCollection = new DataBase<Group>();
export const genreCollection = new DataBase<Genre>();
export const songCollection = new DataBase<Song>();
export const playlistCollection = new DataBase<Playlist>();