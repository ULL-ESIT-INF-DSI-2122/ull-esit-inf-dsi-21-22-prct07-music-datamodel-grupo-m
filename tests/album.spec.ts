import 'mocha';
import {expect} from 'chai';
import {data} from "../src/data";
import {albumCollection, artistCollection, groupCollection} from '../src/collection';
// //import {DataBase, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './database'


data();

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    albumCollection.getList().forEach((album) => {
      expect(album).to.exist;
    });
  });
  it ('Test de los metodos del Album numero 1', ()=>{
    expect(albumCollection.getList()[0].getNombre()).to.be.eql('Happier Than Ever');
    expect(albumCollection.getList()[0].getAnio()).to.be.eql(2021);
    expect(albumCollection.getList()[0].getGenero()).to.be.eql(['POP', 'ELECTROPOP']);
    expect(albumCollection.getList()[0].getArtist()).to.be.eql([artistCollection.getList()[0]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });

  it ('Test de los metodos del Album numero 2', ()=>{
    expect(albumCollection.getList()[1].getNombre()).to.be.eql("Teatro d'ira - Vol.I");
    expect(albumCollection.getList()[1].getAnio()).to.be.eql(2021);
    expect(albumCollection.getList()[1].getGenero()).to.be.eql(['ROCK', 'ALTERNATIVO']);
    expect(albumCollection.getList()[1].getArtist()).to.be.eql([groupCollection.getList()[1]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });

  it ('Test de los metodos del Album numero 3', ()=>{
    expect(albumCollection.getList()[2].getNombre()).to.be.eql('MONTERO');
    expect(albumCollection.getList()[2].getAnio()).to.be.eql(2021);
    expect(albumCollection.getList()[2].getGenero()).to.be.eql(['POP', 'RAP']);
    expect(albumCollection.getList()[2].getArtist()).to.be.eql([artistCollection.getList()[1]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });

  it ('Test de los metodos del Album numero 4', ()=>{
    expect(albumCollection.getList()[3].getNombre()).to.be.eql('Father of All...');
    expect(albumCollection.getList()[3].getAnio()).to.be.eql(2020);
    expect(albumCollection.getList()[3].getGenero()).to.be.eql(['ROCK', 'PUNK']);
    expect(albumCollection.getList()[3].getArtist()).to.be.eql([groupCollection.getList()[0]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });

  it ('Test de los metodos del Album numero 5', ()=>{
    expect(albumCollection.getList()[4].getNombre()).to.be.eql('ANTI');
    expect(albumCollection.getList()[4].getAnio()).to.be.eql(2016);
    expect(albumCollection.getList()[4].getGenero()).to.be.eql(['POP', 'R&B', 'HIP-HOP']);
    expect(albumCollection.getList()[4].getArtist()).to.be.eql([artistCollection.getList()[5]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });

  it ('Test de los metodos del Album numero 6', ()=>{
    expect(albumCollection.getList()[5].getNombre()).to.be.eql('O My Heart');
    expect(albumCollection.getList()[5].getAnio()).to.be.eql(2008);
    expect(albumCollection.getList()[5].getGenero()).to.be.eql(['ROCK', 'INDIE']);
    expect(albumCollection.getList()[5].getArtist()).to.be.eql([groupCollection.getList()[3]]);
    //expect(albumCollection.getList()[0].getTracklist()).to.be.eql();
  });
});