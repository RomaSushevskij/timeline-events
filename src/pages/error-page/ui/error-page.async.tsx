import { lazy } from "react";

export const ErrorPageAsync = lazy(() => {
  return import("./error-page").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }));
});
