import "./App.css";
import FilmList from "./pages/filmList";
import ErrorFallback from "./component/errorFallback";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FilmList />
    </ErrorBoundary>
  );
};

export default App;
