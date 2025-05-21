import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import "../app/styles/index.scss";
import ErrorBoundary from "./providers/error-boundary";

const root = createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
