import 'mocha';
import {expect} from 'chai';
import {groupCollection} from '../src/database';
import {data} from '../src/data';


data();

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Pruebas de instancia de genero', ()=>{
    groupCollection.getList().forEach((group) => {
      expect(group).to.exist;
    });
  });
  it ('Comprobando genero/s del primer grupo', ()=>{
    expect(groupCollection.getList()[0].getGenero()).to.eql(['ROCK', 'PUNK']);
  });
});  