import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "@/shared/config/route-config";
import { UiLoader } from "@/shared/ui/ui-loader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<UiLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
