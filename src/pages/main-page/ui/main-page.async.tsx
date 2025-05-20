import { lazy } from "react";

export const MainPageAsync = lazy(() => {
  return import("./main-page").then(({ MainPage }) => ({
    default: MainPage,
  }));
});
