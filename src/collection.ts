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
// export const playlistCollection = new Collection<Playlist>();
