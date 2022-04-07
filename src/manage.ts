import {Genre} from "./genre";
import {Song} from "./song";
import {Album} from "./album";
import {Artist} from "./artist";
import {Group} from "./group";
import {Playlist} from "./playlist";
import {Collection} from "./collection";
import { data } from "./data";

import * as readline from 'readline';

export const inquirer = require('inquirer');

// Menu principal

enum firstMenu{
  Añadir = 'Añadir un nuevo tipo de dato',
  Borrar = 'Eliminar un nuevo tipo de dato',
  Modificar = 'Sobreescribir la informacion',
  Salir = 'Salir'
}

/**
 * Clase encargada de hacer la gestion de playlist
 */
class Manage {
  protected playlist: Playlist[] = [];
  protected itemMap = new Map< number, Playlist[]>();
  constructor() {
    
  }
}
