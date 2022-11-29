import PropTypes from "prop-types";

Pagination.prototype = {
  pageInfo: PropTypes.string,
  fetchMore: PropTypes.func,
};

export default function Pagination({ pageInfo, fetchMore }) {
  return (
    <nav aria-label="Page navigation example">
      <button
        data-testid="pagination-previous"
        onClick={async () => {
          await fetchMore({
            variables: {
              after: pageInfo.startCursor,
              before: pageInfo.endCursor,
            },
          });
        }}
        className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        disabled={!pageInfo.hasPreviousPage}
      >
        Previous
      </button>

      <button
        data-testid="pagination-next"
        onClick={async () => {
          await fetchMore({
            variables: {
              after: pageInfo.startCursor,
              before: pageInfo.endCursor,
            },
          });
        }}
        disabled={!pageInfo.hasNextPage}
        className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </nav>
  );
}
