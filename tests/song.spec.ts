import 'mocha';
import {expect} from 'chai';
import {songCollection} from '../src/collection';
import {data} from '../src/data';


data();

describe('Tests de la clase Cancion', ()=>{
  it('Test de instancia de los diferentes Canciones', ()=> {
    songCollection.getList().forEach((song) => {
      expect(song).to.exist;
    });
  });
  it('Test de Getters y Setters de la Clase Artistas', ()=> {

  });
  it('Test de Métodos de la clase Artistas', ()=> {

  });

});