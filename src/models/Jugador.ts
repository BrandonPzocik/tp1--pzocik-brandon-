export class Jugador {
  id: string;
  nombre: string;
  edad: number;
  posicion?: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  toString() {
    return `${this.nombre} (${this.edad} años${
      this.posicion ? ", " + this.posicion : ""
    })`;
  }
}
