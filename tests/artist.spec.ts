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

  it('Test de Métodos del artista numero 1', ()=> {
    expect(artistCollection.getList()[0].getName()).to.be.eql('Billie Eillish');
    expect(artistCollection.getList()[0].getGenre()).to.be.eql(['POP', 'ALTERNATIVO']);
    expect(artistCollection.getList()[0].getOyentesMensual()).to.eql(47949051);
  });

  it('Test de Métodos del artista numero 2', ()=> {
    expect(artistCollection.getList()[1].getName()).to.be.eql('Lil Nash X');
    expect(artistCollection.getList()[1].getGenre()).to.be.eql(['POP', 'RAP']);
    expect(artistCollection.getList()[1].getOyentesMensual()).to.eql(49522921);
  });

  it('Test de Métodos del artista numero 3', ()=> {
    expect(artistCollection.getList()[2].getName()).to.be.eql('Damiano David');
    expect(artistCollection.getList()[2].getGenre()).to.be.eql(['ROCK', 'POP']);
    expect(artistCollection.getList()[2].getOyentesMensual()).to.eql(20420352);
  });

  it('Test de Métodos del artista numero 4', ()=> {
    expect(artistCollection.getList()[3].getName()).to.be.eql('Billie Joe Armstrong');
    expect(artistCollection.getList()[3].getGenre()).to.be.eql(['ROCK', 'PUNK']);
    expect(artistCollection.getList()[3].getOyentesMensual()).to.eql(20387595);
  });

  it('Test de Métodos del artista numero 5', ()=> {
    expect(artistCollection.getList()[4].getName()).to.be.eql('Victoria de Angelis');
    expect(artistCollection.getList()[4].getGenre()).to.be.eql(['ROCK', 'POP']);
    expect(artistCollection.getList()[4].getOyentesMensual()).to.eql(20420352);
  });

  it('Test de Métodos del artista numero 6', ()=> {
    expect(artistCollection.getList()[5].getName()).to.be.eql('Rihanna');
    expect(artistCollection.getList()[5].getGenre()).to.be.eql(['POP', 'REGGAE', 'HIP-HOP', 'R&B']);
    expect(artistCollection.getList()[5].getOyentesMensual()).to.eql(48806602);
  });


});