import { TimeSegment } from "./types";

export const mockSegments: TimeSegment[] = [
  {
    id: crypto.randomUUID(),
    title: "Наука",
    events: [
      { id: crypto.randomUUID(), description: "Открытие гравитационных волн", date: "2007-02-11" },
      {
        id: crypto.randomUUID(),
        description: "Публикация первой фотографии чёрной дыры",
        date: "2010-04-10",
      },
      {
        id: crypto.randomUUID(),
        description: "Присуждение Нобелевской премии CRISPR",
        date: "2016-10-07",
      },
      { id: crypto.randomUUID(), description: "Миссия Perseverance на Марс", date: "2021-02-18" },
      {
        id: crypto.randomUUID(),
        description: "Запуск телескопа Джеймса Уэбба",
        date: "2019-12-25",
      },
      {
        id: crypto.randomUUID(),
        description: "Доставка образцов астероида Bennu на Землю",
        date: "2020-09-24",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Литература",
    events: [
      {
        id: crypto.randomUUID(),
        description: "Нобелевская премия по литературе — Боб Дилан",
        date: "2011-10-13",
      },
      { id: crypto.randomUUID(), description: "Смерть Умберто Эко", date: "2016-02-19" },
      {
        id: crypto.randomUUID(),
        description: 'Публикация романа "Клара и Солнце" Кадзуо Исигуро',
        date: "2021-03-02",
      },
      {
        id: crypto.randomUUID(),
        description: "Нобелевская премия — Абдулразак Гурна",
        date: "2021-10-07",
      },
      {
        id: crypto.randomUUID(),
        description: 'Выход "Лестницы в небо" Лю Цысиня',
        date: "2023-06-01",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Кино",
    events: [
      { id: crypto.randomUUID(), description: 'Выход фильма "Ла-Ла Ленд"', date: "2016-12-09" },
      {
        id: crypto.randomUUID(),
        description: 'Премия "Оскар" за "Форму воды"',
        date: "2018-03-04",
      },
      {
        id: crypto.randomUUID(),
        description: 'Премьера "Паразитов" — лучший фильм 2020',
        date: "2020-02-09",
      },
      { id: crypto.randomUUID(), description: 'Выход фильма "Дюна"', date: "2021-10-22" },
      {
        id: crypto.randomUUID(),
        description: 'Премия "Оскар" за "Все везде и сразу"',
        date: "2025-03-12",
      },
      { id: crypto.randomUUID(), description: 'Выход "Оппенгеймера"', date: "2023-07-21" },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Технологии",
    events: [
      { id: crypto.randomUUID(), description: "Запуск Tesla Model 3", date: "2020-07-07" },
      { id: crypto.randomUUID(), description: "Слияние AMD и Xilinx", date: "2020-10-27" },
      { id: crypto.randomUUID(), description: "Появление GPT-3 от OpenAI", date: "2020-06-11" },
      { id: crypto.randomUUID(), description: "Apple переходит на чипы M1", date: "2020-11-10" },
      { id: crypto.randomUUID(), description: "Запуск ChatGPT", date: "2022-11-30" },
      { id: crypto.randomUUID(), description: "Анонс Apple Vision Pro", date: "2023-06-05" },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Спорт",
    events: [
      { id: crypto.randomUUID(), description: "Олимпиада в Рио-де-Жанейро", date: "2016-08-05" },
      {
        id: crypto.randomUUID(),
        description: "Финал ЧМ по футболу — Франция победила Хорватию",
        date: "2018-07-15",
      },
      {
        id: crypto.randomUUID(),
        description: "Олимпиада в Токио (отложена с 2020)",
        date: "2021-07-23",
      },
      { id: crypto.randomUUID(), description: "Смерть Диего Марадоны", date: "2020-11-25" },
      { id: crypto.randomUUID(), description: "ЧМ по футболу в Катаре", date: "2024-11-20" },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Музыка",
    events: [
      {
        id: crypto.randomUUID(),
        description: 'Выход альбома "Lemonade" Бейонсе',
        date: "2016-04-23",
      },
      {
        id: crypto.randomUUID(),
        description: 'Трилогия "Man on the Moon III" — Kid Cudi',
        date: "2020-12-11",
      },
      { id: crypto.randomUUID(), description: "Концерт BTS в Нью-Йорке", date: "2021-11-27" },
      {
        id: crypto.randomUUID(),
        description: "Возвращение Rihanna с новым синглом",
        date: "2022-10-28",
      },
      {
        id: crypto.randomUUID(),
        description: 'Премия Grammy — альбом года для "Harry’s House"',
        date: "2023-02-05",
      },
      {
        id: crypto.randomUUID(),
        description: 'Taylor Swift запускает "Eras Tour"',
        date: "2024-03-17",
      },
    ],
  },
];
