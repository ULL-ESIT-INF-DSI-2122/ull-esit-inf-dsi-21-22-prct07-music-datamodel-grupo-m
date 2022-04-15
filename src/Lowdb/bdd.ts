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
/**
 * esquema que definira como se almacenara la base de datos
 */
export type BDD = {
  songs: Song[],
  genre: Genre[],
  album: Album[],
  artist: Artist[],
  group: Group[]
}

/**
 * Clase que implementa la base de datos de LowDB (ACTUALMENTE NO FUNCIONA)
 */
export class DataBase extends MapCollection {
  /**
   * constructor por defecto que carga en los maps desde el fichero que implementa la base de datos
   */
  private database: lowdb.LowdbSync<BDD>;
  constructor() {
    super();
    this.database = lowdb(new FileSync("./src/database.json"));
    this.loadSong();
  }

  /**
   * metodo que carga una cancion desde la base de datos
   */
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

  /**
   * metodo que añade una cancion a la base de datos de lowdb
   */
  addSong(songForAdd: Song) {
    super.addSong(songForAdd);
    this.store('Song');
  }

  /**
   * metodo que almacena un tipo de dato dentro 
   */
  private store(type: string) {
    switch (type) {
      case 'Song':
        this.database.set("songs", this.songsMap.values()).write();
    }
  }
}
