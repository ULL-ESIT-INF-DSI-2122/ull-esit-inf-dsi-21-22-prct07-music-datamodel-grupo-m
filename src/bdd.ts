import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import {Song} from './song';
import {Genre} from './genre';
import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {Collection} from './collection';

export type BDD = {
  songs: Song[],
  genre: Genre[],
  album: Album[],
  artist: Artist[],
  group: Group[]
}

export class DataBase {
  private database: lowdb.LowdbSync<BDD>;
  constructor() {
    this.database = lowdb();
  }
}