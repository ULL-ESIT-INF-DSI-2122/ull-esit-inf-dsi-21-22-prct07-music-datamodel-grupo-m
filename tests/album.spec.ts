import 'mocha';
import {expect} from 'chai';
<<<<<<< HEAD
import {data} from "../src/data";
// import { Album } from '../src/album';
// import {Grupo} from '../src/grupos';
// import {Playlist} from '../src/playlist';
// import {Album} from '../src/album';
// import {Cancion} from '../src/cancion';
// import {Artista} from '../src/artistas';

// Los [] en blanco son canciones que no estan definidos
// const LikinParkAlbum = new Album('Minutes to Midnight',[], 2001, ['ROCK'], []);
// const DojaAlbum = new Album('Planet Her',[], 2021, ['POP'], []);
// const LilAlbum = new Album('Montero',[], 2021, ['TRAP'], []);
// const MarcAlbum = new Album('3.0',[], 2013, ['SALSA'], []);
// const HendrixAlbum = new Album('Electric LadyLand',[], 1968, ['BLUES'], []);
// const TiestoAlbum = new Album('A Town Called Paradise',[], 2014, ['EDM'], []);

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    
=======
import {albumCollection} from '../src/database';
import {data} from '../src/data';
//import {DataBase, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './database'


data();

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    albumCollection.getList().forEach((album) => {
      expect(album).to.exist;
    });
>>>>>>> 4ab10abbc02b0db472032b94a64081423a5243b0
  });
  it('Test de Getters y Setters de la Clase Album', ()=> {

  });
  it('Test de Métodos de la clase Album', ()=> {

  });

});