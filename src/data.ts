import {Album} from './album';
import {Artist} from './artistas';
//import {musicGenreCollection, artistCollection, groupCollection, songCollection, albumCollection, playlistCollection} from './collection';
import {Group} from './grupos';
import {Genre, genreInfo} from './generos';
import {Playlist} from './playlist';
import {Song} from './cancion';

/**
 * @function Genera la coleccion del sistema con una serie de
 * datos preestablecidos
 */
  /**
 * Artistas  5+
 */
  
export function data() {

  let artist1 = new Artist("Billie Eillish", ['POP', 'ALTERNATIVO'], 47949051, 0);
  let artist2 = new Artist("Lil Nash X", ['POP', 'RAP'], 49522921, 0);
  let artist3 = new Artist("Damiano David", ['ROCK', 'POP'], 0, 0);
  let artist4 = new Artist("Billie Joe Armstrong", ['ROCK', 'PUNK'], 305070, 0);
  let artist5 = new Artist("Victoria de Angelis", ['ROCK', 'POP'], 0, 0);


  /**
 * Groups 5
 */
  
  let group1 = new Group("Green Day", [artist4], 1986, ['ROCK', 'PUNK'], 19999390);
  let group2 = new Group("Maneskin", [artist3, artist5], 2016, ['ROCK', 'ALTERNATIVO'], 20420352);
  let group3 = new Group("The Longshot", [artist4], 2018, ['ROCK', 'PUNK'], 83135);

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
  
  let song50 = new Song("song1", [artist1], 3, ['ROCK'], false, 667384);


  /**
 * Álbumes 5-10
 */
  
  let album1 = new Album("Happier Than Ever", [artist1], 2021, ['POP', 'ELECTROPOP'], [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16]);
  let album2 = new Album("Teatro d'ira - Vol.I", [group2], 2021, ['ROCK', 'ALTERNATIVO'], [song17, song18, song19, song20, song21, song22, song23, song24]);
  let album3 = new Album("MONTERO", [artist2], 2021, ['POP', 'RAP'], [song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
  let album4 = new Album("Father of All...", [group1], 2020, ['ROCK', 'PUNK'], [song40, song41, song42, song43, song44, song45, song46, song47, song48, song49]);


  /**
 * Géneros musicales 10
 */
  
  let genero1 = new Genre('ROCK', [artist1, group2, group1, group3], [album2, album4], [song15, song17, song18, song19, song20, song21, song22, song23, song24, song40, song41, song42, song44, song45, song46, song49]);
  let genero2 = new Genre('POP', [artist1, artist2], [album1, album3], [song1, song2, song3, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song16, song27]);
  let genero3 = new Genre('ALTERNATIVO', [artist1, group2], [album1, album2], [song13, song18]);
  let genero4 = new Genre('RAP', [artist2], [album3], [song25, song26, song27, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
  let genero5 = new Genre('PUNK', [group1, group1], [album4], [song43, song47, song48]);



/**
 * Playlists 3
 */
  
  let playlist1 = new Playlist("playlist1", [song1], 10, ['ROCK']);

/**
 * Completando datos faltantes
 */

  artist3.setGroups(group2);
  artist4.setGroups(group1);
  artist5.setGroups(group2);

  artist1.setAlbum(album1);
  artist1.setSongList([song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16]);
  artist2.setAlbum(album3);
  artist2.setSongList([song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);

  group1.setAlbum(album4);
  group2.setAlbum(album2);

}
