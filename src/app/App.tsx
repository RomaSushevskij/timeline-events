import { Suspense } from "react";

import { UiLoader } from "@/shared/ui/ui-loader";

import { AppRouter } from "./providers/app-router";

export const App = () => {
  return (
    <Suspense
      fallback={
        <div style={{ height: "100dvh" }}>
          <UiLoader />
        </div>
      }
    >
      <AppRouter />
    </Suspense>
  );
};
