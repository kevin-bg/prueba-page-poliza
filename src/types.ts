export type iframeType = {
    id: string,
    width: number,
    heigth: number,
    title?: string
}

type Condicion = (monto: number, dias: number) => boolean;

export type PolizaCalculadora = {
  condicion: Condicion;
  interes: number;
}[]; 