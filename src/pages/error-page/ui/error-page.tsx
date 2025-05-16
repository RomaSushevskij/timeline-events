import s from "./error-page.module.scss";

export const ErrorPage = () => {
  const handleReloadBtnClick = () => {
    window.location.reload();
  };

  return (
    <div className={s.root}>
      <h1>Что-то пошло не так</h1>
      <button color={"primary"} onClick={handleReloadBtnClick}>
        Обновить страницу
      </button>
    </div>
  );
};
