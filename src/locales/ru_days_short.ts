import { ru } from "date-fns/locale";

export const ruShort = {
  ...ru,
  localize: {
    ...ru.localize,
    day: (dayIndex: number) => {
      const values = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
      return values[dayIndex];
    },
    // month: (monthIndex: number) => {
    //   const months = [
    //     "янв",
    //     "фев",
    //     "март",
    //     "апр",
    //     "май",
    //     "июнь",
    //     "июль",
    //     "авг",
    //     "сент",
    //     "окт",
    //     "нояб",
    //     "дек",
    //   ];
    //   return months[monthIndex];
    // },
  },
};
