import 'mocha';
import {expect} from 'chai';
import {albumCollection} from '../src/database';
import {data} from '../src/data';
//import {DataBase, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './database'


/*import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';

// Los [] en blanco son canciones que no estan definidos
const LikinParkAlbum = new Album('Minutes to Midnight',[], 2001, ['ROCK'], []);
const DojaAlbum = new Album('Planet Her',[], 2021, ['POP'], []);
const LilAlbum = new Album('Montero',[], 2021, ['TRAP'], []);
const MarcAlbum = new Album('3.0',[], 2013, ['SALSA'], []);
const HendrixAlbum = new Album('Electric LadyLand',[], 1968, ['BLUES'], []);
const TiestoAlbum = new Album('A Town Called Paradise',[], 2014, ['EDM'], []);*/

data();

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    albumCollection.getList().forEach((album) => {
      expect(album).to.exist;
    });
  });
  it('Test de Getters y Setters de la Clase Album', ()=> {

  });
  it('Test de Métodos de la clase Album', ()=> {

  });

});