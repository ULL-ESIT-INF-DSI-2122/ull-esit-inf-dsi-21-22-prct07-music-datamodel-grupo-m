import {Album} from './album';
import {Artist} from './artistas';
import {Group} from './grupos';
import {Genre, genreInfo} from './generos';
import {Playlist} from './playlist';
import {Song} from './cancion';
import {DataBase, albumCollection, artistCollection, groupCollection, genreCollection, songCollection, playlistCollection} from './database'

/**
 * @function Genera la coleccion del sistema con una serie de
 * datos preestablecidos
 */
  /**
 * Artistas  5+
 */
  
export function data() {

  let artist1 = new Artist("Billie Eillish", ['POP', 'ALTERNATIVO'], 47949051);
  let artist2 = new Artist("Lil Nash X", ['POP', 'RAP'], 49522921);
  let artist3 = new Artist("Damiano David", ['ROCK', 'POP'], 0);
  let artist4 = new Artist("Billie Joe Armstrong", ['ROCK', 'PUNK'], 305070);
  let artist5 = new Artist("Victoria de Angelis", ['ROCK', 'POP'], 0);
  let artist6 = new Artist("Rihanna", ['POP', 'REGGAE', 'HIP-HOP', 'R&B'], 48806602);
  let artist7 = new Artist("Ryan Guldemond", ['ROCK', 'INDIE', 'ALTERNATIVO'], 0);


  /**
 * Groups 5
 */
  
  let group1 = new Group("Green Day", [artist4], 1986, ['ROCK', 'PUNK'], 19999390);
  let group2 = new Group("Maneskin", [artist3, artist5], 2016, ['ROCK', 'ALTERNATIVO'], 20420352);
  let group3 = new Group("The Longshot", [artist4], 2018, ['ROCK', 'PUNK'], 83135);
  let group4 = new Group("Mother Mother", [artist7], 2005, ['ROCK', 'INDIE'], 7461331);



  /**
 * Canciones 50 (5xgenero)
 */
  
  let song1 = new Song("Getting Older", [artist1], 4.04, ['POP'], false, 82368601);
  let song2 = new Song("I Didn't Change My Number", [artist1], 2.38, ['POP'], false, 78111966);
  let song3 = new Song("Billie Bossa Nova", [artist1], 3.16, ['R&B'], false, 87082953);
  let song4 = new Song("my future", [artist1], 3.30, ['R&B'], true, 306917025);
  let song5 = new Song("Oxytocin", [artist1], 3.30, ['POP'], false, 82436281);
  let song6 = new Song("GOLDWING", [artist1], 2.31, ['POP'], false, 50221104);
  let song7 = new Song("Lost Cause", [artist1], 3.32, ['POP'], true, 181748562);
  let song8 = new Song("Halley's Comet", [artist1], 3.54, ['POP'], false, 74773544);
  let song9 = new Song("Not My Responsability", [artist1], 3.47, ['POP'], false, 36511925);
  let song10 = new Song("OverHeated", [artist1], 3.34, ['POP'], false, 41873321);
  let song11 = new Song("Everybody Dies", [artist1], 3.26, ['POP'], false, 42128791);
  let song12 = new Song("Your Power", [artist1], 4.05, ['POP'], true, 261975001);
  let song13 = new Song("NDA", [artist1], 3.15, ['ELECTROPOP', 'ALTERNATIVO'], true, 154235501);
  let song14 = new Song("Therefore I Am", [artist1], 2.53, ['POP'], true, 567983255);
  let song15 = new Song("Happier Than Ever", [artist1], 4.58, ['SOUL', 'ROCK'], true, 566031384);
  let song16 = new Song("Male Fantasy", [artist1], 3.14, ['POP'], false, 69934484);

  let song17 = new Song("Zitti E Bouni", [group2], 3.14, ['ROCK'], true, 294095920);
  let song18 = new Song("Coraline", [group2], 5, ['ROCK', 'ALTERNATIVO'], true, 108471814);
  let song19 = new Song("Lividi Sui Gomiti", [group2], 2.45, ['ROCK'], false, 25066957);
  let song20 = new Song("I Wanna Be Your Slave", [group2], 2.53, ['ROCK'], true, 579782441);
  let song21 = new Song("I Nome Del Padre", [group2], 3.39, ['ROCK'], true, 16276862);
  let song22 = new Song("For Your Love", [group2], 3.5, ['ROCK'], false, 444444471);
  let song23 = new Song("La Paura Del Buio", [group2], 3.29, ['ROCK'], false, 37030114);
  let song24 = new Song("Vent'anni", [group2], 4.13, ['ROCK'], false, 64917201);

  let song25 = new Song("MONTERO", [artist2], 2.17, ['RAP'], true, 45435435);
  let song26 = new Song("DEAD RIGHT NOW", [artist2], 3.41, ['RAP'], false, 5345365);
  let song27 = new Song("INDUSTRY BABY", [artist2], 3.32, ['POP', 'RAP'], true, 56465456);
  let song28 = new Song("THATS WHAT I WANT", [artist2], 2.23, ['POP'], true, 76575);
  let song29 = new Song("THE ART OF REALIZATION", [artist2], 0.24, ['RAP'], false, 879789);
  let song30 = new Song("SCOOP", [artist2], 2.54, ['RAP'], false, 897976);
  let song31 = new Song("ONE OF ME", [artist2], 2.41, ['RAP'], false, 567576);
  let song32 = new Song("LOST IN THE CITADEL", [artist2], 2.50, ['RAP'], false, 4536546);
  let song33 = new Song("DOLLA SIGN SLIME", [artist2], 2.25, ['RAP'], false, 435984);
  let song34 = new Song("TALES OF DOMINICA", [artist2], 2.26, ['RAP'], false, 2364275);
  let song35 = new Song("SUN GOES DOWN", [artist2], 2.48, ['RAP'], true, 2747574);
  let song36 = new Song("VOID", [artist2], 4.08, ['RAP'], false, 247252);
  let song37 = new Song("DONT WANT IT", [artist2], 2.10, ['RAP'], false, 1475764);
  let song38 = new Song("LIFE AFTER SALEM", [artist2], 3.30, ['RAP'], false, 36478);
  let song39 = new Song("AM I DREAMING", [artist2], 3.03, ['RAP'], false, 958585);

  let song40 = new Song("Father of All...", [group1], 2.31, ['ROCK'], true, 74675);
  let song41 = new Song("Fire, Ready, Aim", [group1], 1.52, ['ROCK'], true, 85475475);
  let song42 = new Song("Oh Yeah!", [group1], 2.51, ['ROCK'], true, 537463);
  let song43 = new Song("Meet Me on the Roof", [group1], 2.39, ['PUNK'], false, 857495);
  let song44 = new Song("I was a Teenage Teenager", [group1], 3.44, ['ROCK'], false, 927474);
  let song45 = new Song("Stab You in the Heart", [group1], 2.10, ['ROCK'], false, 183647);
  let song46 = new Song("Sugar Youth", [group1], 1.54, ['ROCK'], false, 1739372);
  let song47 = new Song("Junkies on a High", [group1], 3.06, ['PUNK'], false, 23834);
  let song48 = new Song("Take the Monay and Crawl", [group1], 2.08, ['PUNK'], false, 4938748);
  let song49 = new Song("Graffitia", [group1], 3.17, ['ROCK'], false, 838274);
  
  let song50 = new Song("Consideration", [artist6], 2.41, ['HIP-HOP', 'R&B'], false, 184649033);
  let song51 = new Song("James Joint", [artist6], 1.12, ['POP'], false, 72288306);
  let song52 = new Song("Kiss It Better", [artist6], 4.13, ['POP', 'R&B'], true, 261716295);
  let song53 = new Song("Work", [artist6], 3.39, ['REGGAE', 'R&B'], true, 1116053550);
  let song54 = new Song("Desperado", [artist6], 3.06, ['TRAP', 'R&B'], false, 285294569);
  let song55 = new Song("Woo", [artist6], 3.55, ['POP'], false, 81222090);
  let song56 = new Song("Needed Me", [artist6], 3.11, ['R&B'], true, 1018540029);
  let song57 = new Song("Yeah, I Sait it", [artist6], 2.13, ['POP'], false, 129647022);
  let song58 = new Song("Same Ol' Mistakes", [artist6], 6.37, ['POP'], false, 107238057);
  let song59 = new Song("Never Ending", [artist6], 3.22, ['POP'], false, 68474229);
  let song60 = new Song("Love On The Brain", [artist6], 3.44, ['SOUL'], true, 861564535);
  let song61 = new Song("Higher", [artist6], 2.00, ['SOUL'], false, 111976822);
  let song62 = new Song("Close to You", [artist6], 3.43, ['POP'], false, 109328280);

  let song63 = new Song("o My Heart", [group4], 3.31, ['ROCK', 'INDIE'], true, 10873352);
  let song64 = new Song("Burning Pile", [group4], 4.22, ['ROCK', 'INDIE'], false, 176019280);
  let song65 = new Song("Body Of Years", [group4], 4.38, ['ROCK', 'INDIE'], true, 6885102);
  let song66 = new Song("Try to Change", [group4], 4.01, ['ROCK', 'INDIE'], false, 4490806);
  let song67 = new Song("Wisdom", [group4], 3.27, ['ROCK', 'INDIE'], false, 8918728);
  let song68 = new Song("Body", [group4], 3.33, ['ROCK', 'INDIE'], false, 74473538);
  let song69 = new Song("Ghosting", [group4], 4.45, ['ROCK', 'INDIE'], false, 68298464);
  let song70 = new Song("Hayloft", [group4], 3.01, ['ROCK', 'INDIE'], true, 284996527);
  let song71 = new Song("Wreaking Ball", [group4], 3.14, ['ROCK', 'INDIE'], false, 39743394);
  let song72 = new Song("Arms Tonite", [group4], 3.36, ['ROCK', 'INDIE'], false, 121872139);
  let song73 = new Song("Miles", [group4], 3.15, ['ROCK', 'INDIE'], false, 4603041);
  let song74 = new Song("Sleep Awake", [group4], 5.47, ['ROCK', 'INDIE'], false, 5525389);

  /**
 * Álbumes 5-10
 */
  
  let album1 = new Album("Happier Than Ever", [artist1], 2021, ['POP', 'ELECTROPOP'], [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16]);
  let album2 = new Album("Teatro d'ira - Vol.I", [group2], 2021, ['ROCK', 'ALTERNATIVO'], [song17, song18, song19, song20, song21, song22, song23, song24]);
  let album3 = new Album("MONTERO", [artist2], 2021, ['POP', 'RAP'], [song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
  let album4 = new Album("Father of All...", [group1], 2020, ['ROCK', 'PUNK'], [song40, song41, song42, song43, song44, song45, song46, song47, song48, song49]);
  let album5 = new Album("ANTI", [artist6], 2016, ['POP', 'R&B', 'HIP-HOP'], [song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62]);
  let album6 = new Album("O My Heart", [group4], 2008, ['ROCK', 'INDIE'], [song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);

  /**
 * Géneros musicales 10
 */
  
  let genero1 = new Genre('ROCK', [artist1, group2, group1, group3, group4], [album2, album4, album6], [song15, song17, song18, song19, song20, song21, song22, song23, song24, song40, song41, song42, song44, song45, song46, song49, song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);
  let genero2 = new Genre('POP', [artist1, artist2, artist6], [album1, album3, album5], [song1, song2, song3, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song16, song27, song51, song52, song55, song57, song58, song59, song62]);
  let genero3 = new Genre('ALTERNATIVO', [artist1, group2], [album1, album2], [song13, song18]);
  let genero4 = new Genre('RAP', [artist2], [album3], [song25, song26, song27, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
  let genero5 = new Genre('PUNK', [group1, group1], [album4], [song43, song47, song48]);
  let genero6 = new Genre('R&B', [artist6], [album5], [song3, song4, song50, song52, song53, song54, song56]);
  let genero7 = new Genre('INDIE', [group4], [album6], [song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);




/**
 * Playlists 3
 */
  
  let playlist1 = new Playlist("playlist1", [song1], 10, ['ROCK']);

/**
 * Completando datos faltantes
*/

  artist1.setAlbum(album1);
  artist1.setSongList([song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16]);
  artist2.setAlbum(album3);
  artist2.setSongList([song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
  artist3.setGroups([group2]);
  artist4.setGroups([group1, group3]);
  artist5.setGroups([group2]);
  artist6.setAlbum(album5);
  artist6.setSongList([song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62]);
  artist7.setGroups([group4]);

  group1.setAlbum(album4);
  group2.setAlbum(album2);
  group4.setAlbum(album6);

/**
* Rellenamos nuestra base de datos
*/

  songCollection.setList([song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39, song40, song41, song42, song43, song44, song45, song46, song47, song48, song49, song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62]);
  albumCollection.setList([album1, album2, album3, album4, album5]);
  artistCollection.setList([artist1, artist2, artist3, artist4, artist5, artist6]);
  genreCollection.setList([genero1, genero2, genero3, genero4, genero5, genero6]);
  groupCollection.setList([group1, group2, group3]);
  playlistCollection.setList([playlist1]);

/**
* Calculamos los oyentes mensuales de cada artista
*/

  artistCollection.getList().forEach((artist) => {
    artist.setListeners(artist.calOyentes());
  });

  /*
   Hay tres formas de arreglar el asunto de los tests:
   1. La primera solucion es buscar una funcion que devuelva depenediendo de lo que se quiera buscar el objeto en cuestion.
   2. La segunda opcion es copiar los datos que hay aqui almacenados y ponerlos inicializados en cada test y comprobar que funciones
   3 .Otra opcion es crear un array vacio e intentar indexar el elemento deseado dentro y luego realizar las operaciones pertinenete
  
  */
}
