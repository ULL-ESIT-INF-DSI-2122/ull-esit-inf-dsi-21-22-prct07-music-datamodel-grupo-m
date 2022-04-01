import 'mocha';
import {expect} from 'chai';
import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';

const Chester = new Artista('Chester Bennington', [LinkinPark], ['ROCK'], [rockalbum],[listCanciones], 1000000, 0 );
const numb = new Cancion('Numb', Chester, 3.06, ['ROCK'], true, 2000000);
const listCanciones = new Playlist('Linkin Park', [numb], 3.06, ['ROCK']);
const Dave = new Artista('Dave Farrell', [LinkinPark], ['ROCK'], [rockalbum],[listCanciones], 1000, 0 );
const rockalbum = new Album('Minutes to Midnight', LinkinPark, 43.23, ['ROCK'], listCanciones);
const LinkinPark = new Grupo('Linkin Park', [Chester, Dave], 1996, ['ROCK'], [rockalbum], 30000000 );
const Rock = new Genero('ROCK',[LinkinPark], [rockalbum], [numb]);

describe('Pruebas unitarias de la clase genero', ()=>{
  it('Purebas de instancia de genero', ()=>{
    expect(Rock).to.exist;
    expect(Rock).not.null;
  });
});
