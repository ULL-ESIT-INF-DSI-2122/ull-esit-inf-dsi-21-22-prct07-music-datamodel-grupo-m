import 'mocha';
import {expect} from 'chai';
import {artistCollection} from '../src/collection';
import {data} from '../src/data';


data();

describe('Tests de la clase Artista', ()=>{
  it('Test de instancia de los diferentes artistas', ()=> {
    artistCollection.getList().forEach((artist) => {
      expect(artist).to.exist;
    });
  });
  it('Test de Métodos de la clase Artistas', ()=> {
    expect(artistCollection.getList()[2].getOyentesMensual()).to.eql(20420352);
  });

});