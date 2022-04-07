"use strict";
exports.__esModule = true;
exports.data = void 0;
var album_1 = require("./album");
var artist_1 = require("./artist");
var group_1 = require("./group");
var genre_1 = require("./genre");
var playlist_1 = require("./playlist");
var song_1 = require("./song");
var collection_1 = require("./collection");
/**
 * @function Genera la coleccion del sistema con una serie de
 * datos preestablecidos
 */
/**
* Artistas  5+
*/
function data() {
    var artist1 = new artist_1.Artist("Billie Eillish", ['POP', 'ALTERNATIVO'], 47949051);
    var artist2 = new artist_1.Artist("Lil Nash X", ['POP', 'RAP'], 49522921);
    var artist3 = new artist_1.Artist("Damiano David", ['ROCK', 'POP'], 0);
    var artist4 = new artist_1.Artist("Billie Joe Armstrong", ['ROCK', 'PUNK'], 305070);
    var artist5 = new artist_1.Artist("Victoria de Angelis", ['ROCK', 'POP'], 0);
    var artist6 = new artist_1.Artist("Rihanna", ['POP', 'REGGAE', 'HIP-HOP', 'R&B'], 48806602);
    var artist7 = new artist_1.Artist("Ryan Guldemond", ['ROCK', 'INDIE', 'ALTERNATIVO'], 0);
    /**
   * Groups 5
   */
    var group1 = new group_1.Group("Green Day", [artist4], 1986, ['ROCK', 'PUNK'], 19999390);
    var group2 = new group_1.Group("Maneskin", [artist3, artist5], 2016, ['ROCK', 'ALTERNATIVO'], 20420352);
    var group3 = new group_1.Group("The Longshot", [artist4], 2018, ['ROCK', 'PUNK'], 83135);
    var group4 = new group_1.Group("Mother Mother", [artist7], 2005, ['ROCK', 'INDIE'], 7461331);
    /**
   * Canciones 50 (5xgenero)
   */
    var song1 = new song_1.Song("Getting Older", [artist1], 4.04, ['POP'], false, 82368601);
    var song2 = new song_1.Song("I Didn't Change My Number", [artist1], 2.38, ['POP'], false, 78111966);
    var song3 = new song_1.Song("Billie Bossa Nova", [artist1], 3.16, ['R&B'], false, 87082953);
    var song4 = new song_1.Song("my future", [artist1], 3.30, ['R&B'], true, 306917025);
    var song5 = new song_1.Song("Oxytocin", [artist1], 3.30, ['POP'], false, 82436281);
    var song6 = new song_1.Song("GOLDWING", [artist1], 2.31, ['POP'], false, 50221104);
    var song7 = new song_1.Song("Lost Cause", [artist1], 3.32, ['POP'], true, 181748562);
    var song8 = new song_1.Song("Halley's Comet", [artist1], 3.54, ['POP'], false, 74773544);
    var song9 = new song_1.Song("Not My Responsability", [artist1], 3.47, ['POP'], false, 36511925);
    var song10 = new song_1.Song("OverHeated", [artist1], 3.34, ['POP'], false, 41873321);
    var song11 = new song_1.Song("Everybody Dies", [artist1], 3.26, ['POP'], false, 42128791);
    var song12 = new song_1.Song("Your Power", [artist1], 4.05, ['POP'], true, 261975001);
    var song13 = new song_1.Song("NDA", [artist1], 3.15, ['ELECTROPOP', 'ALTERNATIVO'], true, 154235501);
    var song14 = new song_1.Song("Therefore I Am", [artist1], 2.53, ['POP'], true, 567983255);
    var song15 = new song_1.Song("Happier Than Ever", [artist1], 4.58, ['SOUL', 'ROCK'], true, 566031384);
    var song16 = new song_1.Song("Male Fantasy", [artist1], 3.14, ['POP'], false, 69934484);
    var song17 = new song_1.Song("Zitti E Bouni", [group2], 3.14, ['ROCK'], true, 294095920);
    var song18 = new song_1.Song("Coraline", [group2], 5, ['ROCK', 'ALTERNATIVO'], true, 108471814);
    var song19 = new song_1.Song("Lividi Sui Gomiti", [group2], 2.45, ['ROCK'], false, 25066957);
    var song20 = new song_1.Song("I Wanna Be Your Slave", [group2], 2.53, ['ROCK'], true, 579782441);
    var song21 = new song_1.Song("I Nome Del Padre", [group2], 3.39, ['ROCK'], true, 16276862);
    var song22 = new song_1.Song("For Your Love", [group2], 3.5, ['ROCK'], false, 444444471);
    var song23 = new song_1.Song("La Paura Del Buio", [group2], 3.29, ['ROCK'], false, 37030114);
    var song24 = new song_1.Song("Vent'anni", [group2], 4.13, ['ROCK'], false, 64917201);
    var song25 = new song_1.Song("MONTERO", [artist2], 2.17, ['RAP'], true, 45435435);
    var song26 = new song_1.Song("DEAD RIGHT NOW", [artist2], 3.41, ['RAP'], false, 5345365);
    var song27 = new song_1.Song("INDUSTRY BABY", [artist2], 3.32, ['POP', 'RAP'], true, 56465456);
    var song28 = new song_1.Song("THATS WHAT I WANT", [artist2], 2.23, ['POP'], true, 76575);
    var song29 = new song_1.Song("THE ART OF REALIZATION", [artist2], 0.24, ['RAP'], false, 879789);
    var song30 = new song_1.Song("SCOOP", [artist2], 2.54, ['RAP'], false, 897976);
    var song31 = new song_1.Song("ONE OF ME", [artist2], 2.41, ['RAP'], false, 567576);
    var song32 = new song_1.Song("LOST IN THE CITADEL", [artist2], 2.50, ['RAP'], false, 4536546);
    var song33 = new song_1.Song("DOLLA SIGN SLIME", [artist2], 2.25, ['RAP'], false, 435984);
    var song34 = new song_1.Song("TALES OF DOMINICA", [artist2], 2.26, ['RAP'], false, 2364275);
    var song35 = new song_1.Song("SUN GOES DOWN", [artist2], 2.48, ['RAP'], true, 2747574);
    var song36 = new song_1.Song("VOID", [artist2], 4.08, ['RAP'], false, 247252);
    var song37 = new song_1.Song("DONT WANT IT", [artist2], 2.10, ['RAP'], false, 1475764);
    var song38 = new song_1.Song("LIFE AFTER SALEM", [artist2], 3.30, ['RAP'], false, 36478);
    var song39 = new song_1.Song("AM I DREAMING", [artist2], 3.03, ['RAP'], false, 958585);
    var song40 = new song_1.Song("Father of All...", [group1], 2.31, ['ROCK'], true, 74675);
    var song41 = new song_1.Song("Fire, Ready, Aim", [group1], 1.52, ['ROCK'], true, 85475475);
    var song42 = new song_1.Song("Oh Yeah!", [group1], 2.51, ['ROCK'], true, 537463);
    var song43 = new song_1.Song("Meet Me on the Roof", [group1], 2.39, ['PUNK'], false, 857495);
    var song44 = new song_1.Song("I was a Teenage Teenager", [group1], 3.44, ['ROCK'], false, 927474);
    var song45 = new song_1.Song("Stab You in the Heart", [group1], 2.10, ['ROCK'], false, 183647);
    var song46 = new song_1.Song("Sugar Youth", [group1], 1.54, ['ROCK'], false, 1739372);
    var song47 = new song_1.Song("Junkies on a High", [group1], 3.06, ['PUNK'], false, 23834);
    var song48 = new song_1.Song("Take the Monay and Crawl", [group1], 2.08, ['PUNK'], false, 4938748);
    var song49 = new song_1.Song("Graffitia", [group1], 3.17, ['ROCK'], false, 838274);
    var song50 = new song_1.Song("Consideration", [artist6], 2.41, ['HIP-HOP', 'R&B'], false, 184649033);
    var song51 = new song_1.Song("James Joint", [artist6], 1.12, ['POP'], false, 72288306);
    var song52 = new song_1.Song("Kiss It Better", [artist6], 4.13, ['POP', 'R&B'], true, 261716295);
    var song53 = new song_1.Song("Work", [artist6], 3.39, ['REGGAE', 'R&B'], true, 1116053550);
    var song54 = new song_1.Song("Desperado", [artist6], 3.06, ['TRAP', 'R&B'], false, 285294569);
    var song55 = new song_1.Song("Woo", [artist6], 3.55, ['POP'], false, 81222090);
    var song56 = new song_1.Song("Needed Me", [artist6], 3.11, ['R&B'], true, 1018540029);
    var song57 = new song_1.Song("Yeah, I Sait it", [artist6], 2.13, ['POP'], false, 129647022);
    var song58 = new song_1.Song("Same Ol' Mistakes", [artist6], 6.37, ['POP'], false, 107238057);
    var song59 = new song_1.Song("Never Ending", [artist6], 3.22, ['POP'], false, 68474229);
    var song60 = new song_1.Song("Love On The Brain", [artist6], 3.44, ['SOUL'], true, 861564535);
    var song61 = new song_1.Song("Higher", [artist6], 2.00, ['SOUL'], false, 111976822);
    var song62 = new song_1.Song("Close to You", [artist6], 3.43, ['POP'], false, 109328280);
    var song63 = new song_1.Song("o My Heart", [group4], 3.31, ['ROCK', 'INDIE'], true, 10873352);
    var song64 = new song_1.Song("Burning Pile", [group4], 4.22, ['ROCK', 'INDIE'], false, 176019280);
    var song65 = new song_1.Song("Body Of Years", [group4], 4.38, ['ROCK', 'INDIE'], true, 6885102);
    var song66 = new song_1.Song("Try to Change", [group4], 4.01, ['ROCK', 'INDIE'], false, 4490806);
    var song67 = new song_1.Song("Wisdom", [group4], 3.27, ['ROCK', 'INDIE'], false, 8918728);
    var song68 = new song_1.Song("Body", [group4], 3.33, ['ROCK', 'INDIE'], false, 74473538);
    var song69 = new song_1.Song("Ghosting", [group4], 4.45, ['ROCK', 'INDIE'], false, 68298464);
    var song70 = new song_1.Song("Hayloft", [group4], 3.01, ['ROCK', 'INDIE'], true, 284996527);
    var song71 = new song_1.Song("Wreaking Ball", [group4], 3.14, ['ROCK', 'INDIE'], false, 39743394);
    var song72 = new song_1.Song("Arms Tonite", [group4], 3.36, ['ROCK', 'INDIE'], false, 121872139);
    var song73 = new song_1.Song("Miles", [group4], 3.15, ['ROCK', 'INDIE'], false, 4603041);
    var song74 = new song_1.Song("Sleep Awake", [group4], 5.47, ['ROCK', 'INDIE'], false, 5525389);
    /**
   * Álbumes 5-10
   */
    var album1 = new album_1.Album("Happier Than Ever", [artist1], 2021, ['POP', 'ELECTROPOP'], [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16]);
    var album2 = new album_1.Album("Teatro d'ira - Vol.I", [group2], 2021, ['ROCK', 'ALTERNATIVO'], [song17, song18, song19, song20, song21, song22, song23, song24]);
    var album3 = new album_1.Album("MONTERO", [artist2], 2021, ['POP', 'RAP'], [song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
    var album4 = new album_1.Album("Father of All...", [group1], 2020, ['ROCK', 'PUNK'], [song40, song41, song42, song43, song44, song45, song46, song47, song48, song49]);
    var album5 = new album_1.Album("ANTI", [artist6], 2016, ['POP', 'R&B', 'HIP-HOP'], [song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62]);
    var album6 = new album_1.Album("O My Heart", [group4], 2008, ['ROCK', 'INDIE'], [song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);
    /**
   * Géneros musicales 10
   */
    var genero1 = new genre_1.Genre('ROCK', [artist1, group2, group1, group3, group4], [album2, album4, album6], [song15, song17, song18, song19, song20, song21, song22, song23, song24, song40, song41, song42, song44, song45, song46, song49, song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);
    var genero2 = new genre_1.Genre('POP', [artist1, artist2, artist6], [album1, album3, album5], [song1, song2, song3, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song16, song27, song51, song52, song55, song57, song58, song59, song62]);
    var genero3 = new genre_1.Genre('ALTERNATIVO', [artist1, group2], [album1, album2], [song13, song18]);
    var genero4 = new genre_1.Genre('RAP', [artist2], [album3], [song25, song26, song27, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39]);
    var genero5 = new genre_1.Genre('PUNK', [group1, group1], [album4], [song43, song47, song48]);
    var genero6 = new genre_1.Genre('R&B', [artist6], [album5], [song3, song4, song50, song52, song53, song54, song56]);
    var genero7 = new genre_1.Genre('INDIE', [group4], [album6], [song63, song64, song65, song66, song67, song68, song69, song70, song71, song72, song73, song74]);
    /**
     * Playlists 3
     */
    var playlist1 = new playlist_1.Playlist("playlist1", [song1], 10, ['ROCK']);
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
    collection_1.songCollection.setList([song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27, song28, song29, song30, song31, song32, song33, song34, song35, song36, song37, song38, song39, song40, song41, song42, song43, song44, song45, song46, song47, song48, song49, song50, song51, song52, song53, song54, song55, song56, song57, song58, song59, song60, song61, song62]);
    collection_1.albumCollection.setList([album1, album2, album3, album4, album5]);
    collection_1.artistCollection.setList([artist1, artist2, artist3, artist4, artist5, artist6]);
    collection_1.genreCollection.setList([genero1, genero2, genero3, genero4, genero5, genero6]);
    collection_1.groupCollection.setList([group1, group2, group3]);
    collection_1.playlistCollection.setList([playlist1]);
    /**
    * Calculamos los oyentes mensuales de cada artista
    */
    collection_1.artistCollection.getList().forEach(function (artist) {
        artist.setListeners(artist.calOyentes());
    });
    /*
     Hay tres formas de arreglar el asunto de los tests:
     1. La primera solucion es buscar una funcion que devuelva depenediendo de lo que se quiera buscar el objeto en cuestion.
     2. La segunda opcion es copiar los datos que hay aqui almacenados y ponerlos inicializados en cada test y comprobar que funciones
     3 .Otra opcion es crear un array vacio e intentar indexar el elemento deseado dentro y luego realizar las operaciones pertinenete
    
    */
}
exports.data = data;
