import 'mocha';
import {expect} from 'chai';
import {genreCollection} from '../src/database';
import {data} from '../src/data';


data();

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Pruebas de instancia de genero', ()=>{
    genreCollection.getList().forEach((genre) => {
      expect(genre).to.exist;
    });
  });
});  