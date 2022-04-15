import 'mocha';
import {expect} from 'chai';
import {songCollection, artistCollection} from '../src/Gestor/collection';
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
    expect(songCollection.getList()[0].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[0].getDuration()).to.be.eql(4.04);
    expect(songCollection.getList()[0].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[0].getReproducciones()).to.be.eql(82368601);
    expect(songCollection.getList()[0].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 2', ()=>{
    expect(songCollection.getList()[1].getName()).to.be.eql("I Didn't Change My Number");
    expect(songCollection.getList()[1].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[1].getDuration()).to.be.eql(2.38);
    expect(songCollection.getList()[1].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[1].getReproducciones()).to.be.eql(78111966);
    expect(songCollection.getList()[1].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 3', ()=>{
    expect(songCollection.getList()[2].getName()).to.be.eql('Billie Bossa Nova');
    expect(songCollection.getList()[2].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[2].getDuration()).to.be.eql(3.16);
    expect(songCollection.getList()[2].getGenres()).to.be.eql(['R&B']);
    expect(songCollection.getList()[2].getReproducciones()).to.be.eql(87082953);
    expect(songCollection.getList()[2].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 4', ()=>{
    expect(songCollection.getList()[3].getName()).to.be.eql('my future');
    expect(songCollection.getList()[3].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[3].getDuration()).to.be.eql(3.30);
    expect(songCollection.getList()[3].getGenres()).to.be.eql(['R&B']);
    expect(songCollection.getList()[3].getReproducciones()).to.be.eql(306917025);
    expect(songCollection.getList()[3].getSingle()).to.be.eql(true);
  });

  it ('Test de los metodos del Cancion numero 5', ()=>{
    expect(songCollection.getList()[4].getName()).to.be.eql('Oxytocin');
    expect(songCollection.getList()[4].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[4].getDuration()).to.be.eql(3.30);
    expect(songCollection.getList()[4].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[4].getReproducciones()).to.be.eql(82436281);
    expect(songCollection.getList()[4].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 6', ()=>{
    expect(songCollection.getList()[5].getName()).to.be.eql('GOLDWING');
    expect(songCollection.getList()[5].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[5].getDuration()).to.be.eql(2.31);
    expect(songCollection.getList()[5].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[5].getReproducciones()).to.be.eql(50221104);
    expect(songCollection.getList()[5].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 7', ()=>{
    expect(songCollection.getList()[6].getName()).to.be.eql('Lost Cause');
    expect(songCollection.getList()[6].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[6].getDuration()).to.be.eql(3.32);
    expect(songCollection.getList()[6].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[6].getReproducciones()).to.be.eql(181748562);
    expect(songCollection.getList()[6].getSingle()).to.be.eql(true);
  });

  it ('Test de los metodos del Cancion numero 8', ()=>{
    expect(songCollection.getList()[7].getName()).to.be.eql("Halley's Comet");
    expect(songCollection.getList()[7].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[7].getDuration()).to.be.eql(3.54);
    expect(songCollection.getList()[7].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[7].getReproducciones()).to.be.eql(74773544);
    expect(songCollection.getList()[7].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 9', ()=>{
    expect(songCollection.getList()[8].getName()).to.be.eql('Not My Responsability');
    expect(songCollection.getList()[8].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[8].getDuration()).to.be.eql(3.47);
    expect(songCollection.getList()[8].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[8].getReproducciones()).to.be.eql(36511925);
    expect(songCollection.getList()[8].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 10', ()=>{
    expect(songCollection.getList()[9].getName()).to.be.eql('OverHeated');
    expect(songCollection.getList()[9].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[9].getDuration()).to.be.eql(3.34);
    expect(songCollection.getList()[9].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[9].getReproducciones()).to.be.eql(41873321);
    expect(songCollection.getList()[9].getSingle()).to.be.eql(false);
  });

});