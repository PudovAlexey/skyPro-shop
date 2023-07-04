import { Goods } from "../../types/types";
import ASKESTA from "../../public/ASKESTA.jpg";
import LUNAR from "../../public/LUNAR.jpg";
import MENU from "../../public/MENU.jpg";
import NASTAN from "../../public/NASTAN.jpg";
import TATRAN from "../../public/TATRAN.jpg";
import VILORA from "../../public/VILORA.jpg";

export const goods: Goods = {
  1: {
    id: 1,
    name: "Кровать TATRAN",
    description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    price: 120000,
    currency: "руб",
    img: TATRAN,
    createdAt: new Date("2023.5.20"),
  },
  2: {
    id: 2,
    name: "Кресло VILORA",
    description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    price: 21000,
    currency: "руб",
    img: VILORA,
    createdAt: new Date("2020.1.5"),
  },
  3: {
    id: 3,
    name: "Стол MENU",
    description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    price: 34000,
    currency: "руб",
    img: MENU,
    createdAt: new Date("2023.6.20"),
  },
  4: {
    id: 4,
    name: "Диван ASKESTA",
    description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    price: 68000,
    currency: "руб",
    img: ASKESTA,
    createdAt: new Date("2023.4.15"),
  },
  5: {
    id: 5,
    name: "Кресло LUNAR",
    description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    price: 40000,
    currency: "руб",
    img: LUNAR,
    createdAt: new Date("2018.3.25"),
  },
  6: {
    id: 6,
    name: "Шкаф Nastan",
    description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    price: 80000,
    currency: "руб",
    img: NASTAN,
    createdAt: new Date("2015.10.1"),
  },
};
