import type { ICompetidor } from "../interfaces/ICompetidor.js";
import type { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  readonly id: string;
  nombre: string;
  private jugadores: Jugador[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): void {
    if (this.jugadores.find((j) => j.id === jugador.id)) {
      console.log(`El jugador con el id ${jugador.id} ya esta en el equipo`);
    }
  }
  listarIntegrantes(): string[] {
    return this.jugadores.map((j) => j.toString());
  }

  get cantidad() {
    return this.jugadores.length;
  }

  toString(): string {
    return `${this.nombre} (${this.cantidad} jugadores)`;
  }
}
