import 'mocha';
import {expect} from 'chai';
import {playlistCollection} from '../src/collection';
import {data} from '../src/data';


data();

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Pruebas de instancia de genero', ()=>{
    playlistCollection.getList().forEach((playlist) => {
      expect(playlist).to.exist;
    });
  });
});  