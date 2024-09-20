import { useEffect, useState } from "react";



export const useFetchData = () => {
  const contentfulToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;
  const contentfulSpace = import.meta.env.CONTENTFUL_SPACE_ID;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${contentfulSpace}/environments/staging/entries?access_token=${contentfulToken}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la data");
        }

        const jsonData = await response.json();
        //console.log("DATA", jsonData);
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return {
    data,
  };
};
