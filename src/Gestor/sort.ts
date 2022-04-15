import { data } from "../data";
import {Genre} from "../Basic_Class/genre";
import {Song} from "../Basic_Class/song";
import {Album} from "../Basic_Class/album";
import {Artist} from "../Basic_Class/artist";
import {Group} from "../Basic_Class/group";
import {Playlist} from "../Basic_Class/playlist";
import {Collection, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playCollection} from './collection'


/**
 * Funcion externa a las clases que ordena una coleccion por titulo de la canciones
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada por titulo de forma ascendente o descendente
 */
export function sortTituloCollection(selec: Boolean = true): Song[] {
  if (selec == true) {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}

/**
 * Funcion externa a las clases que ordena una coleccion por nombre del album
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada por  nombre del album de forma ascendente o descendente
 */
export function sortAlbumCollection(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}
  
/**
 * Funcion externa a las clases que ordena una coleccion por año de lanzamiento del album
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada por año de lanzamiento de forma ascendente o descendente
 */
export function sortAlbumYear(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getYear() < b.getYear()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getYear() > b.getYear()) ? -1 : 1);
  }
}
  
/**
 * Funcion externa a las clases que ordena una coleccion por cantidad de oyentes totales
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada por oyentes totales de forma ascendente o descendente
 */
export function sortListenersTotal(selec: Boolean = true): Artist[] {
  if (selec == true) {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() < b.getOyentesMensual()) ? -1 : 1);
  } else {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() > b.getOyentesMensual()) ? -1 : 1);
  }
}
 
/**
 * Funcion externa a las clases que muestra todos los elementos que fueron singles de la coleccion de canciones
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada de singles de la coleccion de canciones
 */
export function sortSingles(): Song[] {
  let singleSong: Song[] = [];
  songCollection.getList().forEach((item) => {
      if ( item.getSingle() == true) {
        singleSong.push(item);
      }
  });
  return singleSong;
}

/**
 * Funcion externa a las clases que ordena una coleccion por titulo de la canciones
 * @param selec flag que determina si se ordena ascendente o descende
 * @returns dependiente del flag devuelve la lista ordenada por titulo de forma ascendente o descendente
 */
 export function sortTituloPlaylist(selec: Boolean = true): Playlist[] {
  if (selec == true) {
    return playCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return playCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}