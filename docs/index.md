# Práctica 7 - Digitalizando la colección de música de los abuelos
# Desarrollo de Sistemas Informáticos
# Universidad de la Laguna

### Autores:  
  * Joel Francisco Escobar Socas - alu0101130408@ull.edu.es
  * Micaela - alu010
  * Carla - alu01


### Índice:

1. [Introducción y objetivos.](#id1)

2. [Desarrollo.](#id2)
      
  2.1. [Clase Genero.](#id21)

  2.2. [Clase Canción](#id22)

  2.3. [Clase Album](#id23)
      
  2.4. [Clase Artista](#id24)

  2.5. [Clase Grupo](#id25)

  2.6. [Clase PlayList](#id26)

  2.7. [Clase Gestora](#id27)

  2.8. [fichero App](#id28)

3. [Dificultades.](#id3)

4. [Conclusión.](#id4)

5. [Referencias.](#id5)

<br/><br/>

## 1. Introducción y objetivos. <a name="id1"></a>

El Objetivo de esta práctica grupal es diseñar e implementar un sistema de información que permita almacenar una biblioteca de música. Para ello, se crearán las diversas clases que van a implementar la estructura que se utilizará para diseñar un menu que permita a un usuario tanto añadir, como eliminar, modificar o ordenar una colección de Canciones, Albumes, generos, artistas, grupos, playlist.

Además para almacenar toda esta información se hará uso de los dos siguientes módulos:

* **Inquirer**: Para diseñar el menú y recoger las diferentes opciones que seleccione el usuario.
* **LowDB** : Para desarrollar una base de datos que almacene toda la información de nuestra biblioteca musical.

<br/><br/>

## 2. Desarrollo. <a name="id2"></a>

En este apartado se va a explicar el diseño adoptado y la explicación de las diversas clases implementadas.

### 2.1. Clase Genero. <a name="id21"></a>
Tal y como se especifica en el enunciado debemos implementar un sistema que recoja diferentes objetos de diversas clases que esten relacionadas entre sí. Por lo que comenzaremos a explicar una de las clases más básicas, `Género`. Que principalmente almacenará los diversos géneros musicales de los que podrán hacer uso el resto de clases de nuestro sistema.

Al acceder a esta clase podemos ver que se define al pricipio de define un objeto denominado `genreInfo`, el cual es un objeto que solo podrá contener el nombre de los géneros que se especifican en él. 

```TypeScript
export type genreInfo = 'CLASICA'| 'ROCK'| 'HIP-HOP' | 'REGGEATON' | 'POP' | 'TRAP' | 'PUNK' | 'K-POP' | 'METAL' | 'CUMBIA' | 'BLUES' | 'JAZZ'| 'COUNTRY' | 'EDM' | 'FLAMENCO' | 'SALSA' | 'REGGAE' | 'GOSPEL' | 'DISCO' | 'BANDA SONORA' | 'ALTERNATIVO' | 'ELECTROPOP' | 'SOUL' | 'R&B' |'RAP' | 'INDIE';
```

Posteriormente nos encontramos con la clase `Genre`. Dentro de su constructor se recibe tanto el nombre del género que será uno de los nombres registrado en nuestor objeto **genreInfo** como un array *(Artist | Group)[]* que se encarga de definir la cantidad de artistas o grupos que hay dentro de un género, también se define un array de Albumes (*Album[]*) cuyo cometido es especificar todos los albumes que hay dentro de un género y por último un array de canciones (*Song[]*) que especifica todas las canciones que hay dentro de un género.

Y luego nos encontramos con diversos métodos *getters*  que se encargan de obtener los valores a estos atributos inicializados en el constructor de la clase.

```TypeScript
export class Genre {

    constructor(private name: genreInfo, private artists: (Artist | Group)[], private albums: Album[], private song: Song[]) {
        this.name = name;
        this.artists = artists;
        this.albums = albums;
        this.song = song;
    }

    getNombre(): genreInfo {
        return this.name;
    }

    getArtistas(): (Artist | Group)[] {
        return this.artists;
    }

    getAlbumes():Album[] {
        return this.albums;
    }
  
    getSongs(): Song[] {
        return this.song;
    }
}

```
Para comprobar la correcta implementación de esta clase lo que se hace es cargar el fichero `data.ts` que contendrá todos los objetos de nuestro sistema y comprobamos por una parte que se puedan instanciar objetos de esta clase y no esten vacíos y por otra parte que se obtenga los valores esperados al hacer ejecutar diversos *getters* que hemos definido. Todo esto se puede ver implementado en la carpeta `tests/genre.spec.ts`, cuyo contenido es:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {genreCollection, artistCollection, groupCollection, albumCollection, songCollection} from '../src/collection';
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
  });

  it ('Test de los metodos del genero numero 2', ()=>{
    expect(genreCollection.getList()[1].getNombre()).to.be.eql('POP');
    expect(genreCollection.getList()[1].getArtistas()).to.be.eql([artistCollection.getList()[0], artistCollection.getList()[1], artistCollection.getList()[5]]);
    expect(genreCollection.getList()[1].getAlbumes()).to.be.eql([albumCollection.getList()[0], albumCollection.getList()[2], albumCollection.getList()[4]]);
  });

  it ('Test de los metodos del genero numero 3', ()=>{
    expect(genreCollection.getList()[2].getNombre()).to.be.eql('ALTERNATIVO');
    expect(genreCollection.getList()[2].getArtistas()).to.be.eql([artistCollection.getList()[0], groupCollection.getList()[1]]);
    expect(genreCollection.getList()[2].getAlbumes()).to.be.eql([albumCollection.getList()[0], albumCollection.getList()[1]]);
  });

  it ('Test de los metodos del genero numero 4', ()=>{
    expect(genreCollection.getList()[3].getNombre()).to.be.eql('RAP');
    expect(genreCollection.getList()[3].getArtistas()).to.be.eql([artistCollection.getList()[1]]);
    expect(genreCollection.getList()[3].getAlbumes()).to.be.eql([albumCollection.getList()[2]]);
  });

  it ('Test de los metodos del genero numero 5', ()=>{
    expect(genreCollection.getList()[4].getNombre()).to.be.eql('PUNK');
    expect(genreCollection.getList()[4].getArtistas()).to.be.eql([groupCollection.getList()[0], groupCollection.getList()[2]]);
    expect(genreCollection.getList()[4].getAlbumes()).to.be.eql([albumCollection.getList()[3]]);
  });

  it ('Test de los metodos del genero numero 6', ()=>{
    expect(genreCollection.getList()[5].getNombre()).to.be.eql('R&B');
    expect(genreCollection.getList()[5].getArtistas()).to.be.eql([artistCollection.getList()[5]]);
    expect(genreCollection.getList()[5].getAlbumes()).to.be.eql([albumCollection.getList()[4]]);

  });

  it ('Test de los metodos del genero numero 7', ()=>{
    expect(genreCollection.getList()[6].getNombre()).to.be.eql('INDIE');
    expect(genreCollection.getList()[6].getArtistas()).to.be.eql([groupCollection.getList()[3]]);
    expect(genreCollection.getList()[6].getAlbumes()).to.be.eql([albumCollection.getList()[5]]);
  });
});  
```
<br/><br/>

### 2.2. Clase Canción. <a name="id22"></a>

La clase `Canción` tiene una estructura similar a la clase comentada anteriormente, en este caso declaramos diversos atributos en el constructor que posteriormente inicializamos, que seria el nombre de una cancion (*string*), un conjunto de autores que este recogido en el sistema, es decir, será un conjunto de varios artistas, grupos o una mezcla de ambas (*(Artist | Group)[]*), también especifica la duración de la canción (*number*), una lista de tipos de generos en la que se encuentra la canción (*genreInfo[]*), si la canción fue lanzada como single o no (*Boolean*) y por último el número de reproducciónes que ha tenido esa canción definida. 

Posteriormente se definen los métodos que permiten acceder a los atributos de las canciones *Getters*.

```TypeScript
export class Song {
    private id: number = 0;
    constructor(private name: string, private autor: (Artist | Group)[], private duration: number, private genres: genreInfo[], private single: boolean, private reproductions: number){
        this.autor = autor;
        this.duration = duration;
        this.genres = genres;
        this.name = name;
        this.reproductions = reproductions;
        this.single = single;
        this.id = this.setId();
    }

    getName(): string {
        return this.name;
    }

     getId(): number {
        return this.id;
    }

    setId(): number {
        return this.id + 1 ;
    }

    getAutor(): (Artist | Group)[] {
        return this.autor;
    }

    getDuration(): number {
        return this.duration;
    }

    getGenres(): genreInfo[] {
        return this.genres;
    }

    getReproducciones(): number {
        return this.reproductions;
    }

    getSingle(): boolean {
        return this.single;
    }
}
```

Para las pruebas unitarias de esta clase se ha operado de forma similar a las pruebas de la clase `genre` puesto que solo contempla operaciones que obtiene informacion de una canción, entonces trás cargar los datos desde el fichero data, comprobamos si los valores que obtenemos a través de la sentencia tienen sentido con los valores que esperamos.

```TypeScript

```
<br/><br/>

### 2.3. Clase Album. <a name="id23"></a>

<br/><br/>

### 2.4. Clase Artista. <a name="id24"></a>

<br/><br/>

### 2.5. Clase Grupo. <a name="id25"></a>

<br/><br/>

### 2.6. Clase Playlist. <a name="id26"></a>

<br/><br/>

### 2.7. Clase Gestora. <a name="id27"></a>

<br/><br/>

### 2.8. Fichero App. <a name="id28"></a>

<br/><br/>

## 3. Dificultades. <a name="id3"></a>


## 4. Conclusión. <a name="id4"></a>

## 5. Referencias. <a name="id5"></a>
1. [Github](http://github.com)
2. [Repositorio de la Pŕactica](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-m.git)
3. [Guión de la Pŕactica 7](https://ull-esit-inf-dsi-2122.github.io/prct07-music-dataModel/)
4. [Documentación GitHub Actions](https://docs.github.com/en/actions)
5. [Documentación Istanbul](https://istanbul.js.org/)
6. [Documentación Coveralls](https://coveralls.io/)
7. [Documentación de TypeDoc.](https://typedoc.org/)
8. [Documentación de Mocha.](https://mochajs.org/)
9. [Documentación de Chai.](https://www.chaijs.com/)