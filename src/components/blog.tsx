import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const PostBlog = () => {
  const Post = [
    {
      id: 1,
      title: "Cuenta de Ahorros vs. Cuenta Corriente: Diferencias",
      date: "15 NOV 2023",
      href: "/",
      img: "https://www.bancoguayaquil.com/static/4e96ab2afe3226d302c4751d2b6d8f1d/4ec16/portada-post-1.webp",
      time: "5 min",
      description:
        "La mayoría de nosotros nos iniciamos en el mundo financiero escuchando a los adultos hablar de “cuenta de ahorros” o “cuenta corriente”. Ambas cuentas parecen similares y puede ser confuso, pero te contamos en qué consiste cada una y sus diferencias.",
    },
    {
      id: 2,
      title: "Cuenta de Ahorros vs. Cuenta Corriente: Diferencias",
      date: "15 NOV 2023",
      href: "/",
      img: "https://www.bancoguayaquil.com/static/4e96ab2afe3226d302c4751d2b6d8f1d/4ec16/portada-post-1.webp",
      time: "5 min",
      description:
        "La mayoría de nosotros nos iniciamos en el mundo financiero escuchando a los adultos hablar de “cuenta de ahorros” o “cuenta corriente”. Ambas cuentas parecen similares y puede ser confuso, pero te contamos en qué consiste cada una y sus diferencias.",
    },
    {
      id: 3,
      title: "Cuenta de Ahorros vs. Cuenta Corriente: Diferencias",
      date: "15 NOV 2023",
      href: "/",
      img: "https://www.bancoguayaquil.com/static/4e96ab2afe3226d302c4751d2b6d8f1d/4ec16/portada-post-1.webp",
      time: "5 min",
      description:
        "La mayoría de nosotros nos iniciamos en el mundo financiero escuchando a los adultos hablar de “cuenta de ahorros” o “cuenta corriente”. Ambas cuentas parecen similares y puede ser confuso, pero te contamos en qué consiste cada una y sus diferencias.",
    },
  ];

  return (
    <div className="px-5 py-12 bg-[#f0f2f6]">
      <div className="max-w-[1200px] mx-auto my-0 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="lg:text-[30px] font-bold text-[16px]">Artículos del Blog</h2>
          <a className="text-[#0f62fe] text-[16px] uppercase font-bold hover:text-[#160f41] transition-all ease-in-out duration-300 " href="/">
            ver más artículos
          </a>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 lg:gap-6">
          {Post.map((item) => {
            return (
              <>
                <a
                  className="relative hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-300 flex flex-col gap-3"
                  key={item.id}
                  href={item.href}
                >
                  <img
                    className="w-[389px] h-[180px] object-cover rounded-[16px] border-2 border-black "
                    src={item.img}
                    width={350}
                    height={"auto"}
                  />
                  <span className="rounded-lg top-4 right-8 z-10 px-4 py-1 bg-[#f9f9f9] border-2 border-[#d0d0d0] absolute">
                    {item.time}
                  </span>
                  <div className="flex flex-col gap-2 ">
                    <span className="">{item.date}</span>
                    <h3 className="text-[24px] font-bold text-pretty">{item.title}</h3>
                    <p className="line-clamp-3 text-balance">{item.description}</p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
