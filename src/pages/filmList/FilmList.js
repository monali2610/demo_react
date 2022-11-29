import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import FilmCard from "../../component/filmCard";
import Pagination from "../../component/pagination";
import GET_FILMS from "../../query/GET_FILMS";

FilmList.prototype = {};

export default function FilmList() {
  const [allFilms, setAllFilms] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  const { loading, error, data, fetchMore } = useQuery(GET_FILMS, {
    variables: {
      first: 10,
      last: 10,
      after: "",
      before: "",
    },
  });

  useEffect(() => {
    if (data) {
      setAllFilms(data.allFilms.films);
      setPageInfo(data.allFilms.pageInfo);
    }
  }, [data]);

  if (loading)
    return (
      <p data-testid="fetch-loading" className="text-center p-50">
        Loading...
      </p>
    );

  if (error)
    return (
      <p data-testid="fetch-error" className="text-center p-50">
        Something was Wrong!
      </p>
    );

  return (
    <div className="block p-10 " data-testid="fetch-film-list">
      <div className="items-center text-4xl font-bold tracking-tight text-gray-900 dark:text-whit text-center mb-10">
        Films List
      </div>
      {allFilms?.length > 0 &&
        allFilms?.map(
          ({ title, director, releaseDate, speciesConnection }, index) => (
            <FilmCard
              key={index}
              title={title}
              director={director}
              releaseDate={releaseDate}
              speciesConnection={speciesConnection}
            />
          )
        )}
      <div className="mt-5 flex items-end">
        {pageInfo && <Pagination pageInfo={pageInfo} fetchMore={fetchMore} />}
      </div>
    </div>
  );
}
