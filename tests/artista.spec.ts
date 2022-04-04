import 'mocha';
import {expect} from 'chai';
import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';

// Los [] en blanco son albumes que no estan definidos
const Chester = new Artista('Chester Bennington', ['ROCK'], [], 1000000, 1000 );
const Dave = new Artista('Dave Farrell', ['ROCK'], [], 1000, 5);
const NF = new Artista('Nathan John Feuerstein', ['HIP-HOP'], [], 13558190, 6860412);
const BobMarley = new Artista('Jimi Hendrix', ['REGGAE'], [], 13456698,104396555);
const Tiesto = new Artista('Tijs Michiel Verwest', ['EDM'], [], 40339905, 6278369);
const DojaCat = new Artista('Amala Ratna Zandile Dlamini', ['POP'], [], 55866049, 17299408);
const JimiHendrix = new Artista('James Marshall Hendrix', ['BLUES'], [], 7587951, 5541782);
const LilNashX = new Artista('Montero Lamar Hill', ['TRAP'], [], 49539739, 10217255);
const DonOmar = new Artista('Dave Farrell', ['REGGEATON'], [], 21064472, 6909750);
const MarcAnthony = new Artista('Marco Antonio Muñiz Rivera', ['SALSA'], [], 10171402, 6992643);

describe('Tests de la clase Artista', ()=>{
  it('Test de instancia de los diferentes artistas', ()=> {
    expect(Chester).to.exist;
    expect(Dave).to.exist;
    expect(NF).to.exist;
    expect(BobMarley).to.exist;
    expect(Tiesto).to.exist;
    expect(DojaCat).to.exist;
    expect(JimiHendrix).to.exist;
    expect(LilNashX).to.exist;
    expect(DonOmar).to.exist;
    expect(MarcAnthony).to.exist;
  });
  it('Test de Getters y Setters de la Clase Artistas', ()=> {

  });
  it('Test de Métodos de la clase Artistas', ()=> {

  });

});