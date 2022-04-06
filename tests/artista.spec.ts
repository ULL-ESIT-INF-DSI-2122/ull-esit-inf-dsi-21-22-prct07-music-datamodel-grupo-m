import 'mocha';
import {expect} from 'chai';
import {artistCollection} from '../src/database';
import {data} from '../src/data';


data();

describe('Tests de la clase Artista', ()=>{
  it('Test de instancia de los diferentes artistas', ()=> {
    artistCollection.getList().forEach((artist) => {
      expect(artist).to.exist;
    });
  });
  it('Test de Getters y Setters de la Clase Artistas', ()=> {

  });
  it('Test de Métodos de la clase Artistas', ()=> {

  });

});