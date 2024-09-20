export const BannerApp = () => {
  return (
    <>
      <div className="bg-[#160f41] relative">
        <div className="lg:max-w-[1200px] lg:mx-auto lg:my-0 pt-[96px] lg:py-[96px] px-[20px] lg:px-0 flex lg:flex-row flex-col justify-between relative gap-12">
          <div className="lg:w-[576px] flex flex-col gap-8 justify-start">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <img
                width={128}
                height={25}
                src="data:image/png;base64,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"
              />
              <span className="text-white text-[15px] font-bold">
                App: 4.8 Rating de 91.700 Reviews
              </span>
              
            </div>
            <p className="text-[44px] text-white">Descarga la App y regístrate en pocos minutos sin moverte de casa</p>
            <a className="bg-[#0f62fe] text-white px-[48px] py-[20px] w-fit rounded-[8px] uppercase tracking-[2px] text-center font-bold hover:scale-105 transition-all duration-300 ease-in-out" href="/">
            CONOCE MÁS SOBRE LA APP
            </a>
          </div>
          <div className="lg:w-[576px] flex-col flex gap-4 lg:absolute lg:right-0 lg:bottom-0 ">
           <img
           src="https://www.bancoguayaquil.com/static/5634f68692bfe7190d128894443045d6/6dd7e/app-image.webp "
            className="w-[398px] h-[435px]"
            
           />
          </div>
        </div>
      </div>
    </>
  );
};
