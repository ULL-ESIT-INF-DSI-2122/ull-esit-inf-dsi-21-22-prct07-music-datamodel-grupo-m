import {Album} from "./album";
import {Genero, generoInfo} from "./generos";
import {Artista} from "./artistas";

export class Grupo {
  constructor(private nombre: string, private artistas: Artista[], private añoCreacion: number, private genero: generoInfo[], private albumes: Album[], private oyentes: number){
      this.nombre = nombre;
      this.artistas = artistas;
      this.añoCreacion = añoCreacion;
      this.genero = genero;
      this.albumes = albumes;
      this.oyentes = oyentes;
  }

    getNombre(): string {
        return this.nombre;
    }

    getArtistas(): Artista[] {
        return this.artistas;
    }
    
    getAñoCreacion(): number {
        return this.añoCreacion;
    }


    getGenero(): generoInfo[] {
        return this.genero;
    }


    getAlbumes(): Album[] {
        return this.albumes;
    }


    getOyentes(): number {
        return this.oyentes;
    }

}