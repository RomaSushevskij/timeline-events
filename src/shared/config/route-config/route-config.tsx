import type { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/main-page";
import { NotFoundPage } from "@/pages/not-found-page";

enum AppRoutes {
  MAIN = "main",
  NOT_FOUND = "notFound",
}

type TRoutePath = Record<AppRoutes, string> & {
  getPath: <T extends Record<string, string | number>>(
    route: AppRoutes,
    params?: T | undefined,
  ) => string;
};

export const routePath: TRoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.NOT_FOUND]: "*",

  getPath: (route, params) => {
    return routePath[route].replace(/:([a-zA-Z]+)/g, (_, key) => String(params ? params[key] : ""));
  },
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
};
