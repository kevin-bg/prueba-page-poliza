import type { PolizaCalculadora } from "../types";

export class PolizaCalculo {
  days: number;
  monto: number;
  condicionesYAcciones: PolizaCalculadora = [
    // Desde 100 hasta 1,000
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 31 && dias <= 59,
      interes: 6.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 60 && dias <= 89,
      interes: 6.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 90 && dias <= 119,
      interes: 6.4,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 120 && dias <= 179,
      interes: 7.05,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 180 && dias <= 270,
      interes: 7.5,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100 && monto <= 1000 && dias >= 271 && dias <= 360,
      interes: 7.65,
    },
    {
      condicion: (monto, dias) => monto >= 100 && monto <= 1000 && dias >= 361,
      interes: 7.9,
    },

    // Desde 1,001 hasta 2,500
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 31 && dias <= 59,
      interes: 6.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 60 && dias <= 89,
      interes: 6.4,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 90 && dias <= 119,
      interes: 6.5,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 120 && dias <= 179,
      interes: 7.1,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 180 && dias <= 270,
      interes: 7.55,
    },
    {
      condicion: (monto, dias) =>
        monto >= 1001 && monto <= 2500 && dias >= 271 && dias <= 360,
      interes: 7.7,
    },
    {
      condicion: (monto, dias) => monto >= 1001 && monto <= 2500 && dias >= 361,
      interes: 7.95,
    },

    // Desde 2,501 hasta 4,500
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 31 && dias <= 59,
      interes: 6.4,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 60 && dias <= 89,
      interes: 6.5,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 90 && dias <= 119,
      interes: 6.6,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 120 && dias <= 179,
      interes: 7.15,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 180 && dias <= 270,
      interes: 7.6,
    },
    {
      condicion: (monto, dias) =>
        monto >= 2501 && monto <= 4500 && dias >= 271 && dias <= 360,
      interes: 7.75,
    },
    {
      condicion: (monto, dias) => monto >= 2501 && monto <= 4500 && dias >= 361,
      interes: 8.0,
    },

    // Desde 4,501 hasta 7,500
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 31 && dias <= 59,
      interes: 6.5,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 60 && dias <= 89,
      interes: 6.6,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 90 && dias <= 119,
      interes: 6.7,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 120 && dias <= 179,
      interes: 7.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 180 && dias <= 270,
      interes: 7.65,
    },
    {
      condicion: (monto, dias) =>
        monto >= 4501 && monto <= 7500 && dias >= 271 && dias <= 360,
      interes: 7.85,
    },
    {
      condicion: (monto, dias) => monto >= 4501 && monto <= 7500 && dias >= 361,
      interes: 8.05,
    },

    // Desde 7,501 hasta 12,000
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 31 && dias <= 59,
      interes: 7.05,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 60 && dias <= 89,
      interes: 7.1,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 90 && dias <= 119,
      interes: 7.15,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 120 && dias <= 179,
      interes: 7.25,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 180 && dias <= 270,
      interes: 7.7,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 271 && dias <= 360,
      interes: 7.9,
    },
    {
      condicion: (monto, dias) =>
        monto >= 7501 && monto <= 12000 && dias >= 361,
      interes: 8.1,
    },

    // Desde 12,001 hasta 20,000
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 1 && dias <= 30,
      interes: 0.0,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 31 && dias <= 59,
      interes: 7.1,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 60 && dias <= 89,
      interes: 7.15,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 90 && dias <= 119,
      interes: 7.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 120 && dias <= 179,
      interes: 7.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 180 && dias <= 270,
      interes: 7.75,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 271 && dias <= 360,
      interes: 8,
    },
    {
      condicion: (monto, dias) =>
        monto >= 12001 && monto <= 20000 && dias >= 361,
      interes: 8.15,
    },
    // Desde 20,001 hasta 35,000
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 31 && dias <= 59,
      interes: 7.15,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 60 && dias <= 89,
      interes: 7.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 90 && dias <= 119,
      interes: 7.25,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 120 && dias <= 179,
      interes: 7.35,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 180 && dias <= 270,
      interes: 7.8,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 271 && dias <= 360,
      interes: 8.05,
    },
    {
      condicion: (monto, dias) =>
        monto >= 20001 && monto <= 35000 && dias >= 361,
      interes: 8.2,
    },

    // Desde  hasta 35,001 hasta 50,000
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 31 && dias <= 59,
      interes: 7.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 60 && dias <= 89,
      interes: 7.25,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 90 && dias <= 119,
      interes: 7.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 120 && dias <= 179,
      interes: 7.4,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 180 && dias <= 270,
      interes: 7.85,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 271 && dias <= 360,
      interes: 8.1,
    },
    {
      condicion: (monto, dias) =>
        monto >= 35001 && monto <= 50000 && dias >= 361,
      interes: 8.25,
    },
    // Desde hasta 50,001 hasta 100,000
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 31 && dias <= 59,
      interes: 7.25,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 60 && dias <= 89,
      interes: 7.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 90 && dias <= 119,
      interes: 7.35,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 120 && dias <= 179,
      interes: 7.45,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 180 && dias <= 270,
      interes: 7.9,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 271 && dias <= 360,
      interes: 8.15,
    },
    {
      condicion: (monto, dias) =>
        monto >= 50001 && monto <= 100000 && dias >= 361,
      interes: 8.3,
    },
    // Desde hasta 100,000 hasta 99,000,000
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 31 && dias <= 59,
      interes: 7.3,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 60 && dias <= 89,
      interes: 7.35,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 90 && dias <= 119,
      interes: 7.4,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 120 && dias <= 179,
      interes: 7.5,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 180 && dias <= 270,
      interes: 7.95,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 271 && dias <= 360,
      interes: 8.2,
    },
    {
      condicion: (monto, dias) =>
        monto >= 100001 && monto <= 99000000 && dias >= 361,
      interes: 8.35,
    },
  ];

  constructor(monto: number, days: number) {
    this.monto = monto;
    this.days = days;
  }

  BuscadorTasa() {
    const accion = this.condicionesYAcciones.find((item) =>
      item.condicion(this.monto, this.days)
    );
    if (accion) {
      return accion.interes;
    } else {
      return 0;
    }
  }

  calcularPoliza() {
    const tasa = this.BuscadorTasa();
    const convertTasa = tasa / 100 / 360;
    const result = this.monto * (1 + convertTasa * this.days);
    return {
      result,
      tasa,
    };
  }
}


