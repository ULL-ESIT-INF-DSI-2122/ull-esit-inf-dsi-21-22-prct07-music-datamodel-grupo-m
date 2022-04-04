import 'mocha';
import {expect} from 'chai';
import {Genero, generoInfo} from "../src/generos";
import {Grupo} from '../src/grupos';
import {Playlist} from '../src/playlist';
import {Album} from '../src/album';
import {Cancion} from '../src/cancion';
import {Artista} from '../src/artistas';

// Los [] en blanco son albumes que no estan definidos

describe('Tests de la clase Cancion', ()=>{
    const numb = new Cancion('Numb', [], 3.06, ['ROCK'], true, 2000000);
    const woman = new Cancion('Woman', [], 2.52, ['ROCK'], true, 725584682);
  it('Test de instancia de los diferentes Canciones', ()=> {
    expect(numb).to.exist;
    expect(woman).to.exist;
  });
  it('Test de Getters y Setters de la Clase Artistas', ()=> {

  });
  it('Test de Métodos de la clase Artistas', ()=> {

  });

});