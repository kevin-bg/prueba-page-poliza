import { useFetchData } from "../hooks/useFetchData";
import { Badge } from "./badge";
import { Image } from "astro:assets";

export const Hero = () => {
  const list = [
    {
      id: 1,
      item: "Completa el proceso 100% en línea y sin costo.",
    },
    {
      id: 2,
      item: "Selecciona un plazo desde 31 hasta 720 días.",
    },
    {
      id: 3,
      item: "Realiza seguimiento de tu inversión desde la app.",
    },
  ];

  return (
    <>
      <section className="bg-[#f0f2f6]">
        <div className="flex flex-col pt-[40px] pb-[96px] px-[20px] gap-16 md:flex-row lg:max-w-[1200px] lg:mx-auto my-0 lg:py-[96px] lg:px-0">
          <div className="flex flex-col gap-6 md:w-1/2 lg:gap-10">
            <Badge text="Póliza de Inversión" />
            <div className="flex flex-col gap-[24px] *:text-[#424242] lg:gap-8">
              <h1 className="text-[33px] lg:text-[44px]">
                Multiplica tu dinero con un Depósito a Plazo Fijo
              </h1>
              <p className="text-[16px] lg:text-[22px]">
                Invierte sin costo, desde $10005 por un mínimo de 20 días, y
                gana intereses desde 6.20% hasta 8.35%
              </p>
              <ul className="flex flex-col gap-[8px] *:text-[16px] *:lg:text-[18px] lg:gap-[18px]">
                {list.map((li) => (
                  <li key={li.id} className="flex gap-2 place-items-start ">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE3IDE3Ij48bWFzayBpZD0icHJlZml4X19hIiB3aWR0aD0iMTciIGhlaWdodD0iMTciIHg9IjAiIHk9IjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiPjxyZWN0IHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgZmlsbD0iI0Q5RDlEOSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI3ByZWZpeF9fYSkiPjxwYXRoIGZpbGw9IiMyNEExNDgiIGQ9Ik03LjczOSA5LjMzMiA2LjQ0NiA3Ljk4N2EuNTA0LjUwNCAwIDAgMC0uMzktLjE3OC41OTEuNTkxIDAgMCAwLS40MDcuMTYuNTYuNTYgMCAwIDAtLjE3Ny40MDdjMCAuMTU0LjA1OS4yOS4xNzcuNDA3bDEuNzE4IDEuN2EuNTEuNTEgMCAwIDAgLjc0MyAwbDMuMjQxLTMuMjIyYS41My41MyAwIDAgMCAuMTYtLjM5LjUwNC41MDQgMCAwIDAtLjE3OC0uMzkuNTIuNTIgMCAwIDAtLjM4LS4xMzIuNTIzLjUyMyAwIDAgMC0uMzYzLjE1TDcuNzM5IDkuMzMyWm0tMS44NiA2LjE4LTEuMDk4LTEuODc3LTIuMTk2LS40NDJhLjUxOC41MTggMCAwIDEtLjMyNy0uMjEzLjQ2Mi40NjIgMCAwIDEtLjA5OC0uMzcybC4yNDgtMi4xMjVMMS4wMSA4Ljg1NEEuNDguNDggMCAwIDEgLjg2OCA4LjVhLjQ4LjQ4IDAgMCAxIC4xNDEtLjM1NGwxLjQtMS42MTJMMi4xNiA0LjQxYS40NjIuNDYyIDAgMCAxIC4wOTgtLjM3MS41MTguNTE4IDAgMCAxIC4zMjctLjIxM2wyLjE5Ni0uNDQzTDUuODggMS40ODhjLjA3MS0uMTE4LjE3MS0uMjAxLjMwMS0uMjQ4YS40OTcuNDk3IDAgMCAxIC4zOS4wMTdsMS45My45MDQgMS45My0uOTA0YS41MjYuNTI2IDAgMCAxIC4zOS0uMDI2Yy4xMy4wNDEuMjMuMTIuMy4yMzlsMS4xMTYgMS45MTIgMi4xNzkuNDQzYy4xMy4wMjQuMjM5LjA5NS4zMjcuMjEzYS40NjMuNDYzIDAgMCAxIC4wOTguMzcxbC0uMjQ4IDIuMTI1IDEuMzk5IDEuNjEyYS40OC40OCAwIDAgMSAuMTQxLjM1NC40OC40OCAwIDAgMS0uMTQxLjM1NGwtMS40IDEuNjMuMjQ5IDIuMTI0YS40NjIuNDYyIDAgMCAxLS4wOTguMzcyLjUxOC41MTggMCAwIDEtLjMyNy4yMTNsLTIuMTc5LjQ0My0xLjExNSAxLjg5NGEuNTI3LjUyNyAwIDAgMS0uMzAxLjI0LjUyNi41MjYgMCAwIDEtLjM5LS4wMjdMOC41IDE0Ljg0bC0xLjkzLjkwM2EuNDk3LjQ5NyAwIDAgMS0uMzkuMDE4LjU2Ny41NjcgMCAwIDEtLjMtLjI0OFoiLz48L2c+PC9zdmc+"
                      width={17}
                      height={17}
                      className="py-[3px]"
                      alt="icons"
                    />
                    <span className="text-wrap">{li.item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/#"
              className="bg-[#0d76ae] uppercase text-center text-white px-[14px] py-[20px] rounded-[8px] hover:scale-105 transition-all ease-in-out duration-300 [letter-spacing:_2px] font-bold"
            >
              CONTRATAR UNA PÓLIZA
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.bancoguayaquil.com/static/c5e79a799467e56b1322c09528abb2f4/6cac9/image-39-6687050613a18.webp"
              loading="lazy"
              alt="hero photo"
              className="border-2 border-black rounded-[16px] min-w-full"
            />
          </div>
        </div>
        
      </section>
    </>
  );
};
