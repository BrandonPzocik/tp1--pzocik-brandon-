export class Resultado {
  golesLocales: number;
  golesVisitantes: number;

  constructor(golesLocales: number, golesVisitantes: number) {
    this.golesLocales = golesLocales;
    this.golesVisitantes = golesVisitantes;
  }

  toString(): string {
    return `${this.golesLocales} - ${this.golesVisitantes}`;
  }
}
