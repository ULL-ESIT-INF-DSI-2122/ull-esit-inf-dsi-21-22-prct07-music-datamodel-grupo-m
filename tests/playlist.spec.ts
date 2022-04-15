import 'mocha';
import {expect} from 'chai';
import {songCollection, groupCollection, playCollection} from '../src/Gestor/collection';
import {data} from '../src/data';
import { Playlist } from '../src/Basic_Class/playlist';


data();

describe('Pruebas unitarias de la clase Playlist', ()=>{
  it ('Pruebas de instancia de Playlist', ()=>{
    playCollection.getList().forEach((playlist) => {
      expect(playlist).to.exist;
    });
  });
  it ('Test de los metodos del grupo numero 1', ()=>{
    expect(playCollection.getList()[0].getName()).to.be.eql('Playlist1');
    expect(playCollection.getList()[0].getSongs()).to.be.eql([songCollection.getList()[0]]);
    expect(playCollection.getList()[0].getCreateYear()).to.be.eql(1990);
    expect(playCollection.getList()[0].getGenres()).to.eql(['ROCK']);
    expect(playCollection.getList()[0].getDuration()).to.be.eql(10);
  });

  it ('Test de los metodos del grupo numero 2', ()=>{
    expect(playCollection.getList()[1].getName()).to.be.eql('Playlist2');
    expect(playCollection.getList()[1].getSongs()).to.be.eql([songCollection.getList()[1], songCollection.getList()[4]]);
    expect(playCollection.getList()[1].getCreateYear()).to.be.eql(2012);
    expect(playCollection.getList()[1].getGenres()).to.eql(['POP', 'RAP']);
    expect(playCollection.getList()[1].getDuration()).to.be.eql(40);
  });

  it ('Test de los metodos del grupo numero 3', ()=>{
    expect(playCollection.getList()[2].getName()).to.be.eql('Playlist3');
    expect(playCollection.getList()[2].getSongs()).to.be.eql([songCollection.getList()[2], songCollection.getList()[4]]);
    expect(playCollection.getList()[2].getCreateYear()).to.be.eql(2010);
    expect(playCollection.getList()[2].getGenres()).to.eql(['RAP']);
    expect(playCollection.getList()[2].getDuration()).to.be.eql(15);
  });

  it ('Test de los metodos del grupo numero 4', ()=>{
    expect(playCollection.getList()[3].getName()).to.be.eql('Playlist4');
    expect(playCollection.getList()[3].getSongs()).to.be.eql([songCollection.getList()[42], songCollection.getList()[46], songCollection.getList()[47]]);
    expect(playCollection.getList()[3].getCreateYear()).to.be.eql(2015);
    expect(playCollection.getList()[3].getGenres()).to.eql(['PUNK']);
    expect(playCollection.getList()[3].getDuration()).to.be.eql(20);
  });

  it ('Test de los metodos del grupo numero 5', ()=>{
    expect(playCollection.getList()[4].getName()).to.be.eql('Playlist5');
    expect(playCollection.getList()[4].getSongs()).to.be.eql([songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65]]);
    expect(playCollection.getList()[4].getCreateYear()).to.be.eql(2021);
    expect(playCollection.getList()[4].getGenres()).to.eql(['INDIE']);
    expect(playCollection.getList()[4].getDuration()).to.be.eql(50);
  });
});  