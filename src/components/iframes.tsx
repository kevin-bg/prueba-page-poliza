import type React from "react";
import type { iframeType } from "../types";
import useDimension from "../hooks/useDimension";

export const VideoComponent = ({
  id,
  width,
  heigth,
  title,
}: iframeType): React.ReactNode => {
  const { resizeWidth } = useDimension();
  return (
    <>
      <div className="px-5 flex flex-col gap-8 *:text-[#424242] py-[48px] lg:max-w-[1200px] lg:mx-auto lg:my-auto lg:flex-row ">
        <div className="flex flex-col gap-4 max-w-[576px]">
          <span className="font-bold lg:text-[30px]">Escuela Magenta</span>
          <h3 className="text-[32px] lg:text-[44px]">Cómo abrir una Póliza de Inversión desde tu App</h3>
        </div>
        <div className="lg:max-w-[576px] rounded-md max-w-[360px] w-100">
          <iframe
            width={360}
            height={240}
            src={id}
            className="max-w-[350px] h-[240px] lg:w-[576px] lg:h-[300px] w-100 lg:max-w-full"
            title={title}
            //frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            //  allowfullscreen
          />
        </div>
      </div>
    </>
  );
};
