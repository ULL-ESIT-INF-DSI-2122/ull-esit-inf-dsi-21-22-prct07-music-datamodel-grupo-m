import {Song} from './song';
import {Genre} from './genre';
import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {Collection} from './collection';

export class MapCollection {
  protected songs: Map<string, Song>;
  protected genres: Map<string, Genre>;
  protected albums: Map<string, Album>;
  protected artists: Map<string, Artist>;
  protected groups: Map<string, Group>;

  constructor(){
    this.songs = new Map<string,Song>();
    this.genres = new Map<string,Genre>();
    this.albums = new Map<string,Album>();
    this.artists = new Map<string,Artist>();
    this.groups = new Map<string,Group>();
  }

  addSong(newSong: Song) {
    this.songs.set(newSong.getName(), newSong);
  }


}