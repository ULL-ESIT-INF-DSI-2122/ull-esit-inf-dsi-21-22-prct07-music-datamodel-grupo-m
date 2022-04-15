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

```TypeScript

```


```TypeScript

```

<br/><br/>

### 2.5. Clase Grupo. <a name="id25"></a>

```TypeScript

```

```TypeScript

```

<br/><br/>

### 2.6. Clase Playlist. <a name="id26"></a>

```TypeScript

```

```TypeScript

```

<br/><br/>

### 2.7. Clase Gestora. <a name="id27"></a>

```TypeScript

```

```TypeScript

```

<br/><br/>

### 2.8. Fichero inquirer. <a name="id28"></a>

```TypeScript

```

```TypeScript

```

<br/><br/>

### 2.9. LowDB. <a name="id29"></a>

```TypeScript

```

```TypeScript

```
<br/><br/>

### 2.10. Fichero data. <a name="id210"></a>

```TypeScript

```

```TypeScript

```

<br/><br/>

### 2.11. Fichero main. <a name="id211"></a>

```TypeScript

```

```TypeScript

```
<br/><br/>


## 3. Dificultades. <a name="id3"></a>

Dentro de las dificultades encontradas dentro de esta práctica nos gustaría resaltar las principales dos dificultades que han llegado a perjudicar a nuestro código:

* Por un lado, Hay que resaltar en el que hemos tenido dificultades con el uso y el manejo de LowDB puesto que se intento realizar en un principio pero debido a numerosos errores de versión de lowDB que no comprendiamos tal y como se explico en los issues hacia el profesorado que imparte las clases  no nos permitía importar este módulo sin embargo, al mirar los paquetes instalados y los entornos de configuración, estaba todo en orden tal y como el profesorado explico. Por lo que no se ha podido completar el uso requerido en este programa de LowDB cuya funcionalidad es implementar una base de datos dado un esquema concreto y guardar toda la informacion referente dentro de un archivo de tipo **.json**. Como una posible solución, se ha implementado un fichero `data.ts` que declara todas las colecciones y playlist en las que se navegara. Pero esta solucion no es tan óptima puesto que trae un problema y es que los datos modificados no se almacenan, sino que una vez finalizado el programa y liberada la memoria se pierden los cambios.

* Por otro lado, hay que comentar que tuvimos problemas también con las pruebas unitarias de la clase `Album`, puesto que al escribir un expectativa sobre el comportamiento de un setter, saltaba un error que indicaba que la linea era más grande de lo que se podia soportar, por lo que hemos optado a comentar este comportamiento de las prueba unitarias permaneciendo de esta manera  comentada.

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