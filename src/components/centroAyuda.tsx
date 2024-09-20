export const CentroAyuda = () => {
  return (
    <>
      <div className="bg-[#160f41] py-12">
        <div className="lg:max-w-[1200px] lg:mx-auto my-0 flex flex-col py-12 gap-8 items-center">
          <div className="lg:max-w-[720px] flex flex-col gap-12">
            <h2 className="text-white text-[35px] lg:w-[578px] text-center w-100">
              Si aún tienes preguntas, visita el Centro de Ayuda y encuentra las
              respuestas
            </h2>
            <div className="flex gap-4 justify-center flex-col lg:flex-row items-center">
              <a href="/" className="text-[14px] tracking-[3px] font-bold w-[302px] text-center bg-[#0f62fe] text-white rounded-[8px] px-[14px] py-[20px] hover:scale-105 transition-all ease-in-out duration-300">
                IR AL CENTRO DE AYUDA
              </a>
              <a href="/" className="text-[14px] font-bold tracking-[3px] text-center bg-[#0f62fe] w-[302px] text-white rounded-[8px] px-[30px] py-[20px]  hover:scale-105 transition-all ease-in-out duration-300">
              CHATEA CON UN AGENTE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
