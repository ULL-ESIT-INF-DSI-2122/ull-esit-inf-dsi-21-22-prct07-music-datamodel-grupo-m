import lowdb from 'lowdb';
import FileSync from "lowdb/adapters/FileSync";

import {Song} from './song';
import {Genre} from './genre';
import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {Collection} from './collection';
import { MapCollection } from './map';

/*

export type BDD = {
  songs: Song[],
  genre: Genre[],
  album: Album[],
  artist: Artist[],
  group: Group[]
}

export class DataBase extends MapCollection {
  
  private database: lowdb.LowdbSync<BDD>;
  constructor() {
    super();
    this.database = lowdb(new FileSync("./src/database.json"));
    this.loadSong();
  }

  loadSong() {
    if (this.database.has("Songs").value()) {
      const dbItems = this.database.get("Songs").value();
      let aux: Song;
      dbItems.forEach((item: Song) => {
        super.addSong(aux);
      });
    } else {
      this.database.set("Songs", []).write();
    }
  }


  addSon(songForAdd: Song) {
    super.addSong(songForAdd);
    this.store('Song');
  }

  private store(type: string) {
    switch (type) {
      case 'Song':
        this.database.set("songs", this.songs.values()).write();
    }
  }
}
*/