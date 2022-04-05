import 'mocha';
import {expect} from 'chai';
import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';



const Chester = new Artista('Chester Bennington', ['ROCK'], 1000000, 1000 );
const Dave = new Artista('Dave Farrell', ['ROCK'], 1000, 5);

const LinkinPark = new Grupo('Linkin Park', [Chester, Dave], 1996, ['ROCK'], 30000000 );
const rockalbum = new Album('Minutes to Midnight',[LinkinPark], 2001, ['ROCK'], []);
const numb = new Cancion('Numb', [LinkinPark], 3.06, ['ROCK'], true, 2000000);

const listCanciones = new Playlist('Linkin Park', [numb], 3.06, ['ROCK']);
const rock = new Genero('ROCK', [Dave, Chester, LinkinPark], [rockalbum], [numb]);

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Purebas de instancia de genero', ()=>{
    expect(LinkinPark).to.exist;
    expect(rockalbum).not.null;
  });
});
