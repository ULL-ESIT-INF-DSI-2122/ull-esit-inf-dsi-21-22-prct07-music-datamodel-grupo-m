import { Cancion } from "./cancion";
import { generoInfo } from "./generos";

export class Playlist {
    constructor(private nombre: string, private canciones: Cancion[], private duracion: number, private generos: generoInfo[]){
       this.canciones = canciones;
       this.duracion = duracion;
       this.generos = generos;
       this.nombre = nombre; 
    }

    getCanciones(): Cancion[] {
      return this.canciones;
    }

    getDuracion(): number {
      return this.duracion;
    }

    getGeneros(): generoInfo[] {
      return this.generos;
    }

    getNombre(): string{
      return this.nombre;
    }
}