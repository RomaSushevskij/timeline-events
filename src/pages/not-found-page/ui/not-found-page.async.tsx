import { lazy } from "react";

export const NotFoundPageAsync = lazy(() => {
  return import("./not-found-page").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }));
});
