export const Body = ({data}: any) => {
  
  return (
    <>
      <section className="bg-white py-24 px-5 *:text-[#424242]">
        <div className="flex flex-col gap-24 lg:max-w-[1200px] mx-auto my-0">
          {data.map((cards: any) => (
            <ProductContent
              id={cards.id}
              title={cards.title}
              paragraph={cards.paragraph}
              image={cards.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export const ProductContent = ({
  id,
  title,
  paragraph,
  image,
}: {
  id: number;
  title: string;
  paragraph: string;
  image: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row justify-between lg:gap-12" key={id}>
        <div className="lg:max-w-[576px] flex flex-col gap-8">
        <h2 className="text-[32px] lg:text-[44px] text-pretty">{title}</h2>
        <p className="text-[20px] text-pretty">{paragraph}</p>
        </div>
        <img
          src={image}
          alt="primary"
          loading="lazy"
          width={'100%'}
          height={300}
          className="border-2 border-black rounded-[16px] lg:max-w-[576px] lg:w-[576px] lg:h-[300px] lg:object-cover"
        />
      </div>
    </>
  );
};
