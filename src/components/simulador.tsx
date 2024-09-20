import { Badge2 } from "./badge";
import { PolizaCalculo } from "./polizaCalculo";
import React, { useEffect, useState } from "react";

const SimulatorPoliza = () => {
  const [monto, setMonto] = useState(0);
  const [dias, setDias] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [interes, setInteres] = useState(0);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    switch (true) {
      case monto <= 99 && monto >= 1:
        setResultado(0);
        setInteres(0);
        setError({
          isError: true,
          message: "El monto mínimo de inversión es $100.00",
        });
        break;
      case monto >= 99000001:
        //document?.querySelector("form").reset()
        setError({
          isError: true,
          message: "El monto máximo de inversión es: $99,000,000.00 dólares",
        });
        setResultado(0);
        setInteres(0);
        break;

      default:
        const calculo = new PolizaCalculo(monto, dias);
        const result = calculo.calcularPoliza();
        setInteres(result.tasa);
        setResultado(result.result);
        setError({
          isError: false,
          message: "",
        });
        break;
    }
  }, [monto, dias]);

  const HandledChangeMonto = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (/^[0-9\b]+$/.test(value)) {
      setMonto(Number(value));
    }
  };

  return (
    <div className="px-[20px] py-12 bg-[#f0f2f6] ">
      <div className="flex flex-col gap-8 lg:max-w-[1200px] lg:mx-auto lg:flex-row">
      <div className="max-w-[576px] flex-col flex gap-8">
      <Badge2 text="Simulador" />
      <h2 className="text-[32px]">
        Calcula cuántos intereses ganarás con una inversión desde $100 por
        mínimo 31 días
      </h2>
      </div>
    <div className="max-w-[576px] flex-col gap-8 flex">
    <form className="flex flex-col gap-8">
        <div>
          <input
            className="h-[60px] border border-white w-full px-3 rounded-md focus:outline-none"
            onChange={HandledChangeMonto}
            required
            type="number"
            min={100}
            max={99000000}
            placeholder="Escribe el valor de tu póliza"
            onKeyDown={(e) => e.key === "e" && e.preventDefault()}
          />
          {error.isError ? (
            <p className="text-red-500 text-sm py-2 font-bold">
              {error.message}
            </p>
          ) : null}
        </div>

        <div className="">
          <select
            className="h-[60px] w-full rounded-md px-3"
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
          >
            <option value={0}>Elige la cantidad de días</option>
            <option value={31}>31 días</option>
            <option value={60}>60 días</option>
            <option value={90}>90 días</option>
            <option value={120}>120 días</option>
            <option value={180}>180 días</option>
            <option value={271}>271 días</option>
            <option value={361}>361 días</option>
          </select>
        </div>
      </form>

      <div className="bg-[#9cc0ff] px-4 py-6 rounded-md">
        <div className="flex justify-between">
          <span className="text-md font-bold">Recibirás:</span>
          <span className="text-md">
            Tasa del{" "}
            {interes.toLocaleString("es-EC", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
            %
          </span>
        </div>

        <span className="font-bold text-xl">
          $
          {resultado.toLocaleString("es-EC", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {dias <= 180 ? (
          <span
            style={{
              backgroundColor: "#E7F3E5",
              padding: "20px",
              borderRadius: "8px",
            }}
            className="text-sm"
          >
            Si el plazo es menor a 180 días, se realizará la retención del 2% al
            pago de los intereses de acuerdo a ley vigente del SRI.
          </span>
        ) : (
          ""
        )}

        <span
          style={{
            fontSize: "18px",
            fontWeight: "100",
            color: "#717171",
          }}
        >
          Este es un valor referencial de cuánto podrías ganar de intereses.{" "}
        </span>
        <a
          href={
            monto >= 100 && dias
              ? `https://apps.bancoguayaquil.com/BG.Neo.ContratacionOnLine.Web/Poliza?monto=${Number(
                  monto
                )}&plazo=${dias}`
              : `#`
          }
          target="__blank"
          className={`px-[14px] w-[280px] py-5 rounded-lg flex items-center justify-center text-center  gap-2 font-bold uppercase *:text-white hover:scale-105 transition-all ease-in-out duration-300  ${
            !monto || !dias || monto < 100 || monto > 99000001
              ? "bg-[#f9f9f9] text-[#717171]"
              : "bg-[#0f62fe] text-white"
          }`}
          onClick={(e) => {
            if (!monto || !dias || monto < 100 || monto > 99000001) {
              e.preventDefault();
            }
          }}
        >
          Continuar{" "}
          {!monto || !dias || monto < 100 || monto > 99000001 ? null : (
            <ArrowIcon />
          )}
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default SimulatorPoliza;

const ArrowIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    className="color-svg"
  >
    <path
      d="M8.33431 2.63422C8.64673 2.3218 9.15327 2.3218 9.46569 2.63422L14.2657 7.43422C14.5781 7.74664 14.5781 8.25317 14.2657 8.56559L9.46569 13.3656C9.15327 13.678 8.64673 13.678 8.33431 13.3656C8.0219 13.0532 8.0219 12.5466 8.33431 12.2342L11.7686 8.7999H3.3C2.85817 8.7999 2.5 8.44173 2.5 7.9999C2.5 7.55807 2.85817 7.1999 3.3 7.1999H11.7686L8.33431 3.76559C8.0219 3.45317 8.0219 2.94664 8.33431 2.63422Z"
      fillRule="evenodd"
    />
  </svg>
);
