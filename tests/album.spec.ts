import 'mocha';
import {expect} from 'chai';
import {data} from "../src/data";
import {albumCollection} from '../src/collection';
// //import {DataBase, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './database'


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