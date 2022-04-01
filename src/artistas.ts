import { Album } from "./album";
import { Cancion } from "./cancion";
import { generoInfo } from "./generos";
import {Grupo} from "./grupos";

export class Artista {
  constructor(private nombre: string, private grupos: Grupo[], private generos: generoInfo[], private albumes: Album[], private canciones: Cancion[], private oyentesIndi: number, private oyentesMensual: number) {
    this.nombre = nombre;
    this.grupos = grupos;
    this.generos = generos;
    this.albumes = albumes;
    this.canciones = canciones;
    this.oyentesIndi = oyentesIndi;
    this.oyentesMensual = this.calOyentes();
  }
  
  getNombre(): string {
    return this.nombre;
  }

  getGrupos(): Grupo[]{
    return this.grupos;
  }

  getGeneros(): generoInfo[] {
    return this.generos;
  }

  getAlbumes(): Album[] {
    return this.albumes;
  }

  getCanciones(): Cancion[] {
    return this.canciones;
  }

  getOyentesMensual():number {
    return this.oyentesMensual;
  }

  public calOyentes(): number {
    let resultado: number =0;
    for (let i : number = 0; i < this.grupos.length; i++) {
      if (this.grupos[i].getNombre() == " ") {
        resultado = this.oyentesIndi;
      } else {
        resultado += this.oyentesIndi + this.grupos[i].getOyentes();
      }
    }
    return resultado;
  }
}
