import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {Genre, genreInfo} from './genre';
import {Playlist} from './playlist';
import {Song} from './song';

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

