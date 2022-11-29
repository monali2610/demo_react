import PropTypes from "prop-types";

ErrorFallback.prototype = {
  error: PropTypes.any,
};
export default function ErrorFallback({ error }) {
  return (
    <p data-testid="error-fallback" className="text-center p-50">
      Something was Wrong!
    </p>
  );
}
