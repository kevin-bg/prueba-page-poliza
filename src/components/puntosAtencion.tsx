export const PuntosAtencion = () => {
  const data = [
    {
      id: 1,
      icon: <Icon />,
      title: "Puntos de Atención",
      description: "Cajeros y Agencias",
      link: "/",
    },
    {
      id: 2,
      icon: <Icon />,
      title: "Canales de Atención",
      description: "ChatBG y Centro de Ayuda",
      link: "/",
    },
    {
      id: 2,
      icon: <Icon />,
      title: "Canales Transaccionales",
      description: "ChatBG y Centro de Ayuda",
      link: "/",
    },
  ];
  return (
    <>
      <div className="py-12">
        <div className="lg:max-w-[1200px] mx-auto my-0 px-[20px]">
          <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
            {data.map((item) => {
              return (
                <div className="w-[350px] lg:w-auto lg:hover:scale-105 transition-all p-[40px] flex flex-col border-black gap-4 border-2 hover:border-2 hover:border-black lg:border-white transitiom-all ease-in-out duration-300 rounded-[16px]">
                  <span>{item.icon}</span>
                  <h3 className="text-[24px] font-bold">{item.title}</h3>
                  <p className="text-[18px] text-[#666]">{item.description}</p>
                  <a className="uppercase text-[15px] hover:text-[#0f62fe]" href={item.link}>
                    VER MAS
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
  >
    <mask
      id="mask0_303_665"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="41"
    >
      <rect y="0.507812" width="40" height="40" fill="#D9D9D9"></rect>
    </mask>
    <g mask="url(#mask0_303_665)">
      <path
        d="M13.3358 20.2296C14.1767 20.2296 14.8957 19.9301 15.4929 19.3312C16.0901 18.7326 16.3888 18.0128 16.3888 17.1717C16.3888 16.3308 16.0893 15.6118 15.4904 15.0146C14.8918 14.4173 14.1719 14.1187 13.3308 14.1187C12.49 14.1187 11.771 14.4182 11.1738 15.0171C10.5765 15.6157 10.2779 16.3355 10.2779 17.1767C10.2779 18.0175 10.5774 18.7365 11.1763 19.3337C11.7749 19.931 12.4947 20.2296 13.3358 20.2296ZM13.3333 37.1742C8.86111 33.3686 5.52083 29.8339 3.3125 26.57C1.10417 23.3061 0 20.2853 0 17.5075C0 13.3408 1.34028 10.0214 4.02083 7.54915C6.70139 5.07693 9.80556 3.84082 13.3333 3.84082C16.8611 3.84082 19.9653 5.07693 22.6458 7.54915C25.3264 10.0214 26.6667 13.3408 26.6667 17.5075C26.6667 20.2853 25.5625 23.3061 23.3542 26.57C21.1458 29.8339 17.8056 33.3686 13.3333 37.1742Z"
        fill="#1C1B1F"
      ></path>
    </g>
  </svg>
);
