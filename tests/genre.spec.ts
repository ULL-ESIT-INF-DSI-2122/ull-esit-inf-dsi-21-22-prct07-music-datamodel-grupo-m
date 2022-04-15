import 'mocha';
import {expect} from 'chai';
import {genreCollection, artistCollection, groupCollection, albumCollection, songCollection} from '../src/Gestor/collection';
import {data} from '../src/data';


data();

describe('Pruebas unitarias de la clase genero', ()=>{
  it ('Pruebas de instancia de genero', ()=>{
    genreCollection.getList().forEach((genre) => {
      expect(genre).to.exist;
    });
  });
  it ('Test de los metodos del genero numero 1', ()=>{
    expect(genreCollection.getList()[0].getNombre()).to.be.eql('ROCK');
    expect(genreCollection.getList()[0].getArtistas()).to.be.eql([artistCollection.getList()[0], groupCollection.getList()[1], groupCollection.getList()[0], groupCollection.getList()[2], groupCollection.getList()[3]]);
    expect(genreCollection.getList()[0].getAlbumes()).to.be.eql([albumCollection.getList()[1], albumCollection.getList()[3], albumCollection.getList()[5]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });

  it ('Test de los metodos del genero numero 2', ()=>{
    expect(genreCollection.getList()[1].getNombre()).to.be.eql('POP');
    expect(genreCollection.getList()[1].getArtistas()).to.be.eql([artistCollection.getList()[0], artistCollection.getList()[1], artistCollection.getList()[5]]);
    expect(genreCollection.getList()[1].getAlbumes()).to.be.eql([albumCollection.getList()[0], albumCollection.getList()[2], albumCollection.getList()[4]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });

  it ('Test de los metodos del genero numero 3', ()=>{
    expect(genreCollection.getList()[2].getNombre()).to.be.eql('ALTERNATIVO');
    expect(genreCollection.getList()[2].getArtistas()).to.be.eql([artistCollection.getList()[0], groupCollection.getList()[1]]);
    expect(genreCollection.getList()[2].getAlbumes()).to.be.eql([albumCollection.getList()[0], albumCollection.getList()[1]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });

  it ('Test de los metodos del genero numero 4', ()=>{
    expect(genreCollection.getList()[3].getNombre()).to.be.eql('RAP');
    expect(genreCollection.getList()[3].getArtistas()).to.be.eql([artistCollection.getList()[1]]);
    expect(genreCollection.getList()[3].getAlbumes()).to.be.eql([albumCollection.getList()[2]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });

  it ('Test de los metodos del genero numero 5', ()=>{
    expect(genreCollection.getList()[4].getNombre()).to.be.eql('PUNK');
    expect(genreCollection.getList()[4].getArtistas()).to.be.eql([groupCollection.getList()[0], groupCollection.getList()[2]]);
    expect(genreCollection.getList()[4].getAlbumes()).to.be.eql([albumCollection.getList()[3]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[42], songCollection.getList()[46], songCollection.getList()[47]])
  });

  it ('Test de los metodos del genero numero 6', ()=>{
    expect(genreCollection.getList()[5].getNombre()).to.be.eql('R&B');
    expect(genreCollection.getList()[5].getArtistas()).to.be.eql([artistCollection.getList()[5]]);
    expect(genreCollection.getList()[5].getAlbumes()).to.be.eql([albumCollection.getList()[4]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });

  it ('Test de los metodos del genero numero 7', ()=>{
    expect(genreCollection.getList()[6].getNombre()).to.be.eql('INDIE');
    expect(genreCollection.getList()[6].getArtistas()).to.be.eql([groupCollection.getList()[3]]);
    expect(genreCollection.getList()[6].getAlbumes()).to.be.eql([albumCollection.getList()[5]]);
    //expect(genreCollection.getList()[0].getSongs()).to.eql([songCollection.getList()[14], songCollection.getList()[16], songCollection.getList()[17], songCollection.getList()[18], songCollection.getList()[19], songCollection.getList()[20], songCollection.getList()[21], songCollection.getList()[22], songCollection.getList()[23], songCollection.getList()[39], songCollection.getList()[40], songCollection.getList()[41], songCollection.getList()[43], songCollection.getList()[44], songCollection.getList()[45], songCollection.getList()[48], songCollection.getList()[62], songCollection.getList()[63], songCollection.getList()[64], songCollection.getList()[65], songCollection.getList()[66], songCollection.getList()[67], songCollection.getList()[68], songCollection.getList()[69], songCollection.getList()[70], songCollection.getList()[71], songCollection.getList()[71], songCollection.getList()[73]]);
  });
});  