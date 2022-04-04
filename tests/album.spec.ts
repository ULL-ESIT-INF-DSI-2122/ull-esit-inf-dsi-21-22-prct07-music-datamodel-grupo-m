import 'mocha';
import {expect} from 'chai';
import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';

// Los [] en blanco son canciones que no estan definidos
const LikinParkAlbum = new Album('Minutes to Midnight',["Likin Park"], 2001, ['ROCK'], []);
const DojaAlbum = new Album('Planet Her',["Doja Cat"], 2021, ['POP'], []);
const LilAlbum = new Album('Montero',["Lil Nash X"], 2021, ['TRAP'], []);
const MarcAlbum = new Album('3.0',["Marc Anthony"], 2013, ['SALSA'], []);
const HendrixAlbum = new Album('Electric LadyLand',["Jimi Hendrix"], 1968, ['BLUES'], []);
const TiestoAlbum = new Album('A Town Called Paradise',["Tiesto"], 2014, ['EDM'], []);

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    expect(LikinParkAlbum).to.exist;
    expect(DojaAlbum).to.exist;
    expect(LilAlbum).to.exist;
    expect(MarcAlbum).to.exist;
    expect(HendrixAlbum).to.exist;
    expect(TiestoAlbum).to.exist;
  });
  it('Test de Getters y Setters de la Clase Album', ()=> {

  });
  it('Test de Métodos de la clase Album', ()=> {

  });

});