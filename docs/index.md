# Práctica 7 - Digitalizando la colección de música de los abuelos
# Desarrollo de Sistemas Informáticos
# Universidad de la Laguna

### Autores:  
  * Joel Francisco Escobar Socas - alu0101130408@ull.edu.es
  * Micaela Lucia Mungay Juncal- alu0101124506@ull.edu.es
  * Carla Oval Torres - alu0101036694@ull.edu.es


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

  2.8. [fichero inquirer](#id28)

  2.9. [LowDB](#id29)

  2.10. [fichero data](#id210)

  2.11. [fichero main](#id211)

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

La estructura que se ha adoptado en este proyecto es la siguiente:

* **Basic_class/** : Carpeta donde se definen los ficheros que implementan las clases básicas del sistema, dentro encontramos:
  * *song.ts*: Clase que implementa una cancion dentro del sistema.
  * *album.ts*: Clase que implementa un album dentro del sistema.
  * *genre.ts*: Clase que implementa un genero dentro del sistema.
  * *artist.ts*: Clase que implementa un artista dentro del sistema.
  * *group.ts*: Clase que implementa un grupo dentro del sistema.
  * *playlist.ts*: Clase que implementa una playlist dentro del sistema.

* **Gestor/**: Carpeta donde se defienen las clases que implementan las colecciones de objetos del sistema, en donde están los siguientes ficheros:
  * *collection.ts*: Clase que implementa las colecciones de musica, generos, albumes, artistas y grupos dentro del sistema
  * *manage.ts*: Clase Gestora que implementa las colecciones de Playlists dentro del sistema
  * *sort.ts* : Fichero donde se recogen funciones que implementan métodos de busqueda especificas en las diversas colecciones del sistema.

* **Inquirer/**: Carpeta que contiene los diversos menus que se implementan a través de la herramienta de inquirer y su funcionalidad.
  * *inquirer.ts*: Fichero donde se implementa los diversos menús y su funcionalidad que permite ejecutar y comprobar el funcionamiento. 

* **LowDB/**: Carpeta que contiene el uso de LowDB para implementar la base de datos del sistema dentro de un fichero. (LOWDB NO DIO TIEMPO A IMPLEMENTARSE)
  * *bdd.ts*: Clase que permite la insersion, eliminacion y navegacion dentro de nuestra base de datos. 
  * *map.ts*: Clase que define los diferentes mapas que contendra la base de datos.

* **data.ts**: Fichero en el que se define la funcion que declara diversos objetos, que será lo que consideramos como base de dato en el proyecto actual puesto que no funciona LowDB
* **main.ts**: Fichero que ejecuta el inquirer principal y la llamada a esta funcion y muestra el menu inicial.

A continuación vamos a explicar de forma más detallada estos ficheros que compone la ejecucion:

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

describe('Tests de la clase Cancion', ()=>{
  it('Test de instancia de los diferentes Canciones', ()=> {
    songCollection.getList().forEach((song) => {
      expect(song).to.exist;
    });
  });
  it ('Test de los metodos del Cancion numero 1', ()=>{
    expect(songCollection.getList()[0].getName()).to.be.eql('Getting Older');
    expect(songCollection.getList()[0].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[0].getDuration()).to.be.eql(4.04);
    expect(songCollection.getList()[0].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[0].getReproducciones()).to.be.eql(82368601);
    expect(songCollection.getList()[0].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 2', ()=>{
    expect(songCollection.getList()[1].getName()).to.be.eql("I Didn't Change My Number");
    expect(songCollection.getList()[1].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[1].getDuration()).to.be.eql(2.38);
    expect(songCollection.getList()[1].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[1].getReproducciones()).to.be.eql(78111966);
    expect(songCollection.getList()[1].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 3', ()=>{
    expect(songCollection.getList()[2].getName()).to.be.eql('Billie Bossa Nova');
    expect(songCollection.getList()[2].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[2].getDuration()).to.be.eql(3.16);
    expect(songCollection.getList()[2].getGenres()).to.be.eql(['R&B']);
    expect(songCollection.getList()[2].getReproducciones()).to.be.eql(87082953);
    expect(songCollection.getList()[2].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 4', ()=>{
    expect(songCollection.getList()[3].getName()).to.be.eql('my future');
    expect(songCollection.getList()[3].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[3].getDuration()).to.be.eql(3.30);
    expect(songCollection.getList()[3].getGenres()).to.be.eql(['R&B']);
    expect(songCollection.getList()[3].getReproducciones()).to.be.eql(306917025);
    expect(songCollection.getList()[3].getSingle()).to.be.eql(true);
  });

  it ('Test de los metodos del Cancion numero 5', ()=>{
    expect(songCollection.getList()[4].getName()).to.be.eql('Oxytocin');
    expect(songCollection.getList()[4].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[4].getDuration()).to.be.eql(3.30);
    expect(songCollection.getList()[4].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[4].getReproducciones()).to.be.eql(82436281);
    expect(songCollection.getList()[4].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 6', ()=>{
    expect(songCollection.getList()[5].getName()).to.be.eql('GOLDWING');
    expect(songCollection.getList()[5].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[5].getDuration()).to.be.eql(2.31);
    expect(songCollection.getList()[5].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[5].getReproducciones()).to.be.eql(50221104);
    expect(songCollection.getList()[5].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 7', ()=>{
    expect(songCollection.getList()[6].getName()).to.be.eql('Lost Cause');
    expect(songCollection.getList()[6].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[6].getDuration()).to.be.eql(3.32);
    expect(songCollection.getList()[6].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[6].getReproducciones()).to.be.eql(181748562);
    expect(songCollection.getList()[6].getSingle()).to.be.eql(true);
  });

  it ('Test de los metodos del Cancion numero 8', ()=>{
    expect(songCollection.getList()[7].getName()).to.be.eql("Halley's Comet");
    expect(songCollection.getList()[7].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[7].getDuration()).to.be.eql(3.54);
    expect(songCollection.getList()[7].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[7].getReproducciones()).to.be.eql(74773544);
    expect(songCollection.getList()[7].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 9', ()=>{
    expect(songCollection.getList()[8].getName()).to.be.eql('Not My Responsability');
    expect(songCollection.getList()[8].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[8].getDuration()).to.be.eql(3.47);
    expect(songCollection.getList()[8].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[8].getReproducciones()).to.be.eql(36511925);
    expect(songCollection.getList()[8].getSingle()).to.be.eql(false);
  });

  it ('Test de los metodos del Cancion numero 10', ()=>{
    expect(songCollection.getList()[9].getName()).to.be.eql('OverHeated');
    expect(songCollection.getList()[9].getAutor()).to.be.eql(artistCollection.getList()[0]);
    expect(songCollection.getList()[9].getDuration()).to.be.eql(3.34);
    expect(songCollection.getList()[9].getGenres()).to.be.eql(['POP']);
    expect(songCollection.getList()[9].getReproducciones()).to.be.eql(41873321);
    expect(songCollection.getList()[9].getSingle()).to.be.eql(false);
  });

});
```
<br/><br/>

### 2.3. Clase Album. <a name="id23"></a>
Para definir un album dentro del sistema se ha implementado la clase  `Album` en el que se define dentro del constructor los atributos necesarios para representar a un album. Que serían un string para representar el nombre del album (*name*), un array de artistas o grupos para representar los artistas o grupos a los que pertenece el album (*(Artist | Group)[]*), un number que representa al año de lanzamiento del album (*number*), un array de generos que  especifica los generos en los que esta recogido el album (*genreInfo[]*) y por último un array de canciones que especifican todas las canciones que hay dentro de ese album (*Song[]*).

Posteriormente se definen los diversos métodos de acceso a estos atributos (*Getters y Setters*) tal y como se hizo en clases anteriores

```TypeScript

export class Album {

    constructor(private name: string, private artist: (Artist | Group)[], private anioPubli: number, private genre: genreInfo[], private song: Song[]) {
        this.name = name;
        this.anioPubli = anioPubli;
        this.genre = genre;
        this.song = song;
        this.artist = artist;
    }

    getName(): string {
        return this.name;
    }

    getYear(): number {
        return this.anioPubli;
    }

    getGenero(): genreInfo[] {
        return this.genre;
    }

    getTracklist(): Song[] {
        return this.song;
    }

     getArtist(): (Artist | Group)[] {
        return this.artist;
    }

}
```

Para las pruebas unitarias de esta clase de ha operado igual que en las demás clases
```TypeScript
import 'mocha';
import {expect} from 'chai';
import {data} from "../src/data";
import {genreCollection, artistCollection, groupCollection, albumCollection, songCollection} from '../src/Gestor/collection';

data();

describe('Tests de la clase Album', ()=>{
  it('Test de instancia de los diferentes albumes', ()=> {
    albumCollection.getList().forEach((album) => {
      expect(album).to.exist;
    });
  });
  it ('Test de los metodos del Album numero 1', ()=>{
    expect(albumCollection.getList()[0].getName()).to.be.eql('Happier Than Ever');
    expect(albumCollection.getList()[0].getYear()).to.be.eql(2021);
    expect(albumCollection.getList()[0].getGenero()).to.be.eql(['POP', 'ELECTROPOP']);
    expect(albumCollection.getList()[0].getArtist()).to.be.eql([artistCollection.getList()[0]]);

  });

  it ('Test de los metodos del Album numero 2', ()=>{
    expect(albumCollection.getList()[1].getName()).to.be.eql("Teatro d'ira - Vol.I");
    expect(albumCollection.getList()[1].getYear()).to.be.eql(2021);
    expect(albumCollection.getList()[1].getGenero()).to.be.eql(['ROCK', 'ALTERNATIVO']);
    expect(albumCollection.getList()[1].getArtist()).to.be.eql([groupCollection.getList()[1]]);

  });

  it ('Test de los metodos del Album numero 3', ()=>{
    expect(albumCollection.getList()[2].getName()).to.be.eql('MONTERO');
    expect(albumCollection.getList()[2].getYear()).to.be.eql(2021);
    expect(albumCollection.getList()[2].getGenero()).to.be.eql(['POP', 'RAP']);
    expect(albumCollection.getList()[2].getArtist()).to.be.eql([artistCollection.getList()[1]]);

  });

  it ('Test de los metodos del Album numero 4', ()=>{
    expect(albumCollection.getList()[3].getName()).to.be.eql('Father of All...');
    expect(albumCollection.getList()[3].getYear()).to.be.eql(2020);
    expect(albumCollection.getList()[3].getGenero()).to.be.eql(['ROCK', 'PUNK']);
    expect(albumCollection.getList()[3].getArtist()).to.be.eql([groupCollection.getList()[0]]);

  });

  it ('Test de los metodos del Album numero 5', ()=>{
    expect(albumCollection.getList()[4].getName()).to.be.eql('ANTI');
    expect(albumCollection.getList()[4].getYear()).to.be.eql(2016);
    expect(albumCollection.getList()[4].getGenero()).to.be.eql(['POP', 'R&B', 'HIP-HOP']);
    expect(albumCollection.getList()[4].getArtist()).to.be.eql([artistCollection.getList()[5]]);

  });

  it ('Test de los metodos del Album numero 6', ()=>{
    expect(albumCollection.getList()[5].getName()).to.be.eql('O My Heart');
    expect(albumCollection.getList()[5].getYear()).to.be.eql(2008);
    expect(albumCollection.getList()[5].getGenero()).to.be.eql(['ROCK', 'INDIE']);
    expect(albumCollection.getList()[5].getArtist()).to.be.eql([groupCollection.getList()[3]]);

  });
});
```

<br/><br/>

### 2.4. Clase Artista. <a name="id24"></a>

Esta clase define a los artistas dentro de nuestro sistema, para implementar la funcionalidad creamos la clase `Artist`. En el constructor de esta clase define como privados el nombre del artista que sera de tipo string (*string*), un array de generos que especifican los generos en el que se engloba un artista (*genreInfo[]*), un number que sería el numero de oyentes individuales que tiene un artista (*number*) y fuera del constructor definimos 4 atributos privados: grouplist que especifica los grupos en a los que pertenece el artista (*group[]*), songs que es un array de canciones, que representa las canciones que tiene el artista (*Song[]*), albumList que es un array de albumes que representa todos los albumes que tiene un artista (*Album[]*) y por último listenerMensual que es un number que especifica los oyentes mensuales que tiene un artista.

En cuanto a metodos dentro de esta clase tenemos como en las demas clases una serie de Getters y Setter que establecen valores a estos atributos privados y ademas definimos una funcion `calOyentes` que calcula el numero de oyentes mensuales en base al trabajo individual del artista como al trabajo de un grupo en el caso de pertenecer a este.

```TypeScript

export class Artist {
  
  private groupList: Group[] = [];
  private songsList: Song[] = [];
  private albumList: Album[] = [];
  private listenerMensual: number = 0;

  constructor(private name: string, private genres: genreInfo[], private listenerIndi: number) {
    this.name = name;
    this.genres = genres;
    this.listenerIndi = listenerIndi;
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  getGroupList(): Group[]{
    return this.groupList;
  }

  getGenre(): genreInfo[] {
    return this.genres;
  }

  getAlbumList(): Album[] {
    return this.albumList;
  }

  getSongList(): Song[] {
    return this.songsList;
  }

  getOyentesMensual():number {
    return this.listenerMensual;
  }

  public calOyentes(): number {
    let result: number = 0;
    if (this.groupList.length > 0){
      this.groupList.forEach((group) => {
        result += group.getOyentes();
      });
    }
    return result + this.listenerIndi;
  }

  public setGroups(newGroupList: Group[]): void {
    this.groupList = newGroupList;
  }

  public addGroup(newGrupo: Group): void {
    this.groupList.push(newGrupo);
  }

  public setSongList(newList: Song[]): void {
    this.songsList = newList;
  }

  public setSong(newSong: Song): void {
    this.songsList.push(newSong);
  }

  public setAlbum(newAlbum: Album): void {
    this.albumList.push(newAlbum);
  }

  public setListeners(listeners: number): void {
    this.listenerMensual = listeners;
  }

}

```
En cuanto a las pruebas unitarias realizadas se realiza la misma estructura definida en las clases anteriores, definimos diversas ruebas en donde comprobamos todos estos metodos de la clase a parte de la instancia de los objetos a traves de la llamda a la funcion `data` del fichero **data.ts**

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {genreCollection, artistCollection, groupCollection, albumCollection, songCollection} from '../src/Gestor/collection';
import {data} from '../src/data';

data();

describe('Tests de la clase Artista', ()=>{
  it('Test de instancia de los diferentes artistas', ()=> {
    artistCollection.getList().forEach((artist) => {
      expect(artist).to.exist;
    });
  });

  it('Test de Métodos del artista numero 1', ()=> {
    expect(artistCollection.getList()[0].getName()).to.be.eql('Billie Eillish');
    expect(artistCollection.getList()[0].getGenre()).to.be.eql(['POP', 'ALTERNATIVO']);
    expect(artistCollection.getList()[0].getOyentesMensual()).to.eql(47949051);
  });

  it('Test de Métodos del artista numero 2', ()=> {
    expect(artistCollection.getList()[1].getName()).to.be.eql('Lil Nash X');
    expect(artistCollection.getList()[1].getGenre()).to.be.eql(['POP', 'RAP']);
    expect(artistCollection.getList()[1].getOyentesMensual()).to.eql(49522921);
  });

  it('Test de Métodos del artista numero 3', ()=> {
    expect(artistCollection.getList()[2].getName()).to.be.eql('Damiano David');
    expect(artistCollection.getList()[2].getGenre()).to.be.eql(['ROCK', 'POP']);
    expect(artistCollection.getList()[2].getOyentesMensual()).to.eql(20420352);
  });

  it('Test de Métodos del artista numero 4', ()=> {
    expect(artistCollection.getList()[3].getName()).to.be.eql('Billie Joe Armstrong');
    expect(artistCollection.getList()[3].getGenre()).to.be.eql(['ROCK', 'PUNK']);
    expect(artistCollection.getList()[3].getOyentesMensual()).to.eql(20387595);
  });

  it('Test de Métodos del artista numero 5', ()=> {
    expect(artistCollection.getList()[4].getName()).to.be.eql('Victoria de Angelis');
    expect(artistCollection.getList()[4].getGenre()).to.be.eql(['ROCK', 'POP']);
    expect(artistCollection.getList()[4].getOyentesMensual()).to.eql(20420352);
  });

  it('Test de Métodos del artista numero 6', ()=> {
    expect(artistCollection.getList()[5].getName()).to.be.eql('Rihanna');
    expect(artistCollection.getList()[5].getGenre()).to.be.eql(['POP', 'REGGAE', 'HIP-HOP', 'R&B']);
    expect(artistCollection.getList()[5].getOyentesMensual()).to.eql(48806602);
  });


});
```

<br/><br/>

### 2.5. Clase Grupo. <a name="id25"></a>

 Para definir un grupo que es un conjunto de artistas dentro de nuestro sistema implementamos la clase  `Group`, en donde dentro del constructor se especifica un string que representa el nombre del artista (*string*), ademas de un array de artistas que serán aquellos artistas que pertenecen a un grupo (*Artist[]*), también definimos el año en el que se formó el grupo (*number*), un array de generos que especifica los generos a los que pertenece el grupo (*genreInfo[]*) y el numero de oyentes que tiene el grupo (*number*) que se utilizará en la clase `Artist` para calcular el numero de oyentes totales. Además fuera del constructor también se implementa  la variable privada **albums** que representa los albumes que ha sacado un grupo (*Album[]*).

 Posteriormente se implementan los métodos publicos que permiten establecer o obtener valores de estas variables, denomiandos Getters y Setters


```TypeScript

export class Group {
  private albums: Album[] = [];

  constructor(private name: string, private artists: Artist[], private anioCreacion: number, private genre: genreInfo[], private listeners: number){
      this.name = name;
      this.artists = artists;
      this.anioCreacion = anioCreacion;
      this.genre = genre;
      this.listeners = listeners;
  }

    getNombre(): string {
        return this.name;
    }

    getArtistas(): Artist[] {
        return this.artists;
    }

    getAnioCreacion(): number {
        return this.anioCreacion;
    }

    getGenero(): genreInfo[] {
        return this.genre;
    }

    getAlbumes(): Album[] {
        return this.albums;
    }

    public getOyentes(): number {
        return this.listeners;
    }

    public setAlbum(newAlbum : Album): void {
        this.albums.push(newAlbum);
    }

}
```
En cuanto a las pruebas unitarias se ha operado igual que en el resto de clases.

```TypeScript
mport 'mocha';
import {expect} from 'chai';
import {artistCollection, groupCollection} from '../src/Gestor/collection';
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

  it ('Test de los metodos del grupo numero 4', ()=>{
    expect(groupCollection.getList()[3].getNombre()).to.be.eql('Mother Mother');
    expect(groupCollection.getList()[3].getArtistas()).to.be.eql([artistCollection.getList()[6]]);
    expect(groupCollection.getList()[3].getAnioCreacion()).to.be.eql(2005);
    expect(groupCollection.getList()[3].getGenero()).to.eql(['ROCK', 'INDIE']);
    expect(groupCollection.getList()[3].getOyentes()).to.be.eql(7461331);
  });

});  
```

<br/><br/>

### 2.6. Clase Playlist. <a name="id26"></a>
 Para implementar playlists en el sistema, que al fin y al cabo son canciones susesivas cuyo objetivo es ser reproducidas por el usuario, definimos la clase `Playlist` en donde dentro del constructor de forma privada definimos un atributo encargado de ser el nombre de la playlist (*string*), un array de canciones que va a ser la lista de canciones que queremos que sea almacenada en la playlist (*Song[]*), la duracion total de la playlist (*number*), un array de generos que hay dentro de la playlist (*genreInfo[]*) y por último el año de creacion de la playlist (*number*). 

 En cuanto a los métodos además de realizar como en las clases anteriroes los Metodos que permiten obtener o establecer valores de estos atributos privados (*Getters y Setters*). Especificamos varios métodos para obtener valores que se usarán en implementaciones futuras, entre estos cabe menciona el método **getNameSong** que obtiene el nombre de cada cancion de la lista de canciones, **getArtistSong** que obtiene los artistas de cada cancion dentro de la lista de canciones y **getDurationSong** que obtiene la duracion de la cancion de la lista de canciones.

```TypeScript
export class Playlist {
ctor(private name: string, private songs: Song[], private duration: number, private genres: genreInfo[], private creationYear: number){
       this.songs = songs;
       this.duration = duration;
       this.genres = genres;
       this.name = name; 
       this.creationYear = creationYear;
    }

    getSongs(): Song[] {
      return this.songs;
    }

    getNameSong(): string {
      this.songs.forEach((item) => {
        return item.getName();
      });
      return "No existe ningun nombre";
    }

    getArtistSong(): string {
      this.songs.forEach((item) => {
        return item.getAutor();
      });
      return "No existe ningun Artista o Grupo asociado";
    }

    getDurationSong(): number {
      this.songs.forEach((item) => {
        return item.getDuration();
      });
      return -1;
    }

    getGenrePlaylist(): string {
      this.songs.forEach((item) => {
        return item.getGenres();
      });
      return "No existe Genero";
    }

    getDuration(): number {
      return this.duration;
    }

    getCreateYear(): number {
      return this.creationYear;
    }

    getGenres(): genreInfo[] {
      return this.genres;
    }

    getName(): string{
      return this.name;
    }

    setPlaylistSong(newItem: Song[]): void {
      this.songs = newItem;
    }

}
```

Para las pruebas unitarias de esta clase se ha utilizado la misma metodologia que se ha llevado a cabo en las clases anteriores.


<br/><br/>

### 2.7. Clase Gestora. <a name="id27"></a>

Para definir el funcionamiento del proyecto, es decir un sistema que almacena tanto colecciones de canciones, albumes, generos, artistas, grupos  y playlist se ha definido la clase `Collection<T>` de tipo generica puesto que en el caso de canciones, albumes, generos, artistas y grupos será similar y esta clase será la encargada de especificar este funcionamiento. Para las Playlist se ha optado por definir otra clase denominada `Manage` o "Gestor" en español, cuyo objetivo es definir la coleccion de PLaylist dentro del sistema y su manejo, por lo que vamos a comentar esto de manera más precisa.

* **Clase Collection<T>**: 
Para implementar esta clase definimos como atributo privado una lista de elementos de tipo generica y dentro del constructor no pasamos ningun parametro y como métodos especificamos los  métodos que nos permitan acceder a esta lista y poder obtener los valores o introducir nuevos elementos. También se define un método que permite buscar dentro de la lista un objeto especifico, además podemos obtener con *getLenght* el número de elementos que compone a la lista y podemos mostrar todos los elementos que componen la coleccion con *showCollection*.

Y una vez se hayaa definido esta clase con estos metodos que se utilizarán posteriormente en otros ficheros. se crean instancia de cinco objetos de tipo colection para que represente dentro del sistema la coleccion de canciones, albumes, artistas, grupos y generos.



```TypeScript
export class Collection<T> {

  private list : T[] = [];
  constructor() {}

  getList() : T[] {
    return this.list;
  }

  addItem(item: T) : void {
    this.list.push(item);
  }

  setList(newList: T[]) : void {
    this.list = newList;
  }

  searchItem(item: T): T | void {
    const search = this.list.find((element) => element === item);
    return (search) ? search : console.log('No existe');
  }

  getLenght(): number {
    return this.list.length;
  }

  showCollection(): void {
    this.list.forEach((T) => {
      console.log(T);
    });
  }
}

export const albumCollection = new Collection<Album>();
export const artistCollection = new Collection<Artist>();
export const groupCollection = new Collection<Group>();
export const genreCollection = new Collection<Genre>();
export const songCollection = new Collection<Song>();

```


* **Clase Manage**: 
Para implementar esta clase se ha decidido aprovechar ciertas funciones de la clase coleccion debido a su similitud y se ha dedicido hacer que herede de la clase collection, de esta forma obtenemos metodos de acceso a la clase collection para aplicarlos en esta clase hija. De esta manera se define como atributo privado una lista de playlist para representar todas las playlist dentro del sistema. 

En cuanto a los métodos muchos se heredan pero los que añaden nueva funcionalidad dentro de la clase que se definen que en este caso serian los referentes a mostrar esta playlist **showPlaylist**, los de acceso **Getters y Settrers**, y diversos métodos que permiten buscar dentro de esta clase de una manera especifica como puede ser alfabeticamente por titulos de la cancione, por nombre del grupo o artista, por añao de lanzamiento etc.. (*sortSongPlaylist, sortArtistPlaylist, sortYeartPlaylist, etc ...*).

```TypeScript

export class Manage extends Collection<Playlist> {

  constructor(private listPlaylist: Playlist[]) {
    super();
    this.listPlaylist = listPlaylist;
  }

  getList() : Playlist[] {
    return this.listPlaylist;
  }

  addItem(item: Playlist) : void {
    this.listPlaylist.push(item);
  }

  searchPlaylist(namePlaylist: string): Playlist[] {
    const arrayMatchedPlaylist: Playlist[] = [];
    this.listPlaylist.forEach((element) => {
      if (element.getName().search(namePlaylist) > -1) {
        arrayMatchedPlaylist.push(element);
      }
    });
    return arrayMatchedPlaylist;
  }

  showPlaylist (): void {
    this.listPlaylist.forEach((item) => {
      console.log(item);
    });
  }

  sortSongPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() < b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getNameSong().toLocaleLowerCase() > b.getNameSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortArtistPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() < b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getArtistSong().toLocaleLowerCase() > b.getArtistSong().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortYeartPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() < b.getCreateYear()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getCreateYear() > b.getCreateYear()) ? -1 : 1);
    }
  }

  sortDurationPlaylistSong (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() < b.getDurationSong()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDurationSong() > b.getDurationSong()) ? -1 : 1);
    }
  }

  sortGenrePlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() < b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getGenrePlaylist().toLocaleLowerCase() > b.getGenrePlaylist().toLocaleLowerCase()) ? -1 : 1);
    }
  }

  sortDurationPlaylist (selec: Boolean = true): Playlist[] {
    if (selec == true) {
      return this.listPlaylist.sort((a, b) => (a.getDuration() < b.getDuration()) ? -1 : 1);
    } else {
      return this.listPlaylist.sort((a, b) => (a.getDuration() > b.getDuration()) ? -1 : 1);
    }
  } 
  
}

```
De esta forma definimos la clase que se encarga de gestionar playlist. Pero también hay un fichero, puesto que no se puede hacer dentro de la clase Collection se ha especificado en un fichero externo la funcionalidad que implementa la navegacion dentro de estas colecciones, estas están dentro del fichero `sort.ts`, donde se ordena la visualizacion del fichero tal y como se solicita:

  Alfabéticamente por título de la canción
  Alfabéticamente por nombre del álbum
  Alfabéticamente por nombre de la playlist
  Por año de lanzamiento del álbum
  Por número de reproducciones totales
  Filtrar para mostrar únicamente los singles lanzados

Esta información se debe de ordenar tanto ascendente como descendentemente, para eso se ha especificado un booleano llamado *selec* en el cual en caso de ser true se muestra ascendente y en caso de ser false descendente.

```TypeScript

export function sortTituloCollection(selec: Boolean = true): Song[] {
  if (selec == true) {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return songCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}

export function sortAlbumCollection(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() < b.getName().toLocaleLowerCase()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getName().toLocaleLowerCase() > b.getName().toLocaleLowerCase()) ? -1 : 1);
  }
}

export function sortAlbumYear(selec: Boolean = true): Album[] {
  if (selec == true) {
    return albumCollection.getList().sort((a, b) => (a.getYear() < b.getYear()) ? -1 : 1);
  } else {
    return albumCollection.getList().sort((a, b) => (a.getYear() > b.getYear()) ? -1 : 1);
  }
}

export function sortListenersTotal(selec: Boolean = true): Artist[] {
  if (selec == true) {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() < b.getOyentesMensual()) ? -1 : 1);
  } else {
    return artistCollection.getList().sort((a, b) => (a.getOyentesMensual() > b.getOyentesMensual()) ? -1 : 1);
  }
}
 
export function sortSingles(): Song[] {
  let singleSong: Song[] = [];
  songCollection.getList().forEach((item) => {
      if ( item.getSingle() == true) {
        singleSong.push(item);
      }
  });
  return singleSong;
}
```

<br/><br/>

### 2.8. Directorio inquirer. <a name="id28"></a>

Dentro de este directorio se encuentra el fichero `inquirer.ts`, el cual define una gran cantidad de menus para definir la funcionalidad de la biblioteca musical y los metodos necesarios.

Hay que comentar que para la implementación de estos menus de opciones se ha hecho uso del módulo de inquirer. A rasgos generales, se hacen diversos menus que se resumen en permitir seleccionar entre si se desea navegar, añadir o eliminar en la coleccion de objetos o playlist.

De forma especifica explicaré los menús más importantes del código, es decir, aquellos referentes a navegar, añadir y eliminar un elemento de una coleccion o playlist puesto que el funcionamiento es similar.

Primero para especificar las diferentes opciones que puede escoger el usuario el código se hace uso de enumeraciones en typescript, que permite especificar un conjunto de valores.

```TypeScript
enum consultType {
  consultPlaylist = 'Consultar las Playlist del sistema',
  consultCollection = 'Consultar la Colecciones del sistema',
  back = 'Volver atrás'
};

enum consultPlaylistOptions {
  defaultVisualize = 'Visualizar por defecto las Playlist del sistema',
  sortByTitle = 'Visualizar por titulo de las canciones de la Playlist',
  sortByArtist = 'Visualizar por nombre de los artistas de la Playlist',
  sortByYear = 'Visualizar por año de lanzamiento de la Playlist',
  sortByDuration = 'Visualizar por duracion de las canciónes de la Playlist ',
  sortByGenre = 'Visualizar alfabeticamente por los generos de la Playlist',
  sortByTotal  = 'Visualizar por reproducciones totales ',
  back = 'Volver atras'
};

enum consultDefaultCollection {
  printArtist = 'Visualizar la lista de Artistas del sistema',
  printSong = 'Visualizar la lista de Canciones del sistema',
  printAlbum = 'Visualizar la lista de Albumes del sistema',
  printGroup = 'Visualizar la lista de Grupos del sistema',
  printGenre = 'Visualizar la lista de Generos del sistema',
  back = 'Volver atras'
};

enum optionRemoveCollection {
  removeArtist = 'Eliminar Artista de la colección',
  removeGroup = 'Eliminar Grupos de la colección',
  removeSong = 'Eliminar Canciones de la colección',
  removeGenre = 'Eliminar Generos de la colección',
  removeAlbum = 'Eliminar Albumes de la colección',
  back = 'Volver atras'
};
```

Una vez las opciones son declaradas, en una funcion de forma asincrona, es decir hasta que el usuario no seleccione una opcion o no introduzca un valor que se recoge en la variable que espera una respuesta *answers* se hace uso del módulo inquirer y especificamos el tipo (*type*) que queremos que sea el menu, si se inserta un valor **input**, o si será una lista de elementos **list**. una vez el tipo es definido debemos darle un nombre a esa accion que almacena o selecciona un valor (*name*), y luego introducimos el mensaje que se debe visualizar por pantalla en el campo  *message*. En caso de ser lista hay que añadir una opcion vas que es lo que el *choises* que son los valores entre los que los usuarios pueden escoger , en este caso llamo a traves de la funcion values a los valores de una enumeracion y una vez se ha recogido la respuesta del usuario en answers realizamos el código necesario a través de una promesa. como es asincrona la función devolvera un tipo **Promise<Void>**, es decir, una promesa vacia puesto que simplemente elijes y no devuelves nada. Tal y como se ve en este trozo de código:

```TypeScript
export async function whatConsult(): Promise<void>   {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'consultOptionSelect',
    message: 'Que desea consultar?:',
    choices: Object.values(consultType),
  });
  switch(answers["consultOptionSelect"]) {
    case consultType.consultPlaylist:
      promptConsultPlaylist();
      break;
    case consultType.consultCollection:
      promptConsultCollection();
      break;
    case consultType.back:
      console.log(`Volviendo atras, espere por favor...`);
      mainPrompt();
      break;
  }
}

```

Pero claro, esto solo permite elegir entre opciones de navegación, en este archivo se definen muchos menus que cumplen con una funcionalidad especifica. Por lo que vamos a mencionar las funcionalidades más importantes ya que hay muchas funcionalidades que se reutilizan pero para diferentes casos.

* Para añadir un objeto: Para añadir por ejemplo una playlist a la coleccion de playlist del sistema, se define una funcion `addPlaylist` que basicamente de forma asincrona pide al usuario una serie de elementos, que serán los atributos que se usarán para crear un nuevo objeto de instancia. esto se logra introduciendo en la llamada a inquirer un array de elementos que va a solicitar (*[{},{},{}]*). Dentro de este array separado por llaves, que corresponden a cada elemento que se recogera bajo un nombre se pide al usuario que introduzca el nombre, los titulos de las canciones que iran en la playlist la duracion y el genero de la playlist. Una vez el usuario introduzca todos estos datos. A través de una promesa se convierte a array de strings los nombres de las canciones que el usuario ha introducido y recorremos este array y el arrayq ue define la coleccion de canciones y si resulta que el nombre que introdujo el usuairo esta recogido dentro de la base de datos de las canciones se pushea este valor en las canciones de la playlist nueva que esta creando el usuario. De esta forma logramos añadir las canciones a la playlist. De igual forma se opera en los generos y los diversos elementos que se solicitan. Una vez se comprueba que todos los valores existen en la base de datos se crea un nuevo objeto con estos valores, y se añade a la coleccion de playlist en este caso. y se pregunta a traves de otro inquirer si se desea seguir añadiendo más objetos en caso afirmativo, se llama de nuevo a la función y en caso negativo se vuelve atrás en el menú de opciones. 


```TypeScript
async function addPlaylist(): Promise<void> {
  console.clear();
  let single: boolean = false;
  let artistMatch: (Artist | Group);
  let genreIntroduce: genreInfo;
  const asnwers = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Introduzca el nombre de la Playlist:',
  }, {
    type: 'input',
    name: 'songsName',
    message: 'Por favor, introduzca los titulos de las canciones que quiere agregar: (tienen que estar separados por coma y luego un espacio)',
  }, {
    type: 'input',
    name: 'duration',
    message: 'Introduzca la duración de la Playlist:',
  }, {
    type: 'input',
    name: 'genres',
    message: 'Introduzca el genero de la Playlist:',
  }, {
    type: 'input',
    name: 'yearCreation',
    message: 'Año de creacion:',
  }]).then((answers: any) => {
    genreIntroduce = findGenre(answers.genres.toUpperCase());
    let resultArray: Song[] = [];
    let UserAnswer: string = answers.songsName;
    let songsArrayName: string[] = UserAnswer.split(", ", UserAnswer.length);
    songsArrayName.forEach((i) => {
      songCollection.getList().forEach((j) => {
        if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
          resultArray.push(j);
        }
      });
    });
    let newPlaylist: Playlist =  new Playlist(answers.name, resultArray, answers.duration, [genreIntroduce], answers.yearCreation);
    playlistManage.addItem(newPlaylist);
    playlistManage.showPlaylist();
    inquirer.prompt([{
      type: 'list',
      name: 'continue',
      message: 'Desea añadir otra playlist?:',
      choices: ['si', 'no'],
    }]).then((answers: any) => {
      if (answers['continue'] == 'si') addPlaylist();
      else promptOperatePlaylist();
    });

  });
}

```

* Para navegar por el sistema:  Lo que se hace es una idea similar a la anterior, desde un menu se le da la opcion al usuario de como quiere navegar, en caso de ser por defecto simplemente se llama a que imprima una lista a través del método **showCollection**, en caso de ser una coleccion. y si no se desea navegar por defecto entonces por ejemplo, si el usuario selecciona visualizar la lista de cancines alfabeticamente por titulo primero se le pregunta como quiere visualizarla si de forma ascendente o descendente, dependiendo de lo que el usuario escoja a través de un menú inquirer el flag de la funcion correspondiente se pone a true, en caso de ser *ascendente* y a false en caso de ser *descendente*. Y de esta forma navegamos y visualizamos como queremos en nuestro sistema.

```TypeScript
async function promptConsultCollection(): Promise<void>   {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseCollectionVisualize',
    message: 'Que desea visualizar?:',
    choices: Object.values(consultCollectionOptions),
  });
  switch(answers["chooseCollectionVisualize"]) {
    case consultCollectionOptions.defaultVisualize:
      console.clear();
      promptDefaultCollection();
      break;
    case consultCollectionOptions.sortByTitle:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortTituloCollection());
        } else {
          console.log(sortTituloCollection(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortByAlbum:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortAlbumCollection());
        } else {
          console.log(sortAlbumCollection(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortByPlaylist:
      

      break;
    case consultCollectionOptions.sortBylanzamiento:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortAlbumYear());
        } else {
          console.log(sortAlbumYear(false));
        }
        promptConsultCollection();
      });
      break; 
    case consultCollectionOptions.sortByReproduction:
      console.clear();
      inquirer.prompt({
        type: 'list',
        name: 'ascOrDesc',
        message: 'Desea visualizar de forma ascendente o descendente? ',
        choices: ["Ascendente", "Descendente"],
      }).then(answers => {
        if(answers.ascOrDesc == "Ascendente") {
          console.log(sortListenersTotal());
        } else {
          console.log(sortListenersTotal(false));
        }
        promptConsultCollection();
      });
      break;
    case consultCollectionOptions.sortBySingle:
      console.log(sortSingles());
      promptConsultCollection();
      break;
    case consultCollectionOptions.back:
      console.log(`Volviendo atras, espere por favor...`);
      whatConsult();
      break;
  }
}
```

* Para eliminar: Por último para eliminar un elemento del sistema, usaré el ejemplo de eliminar una canción. EN caso de seleccionar eliminar una canción a través de un menú inquirer se le solicitará al usuario el nombre de la canción que desea eliminar del sistema. Entonces una evz registrada la respuesta se elimina los espacios y las comas de las diferentes canciones  y se busca cada cancion en la coleccion de canciones en caso de encontrarse se coge el indice de la posicion en la que esta la cancion y se sustituye por 1, realizando la eliminación de esta forma.

```TypeScript
async function removeSong(): Promise<void> {
  console.clear();
  const answers: any = await inquirer.prompt({
    type: 'input',
    name: 'removeName',
    message: 'Introduzca el nombre de las canciones que desea eliminar de la Collecion.(tienen que estar separados por coma y luego un espacio): ',
  });
  let removeAnswers: string = answers.removeName;
  let removeArray: string [] =  removeAnswers.split(", ", removeAnswers.length);
  removeArray.forEach((i) => {
    songCollection.getList().forEach((j) => {
      if (i.toLocaleLowerCase() == j.getName().toLocaleLowerCase()) {
        let index = songCollection.getList().indexOf(j);
        if (index !== -1) {
          songCollection.getList().splice(index, 1);
        }
      }
    });
  });
  songCollection.showCollection();
  inquirer.prompt([{
    type: 'list',
    name: 'continue',
    message: 'Desea eliminar otra cancion?:',
    choices: ['si', 'no'],
  }]).then((answers: any) => {
    if (answers['continue'] == 'si') removeSong();
    else whatOperate();
  });
}

```

> NOTA: Solo se ha introducido las funciones más relevantes por cuestiones de simplificar este informe, puesto que el fichero contas de 1181 líneas de código.
<br/><br/>

### 2.9. LowDB. <a name="id29"></a>

En esta carpeta se implementa todo lo referente al modulo lowdb, sin embargo, no hemos logrado que funcione debido a diversos problemas. este contiene el fichero `bdd.ts` que implementa una clase que nos permite trabajar con un fichero JSON donde almacenar datos como clases.

En esta carpeta se situa parte del código que hemos intentado hacer funcionar, sin éxito. Por lo que hemos decidido dejarlo como evidencia del intento.

<br/><br/>

### 2.10. Fichero data. <a name="id210"></a>

Dentro de este fichero se define todos los objetos de todas la clases tal y como se ha solicitado en el informe. 50 `canciones` distintas, 10 `géneros` musicales distintos, 5 `grupos` diferentes, 5 `artistas`, entre 5 y 10 `albumes` musicales y 3 `playlist` distintas.

Aunque dependiendo de los grupos, canciones y playlist implementadas la cantidad de objetos situados dentro puede aumentar.

<br/><br/>

### 2.11. Fichero main. <a name="id211"></a>

el fichero `main.ts` es el fichero donde se implementa la funcionalidad principal del proyecto, en otras palabras, implementa el menu principal donde le da al usuario la opción de navegar por el sistema, realizar alguna operacion en el sistema (añadir u eliminar) o salir de la ejecución de la biblioteca musical.

Todo esto esta implementado por inquirer y es necesario realizar una llamada al data.ts que almacena todo los datos del sistema.


```TypeScript
import inquirer from 'inquirer';

let playlistManage: Manage = data(); 
data();

enum mainOptions {
    consult = 'Realizar una Consulta en el sistema',
    calculate = 'Realizar una Operación en el sistema',
    quit = 'Salir'
  };


export async function mainPrompt(): Promise<void>   {
  console.clear();
  console.log(`Bienvenidos a la Biblioteca Musical!\n» Autores: Joel, Micaela & Carla`);
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'chooseSelect',
    message: 'Que desea hacer?:',
    choices: Object.values(mainOptions),
  });
  switch(answers["chooseSelect"]) {
    case mainOptions.consult:
      whatConsult();
      break;
    case mainOptions.calculate:
      whatOperate();
      break;
    case mainOptions.quit:
      console.clear();
      console.log(`Gracias por su visita. Que tenga un buen dia`);
      console.log(`Saliendo...`);
      break;
  }
}

mainPrompt();
```
<br/><br/>


## 3. Dificultades. <a name="id3"></a>

Dentro de las dificultades encontradas dentro de esta práctica nos gustaría resaltar las principales dos dificultades que han llegado a perjudicar a nuestro código:

* Por un lado, Hay que resaltar en el que hemos tenido dificultades con el uso y el manejo de LowDB puesto que se intento realizar en un principio pero debido a numerosos errores de versión de lowDB que no comprendiamos tal y como se explico en los issues hacia el profesorado que imparte las clases  no nos permitía importar este módulo sin embargo, al mirar los paquetes instalados y los entornos de configuración, estaba todo en orden tal y como el profesorado explico. Por lo que no se ha podido completar el uso requerido en este programa de LowDB cuya funcionalidad es implementar una base de datos dado un esquema concreto y guardar toda la informacion referente dentro de un archivo de tipo **.json**. Como una posible solución, se ha implementado un fichero `data.ts` que declara todas las colecciones y playlist en las que se navegara. Pero esta solucion no es tan óptima puesto que trae un problema y es que los datos modificados no se almacenan, sino que una vez finalizado el programa y liberada la memoria se pierden los cambios.

* Por otro lado, hay que comentar que tuvimos problemas también con las pruebas unitarias de la clase `Album`, puesto que al escribir un expectativa sobre el comportamiento de un setter, saltaba un error que indicaba que la linea era más grande de lo que se podia soportar, por lo que hemos optado a comentar este comportamiento de las prueba unitarias permaneciendo de esta manera  comentada.

* Otro problema que hemos encontrado durante la programación de las github actions es el fallo de los test de prueba. Puesto que figura que no estan en **status**. Y mirando los videos que hay en el aula y las respuesta del profesorado en los issues del proyecto no sabemos como se puede solucionar puesto que todo esta tal y como se especifica, debido a que falla el badge pero al entrar y buscar problemas aparecer que los teste se ejecutan de manera correcta y que han pasado. Por esto nos hemos visto en la obligación de dejar el badge como en  **no status**, debido a que no sabemos a que se debe este fallo.

## 4. Conclusión. <a name="id4"></a>

A modo de conclusión, los objetivos que hemos cumplido sobre esta práctica han sido: crear una estructura de Gestión sobre colecciones de canciones, albumes, generos, aristas, grupos y playlist (Biblioteca musical) usando los módulos Inquirer.js y Lowdb sobre un grupo de objetos en Typescript, logrando también implementar los diversos métodos que permiten eliminar, añadir y navegar sobre los diversos objetos que componen nuestro sistema.
.

Es decir, hemos aplicado un buen diseño de las clases tal y como se ha solicitado en el guión y intentando respetar y cumplir los principios SOLID. Con ello, conseguimos que la información que contiene cada clase esté bien ordenada y tenga sentido, en un entorno práctico.

Hemos realizado las pruebas según la metodología TDD: primero creando las funciones para que fallen (fase roja), y después completarlas hasta que estas funcionen (fase verde).

Por último, ha sido nuestro primer contacto con Inquirer.js y Lowdb. Pese a no haber podido sacar en adelante el modulo de lowdb hemos entendido a la perfección su cometido dentro del proyecto y hemos implementado tanto inquirer como una especie de solucion frente a los problemas de lowDB.

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
10. [Documentacion sobre el modulo Inquirer](https://www.npmjs.com/package/inquirer)
11. [Documentacion sobre el modulo LowDB](https://www.npmjs.com/package/lowdb)