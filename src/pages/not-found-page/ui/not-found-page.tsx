import { UiTypography } from "@/shared/ui/ui-typography";

import s from "./not-found-page.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <UiTypography variant={"h1"}>{"Страница не найдена"}</UiTypography>
    </div>
  );
};
