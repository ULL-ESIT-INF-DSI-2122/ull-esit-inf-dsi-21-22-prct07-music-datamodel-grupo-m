import 'mocha';
import {expect} from 'chai';
import {artistCollection, groupCollection} from '../src/collection';
import {data} from '../src/data';


data();

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Pruebas de instancia de genero', ()=>{
    groupCollection.getList().forEach((group) => {
      expect(group).to.exist;
    });
  });
  it ('Test de los metodos del grupo numero 1', ()=>{
    expect(groupCollection.getList()[0].getNombre()).to.be.eql('Green Day');
    expect(groupCollection.getList()[0].getArtistas()).to.be.eql([artistCollection.getList()[3]]);
    expect(groupCollection.getList()[0].getAnioCreacion()).to.be.eql(1986);
    expect(groupCollection.getList()[0].getGenero()).to.eql(['ROCK', 'PUNK']);
    expect(groupCollection.getList()[0].getOyentes()).to.be.eql(19999390);
  });

  it ('Test de los metodos del grupo numero 2', ()=>{
    expect(groupCollection.getList()[1].getNombre()).to.be.eql('Maneskin');
    expect(groupCollection.getList()[1].getArtistas()).to.be.eql([artistCollection.getList()[2], artistCollection.getList()[4]]);
    expect(groupCollection.getList()[1].getAnioCreacion()).to.be.eql(2016);
    expect(groupCollection.getList()[1].getGenero()).to.eql(['ROCK', 'ALTERNATIVO']);
    expect(groupCollection.getList()[1].getOyentes()).to.be.eql(20420352);
  });

  it ('Test de los metodos del grupo numero 3', ()=>{
    expect(groupCollection.getList()[2].getNombre()).to.be.eql('The Longshot');
    expect(groupCollection.getList()[2].getArtistas()).to.be.eql([artistCollection.getList()[3]]);
    expect(groupCollection.getList()[2].getAnioCreacion()).to.be.eql(2018);
    expect(groupCollection.getList()[2].getGenero()).to.eql(['ROCK', 'PUNK']);
    expect(groupCollection.getList()[2].getOyentes()).to.be.eql(83135);
  });

});  