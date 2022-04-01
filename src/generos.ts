import {Album} from "./album";
import {Cancion} from "./cancion";
import {Artista} from "./artistas";
import {Grupo} from "./grupos";
export type generoInfo = 'CLASICA'| 'ROCK'| 'HIP HOP' | 'REGGEATON' | 'POP' | 'TRAP' | 'PUNK' ;

export class Genero {
    constructor(private nombre: generoInfo, private artistas: Artista[] | Grupo[], private albumes: Album[], private canciones: Cancion[]) {
        this.nombre = nombre;
        this.artistas = artistas;
        this.albumes = albumes;
        this.canciones = canciones;
    }

    getNombre(): generoInfo {
        return this.nombre;
    }


    getArtistas(): Artista[] | Grupo[] {
        return this.artistas;
    }


    getAlbumes():Album[] {
        return this.albumes;
    }
    

    getCanciones(): Cancion[] {
        return this.canciones;
    }
}