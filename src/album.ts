import { Artista } from "./artistas";
import {Genero, generoInfo} from "./generos";
import {Playlist} from "./playlist";

export class Album {
    constructor(private nombre: string, private artista: Artista, private añoPubli: number, private genero: generoInfo[], private tracklist: Playlist) {
        this.nombre = nombre;
        this.artista = artista;
        this.añoPubli = añoPubli;
        this.genero = genero;
        this.tracklist = tracklist;
    }

    getNombre(): string {
        return this.nombre;
    }

    getArtista(): Artista {
        return this.artista;
    }

    getAño(): number {
        return this.añoPubli;
    }

    getGenero(): generoInfo[] {
        return this.genero;
    }

    getTracklist(): Playlist {
        return this.tracklist;
    }
}