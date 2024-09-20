export const Faq = () => {
  return (
    <>
      <div className="py-12 px-5">
        <div className="lg:max-w-[1200px] mx-auto my-0 flex lg:flex-row gap-12 flex-col">
          <div className="lg:w-[576px] ">
            <h2 className="text-[#424242] lg:text-[44px] text-[28px] font-[600]">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="lg:w-[576px]">
            <details className="flex flex-col gap-4">
              <summary className="list-none py-4 cursor-pointer flex justify-between font-bold">
                ¿Cómo funciona el depósito a plazo fijo?{" "}
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99844 2.5C8.44027 2.5 8.79844 2.85817 8.79844 3.3L8.79844 11.7686L12.2328 8.33431C12.5452 8.0219 13.0517 8.0219 13.3641 8.33431C13.6765 8.64673 13.6765 9.15327 13.3641 9.46569L8.56412 14.2657C8.2517 14.5781 7.74517 14.5781 7.43275 14.2657L2.63275 9.46569C2.32033 9.15327 2.32033 8.64673 2.63275 8.33431C2.94517 8.0219 3.4517 8.0219 3.76412 8.33431L7.19844 11.7686L7.19844 3.3C7.19844 2.85817 7.55661 2.5 7.99844 2.5Z"
                      fill="#121212"
                    ></path>
                  </svg>
                </span>{" "}
              </summary>
              <p className="text-[18px] text-pretty text-[#666] py-4">
                El depósito a plazo fijo o Póliza de Inversión es un instrumento
                de inversión con el que puedes guardar tus ahorros por un tiempo
                determinado a cambio de recibir intereses. Si contratas una
                Póliza de Inversión Digital en Banco Guayaquil, puedes acceder a
                una tasa de interés preferencial, así como elegir si esta se
                renueva automáticamente o no al cumplir el plazo fijo pactado.
                Además, sumas intereses desde el día de la contratación, los
                cuales puedes recibir en tu cuenta y en la frecuencia que
                elijas.
              </p>
            </details>
            <hr className="py-6" />
          </div>
        </div>
      </div>
    </>
  );
};
