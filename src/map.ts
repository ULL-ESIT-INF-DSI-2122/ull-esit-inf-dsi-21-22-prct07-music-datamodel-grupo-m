import {Song} from './song';
import {Genre} from './genre';
import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {Collection} from './collection';

export class MapCollection {


  constructor(protected songsMap: Map<number, Song>){
    this.songsMap = new Map<number,Song>();
  }

  addSong(newSong: Song) {
    this.songsMap.set(newSong.getId(), newSong);
  }


}