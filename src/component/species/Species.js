import PropTypes from "prop-types";

Species.prototype = {
  name: PropTypes.string,
  classification: PropTypes.string,
};

export default function Species({ name, classification }) {
  return (
    <div className="mr-10 mb-5">
      <div className="mb-2text-1xl text-gray-500 font-bold dark:text-whit">
        {name}
      </div>
      <div className="ml-auto text-sm" data-testid="species-classification">
        Classification: <span className="text-blue-600 ">{classification}</span>
      </div>
    </div>
  );
}
