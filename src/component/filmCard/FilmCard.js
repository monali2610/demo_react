import PropTypes from "prop-types";
import Species from "../species";

FilmCard.prototype = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  director: PropTypes.string,
  speciesConnection: PropTypes.any,
};

export default function FilmCard({
  title,
  releaseDate,
  director,
  speciesConnection,
}) {
  return (
    <div className="block pt-4 pb-6 pl-6 pr-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark  :hover:bg-gray-700 mt-5">
      <div className="flex items-start mt-2">
        <div
          className="flex items-start mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-whit"
          data-testid="film-card-title"
        >
          Film : {title}
        </div>
        <div className="ml-auto text-sm">{releaseDate}</div>
      </div>
      <div className="ml-auto text-sm" data-testid="film-card-director">
        Director: {director}
      </div>
      <div
        className="ml-auto text-2xl font-bold "
        data-testid="film-card-species"
      >
        Species
      </div>
      <div className="flex mt-2 flex-wrap whitespace-pre ">
        {speciesConnection?.species?.map(({ name, classification }, index1) => (
          <Species name={name} classification={classification} key={index1} />
        ))}
      </div>
    </div>
  );
}
