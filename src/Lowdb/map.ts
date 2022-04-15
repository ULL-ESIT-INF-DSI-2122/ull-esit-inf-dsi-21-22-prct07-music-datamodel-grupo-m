import {Genre} from "../Basic_Class/genre";
import {Song} from "../Basic_Class/song";
import {Album} from "../Basic_Class/album";
import {Artist} from "../Basic_Class/artist";
import {Group} from "../Basic_Class/group";
import {Playlist} from "../Basic_Class/playlist";
import {Collection} from '../Gestor/collection';

export class MapCollection {


  constructor(protected songsMap: Map<number, Song>){
    this.songsMap = new Map<number,Song>();
  }

  addSong(newSong: Song) {
    this.songsMap.set(newSong.getId(), newSong);
  }


}