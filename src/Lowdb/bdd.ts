import lowdb from 'lowdb';
import FileSync from "lowdb/adapters/FileSync";

import {Genre} from "../Basic_Class/genre";
import {Song} from "../Basic_Class/song";
import {Album} from "../Basic_Class/album";
import {Artist} from "../Basic_Class/artist";
import {Group} from "../Basic_Class/group";
import {Playlist} from "../Basic_Class/playlist";

import {Collection} from '../Gestor/collection';
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