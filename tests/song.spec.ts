import 'mocha';
import {expect} from 'chai';
import {songCollection, artistCollection} from '../src/collection';
import {data} from '../src/data';


data();

describe('Tests de la clase Cancion', ()=>{
  it('Test de instancia de los diferentes Canciones', ()=> {
    songCollection.getList().forEach((song) => {
      expect(song).to.exist;
    });
  });
  it ('Test de los metodos del Cancion numero 1', ()=>{
    expect(songCollection.getList()[0].getName()).to.be.eql('Getting Older');
    expect(songCollection.getList()[0].getAutor()).to.be.eql([artistCollection.getList()[0]]);
    expect(songCollection.getList()[0].getDuration()).to.be.eql(4.04);
    expect(songCollection.getList()[0].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[0].getReproducciones()).to.be.eql(82368601);
    expect(songCollection.getList()[0].getSingle()).to.be.eql(false);
  });

});