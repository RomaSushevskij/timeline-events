import { TimeSegment } from "@/modules/timeline-viewer";

export const mockSegments: TimeSegment[] = [
  {
    id: crypto.randomUUID(),
    title: "Наука",
    events: [
      {
        id: crypto.randomUUID(),
        description:
          "Открытие гравитационных волн подтвердило общую теорию относительности и стало новым этапом в астрономии.",
        date: "2007-02-11",
      },
      {
        id: crypto.randomUUID(),
        description:
          "Первая фотография чёрной дыры в M87 стала символом достижений проекта Event Horizon Telescope.",
        date: "2010-04-10",
      },
      {
        id: crypto.randomUUID(),
        description:
          "Нобелевская премия за CRISPR-Cas9, открывшую путь к лечению наследственных заболеваний.",
        date: "2016-10-07",
      },
      {
        id: crypto.randomUUID(),
        description:
          "Посадка Perseverance на Марс с целью поиска следов жизни и сбора образцов для Земли.",
        date: "2021-02-18",
      },
      {
        id: crypto.randomUUID(),
        description: "Запуск телескопа Джеймса Уэбба для изучения первых галактик и экзопланет.",
        date: "2019-12-25",
      },
      {
        id: crypto.randomUUID(),
        description:
          "Капсула с образцами астероида Bennu доставлена на Землю в рамках миссии OSIRIS-REx.",
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
        description:
          "Нобелевская премия Бобу Дилану за вклад в поэзию в рамках американской песенной традиции.",
        date: "2011-10-13",
      },
      {
        id: crypto.randomUUID(),
        description: "Смерть Умберто Эко — писателя и философа, автора 'Имени розы'.",
        date: "2016-02-19",
      },
      {
        id: crypto.randomUUID(),
        description:
          'Выход романа "Клара и Солнце" Кадзуо Исигуро о ИИ, одиночестве и человечности.',
        date: "2021-03-02",
      },
      {
        id: crypto.randomUUID(),
        description: "Нобелевская премия Абдулразаку Гурне за освещение последствий колониализма.",
        date: "2021-10-07",
      },
      {
        id: crypto.randomUUID(),
        description:
          'Выход романа "Лестница в небо" Лю Цысиня — продолжение китайской научной фантастики.',
        date: "2023-06-01",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Кино",
    events: [
      {
        id: crypto.randomUUID(),
        description: 'Фильм "Ла-Ла Ленд" стал олицетворением Голливуда, получив множество наград.',
        date: "2016-12-09",
      },
      {
        id: crypto.randomUUID(),
        description: 'Оскар за "Форму воды" — фильм с уникальной атмосферой и метафорами.',
        date: "2018-03-04",
      },
      {
        id: crypto.randomUUID(),
        description: '"Паразиты" — первый неанглоязычный фильм, получивший Оскар за лучший фильм.',
        date: "2020-02-09",
      },
      {
        id: crypto.randomUUID(),
        description: 'Экранизация "Дюны" от Вильнёва — масштабный научно-фантастический эпос.',
        date: "2021-10-22",
      },
      {
        id: crypto.randomUUID(),
        description: '"Всё везде и сразу" — победитель Оскара за оригинальность и эмоциональность.',
        date: "2025-03-12",
      },
      {
        id: crypto.randomUUID(),
        description:
          'Фильм "Оппенгеймер" от Нолана — биографическая драма о создателе атомной бомбы.',
        date: "2023-07-21",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Технологии",
    events: [
      {
        id: crypto.randomUUID(),
        description: "Запуск Tesla Model 3 ускорил переход к устойчивой энергетике.",
        date: "2020-07-07",
      },
      {
        id: crypto.randomUUID(),
        description: "Слияние AMD и Xilinx укрепило позиции в высокопроизводительных вычислениях.",
        date: "2020-10-27",
      },
      {
        id: crypto.randomUUID(),
        description: "Появление GPT-3 стало шагом к более естественному ИИ.",
        date: "2020-06-11",
      },
      {
        id: crypto.randomUUID(),
        description: "Переход Apple на чипы M1 ознаменовал новую эру для Mac.",
        date: "2020-11-10",
      },
      {
        id: crypto.randomUUID(),
        description: "Запуск ChatGPT открыл доступ к ИИ для миллионов пользователей.",
        date: "2022-11-30",
      },
      {
        id: crypto.randomUUID(),
        description: "Анонс Apple Vision Pro — гарнитуры смешанной реальности нового поколения.",
        date: "2023-06-05",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Спорт",
    events: [
      {
        id: crypto.randomUUID(),
        description: "Олимпиада 2016 в Рио стала ареной рекордов и социальных инициатив.",
        date: "2016-08-05",
      },
      {
        id: crypto.randomUUID(),
        description: "Франция победила Хорватию в зрелищном финале ЧМ-2018.",
        date: "2018-07-15",
      },
      {
        id: crypto.randomUUID(),
        description: "Олимпиада в Токио прошла с ограничениями и стала символом устойчивости.",
        date: "2021-07-23",
      },
      {
        id: crypto.randomUUID(),
        description: "Смерть Марадоны вызвала волну скорби по всему миру.",
        date: "2020-11-25",
      },
      {
        id: crypto.randomUUID(),
        description: "ЧМ-2022 в Катаре стал первым зимним мундиалем с технологичными решениями.",
        date: "2024-11-20",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Музыка",
    events: [
      {
        id: crypto.randomUUID(),
        description:
          'Альбом "Lemonade" Бейонсе стал культурным феноменом, объединив личное, политическое и музыкальное.',
        date: "2016-04-23",
      },
      {
        id: crypto.randomUUID(),
        description:
          '"Man on the Moon III" Kid Cudi стал важной вехой, отразившей его внутренние поиски.',
        date: "2020-12-11",
      },
      {
        id: crypto.randomUUID(),
        description:
          "Концерт BTS в Нью-Йорке подтвердил глобальное влияние кей-попа и самой группы.",
        date: "2021-11-27",
      },
      {
        id: crypto.randomUUID(),
        description: "Возвращение Rihanna с новым синглом напомнило о её влиянии на поп-сцену.",
        date: "2022-10-28",
      },
      {
        id: crypto.randomUUID(),
        description: 'Grammy за "Harry’s House" закрепил статус Гарри Стайлса как поп-иконы.',
        date: "2023-02-05",
      },
      {
        id: crypto.randomUUID(),
        description:
          'Тур "Eras Tour" Тейлор Свифт стал самым кассовым в истории и охватил всю её карьеру.',
        date: "2024-03-17",
      },
    ],
  },
];
