import React from "react";
import styles from "./schedule.module.css";
import { format } from "date-fns";
import { ruShort } from "../../locales/ru_days_short";
import { getISODay } from "date-fns";
import { add, sub } from "date-fns";
import { CalendarDay } from "../intefaces";
import Day from "../TableGrid/Day";
import {
  useState,
  useEffect,
} from "react";
//components
import TableGrid from "../TableGrid/TableGrid";
import Slot from "../Slot/Slot";

import { useSelector } from "react-redux";
import {
  selectTheme,
  selectDevice,
} from "../../store/features/device";

import { DeviceType } from "../enums";

export default function Schedule() {
  //component settings
  const theme = useSelector(
    selectTheme
  );
  const device = useSelector(
    selectDevice
  );

  //static data
  const getFirstWeekDay = (
    today: Date
  ) => {
    const daysPassed =
      getISODay(today) - 1;
    return daysPassed === 0
      ? today
      : sub(today, {
          days: daysPassed,
        });
  };
  //typezation
  const formateDate = (
    day: Date,
    scheme: any
  ) => {
    const { dateFormat, local } =
      scheme;
    return format(
      day,
      dateFormat,
      local
    );
  };

  const today = new Date();

  const daysToShow = () => {
    if (device === DeviceType.mobile) {
      return 1;
    }
    return 7;
  };

  const [
    daysInSchedule,
    setDaysInSchedule,
  ] = useState(daysToShow());

  useEffect(() => {
    setDaysInSchedule(daysToShow());
  }, [device]);

  const [
    firstDayOfWeek,
    setFirstDayOfWeek,
  ] = useState(getFirstWeekDay(today));

  const selectedWeek: string[] = [];

  const dateFormationScheme = {
    dateFormat: "E, dd MMM",
    local: { locale: ruShort },
  };

  for (
    let i = 0;
    i < daysInSchedule;
    i++
  ) {
    const day = add(firstDayOfWeek, {
      days: i,
    });
    selectedWeek.push(
      formateDate(
        day,
        dateFormationScheme
      )
    );
  }

  const extractShortDate = (
    fullDate: string
  ) => fullDate.split(",")[1].trim();

  const selectedPeriod =
    selectedWeek.length > 0
      ? `${extractShortDate(
          String(selectedWeek[0])
        )} - ${extractShortDate(
          String(
            selectedWeek[
              selectedWeek.length - 1
            ]
          )
        )}`.replace(/\./g, "")
      : "";

  const changeWeek = (
    changeFunc: Function
  ) => {
    setFirstDayOfWeek(
      changeFunc(firstDayOfWeek, {
        days:
          device === "mobile" ? 1 : 7,
      })
    );
  };

  //from api для запроса к апи мы передаем firstDayOfWeek и запрашиваемый временной промежуток - для начала будет норм сделать поддержку week (desktop) и day (mobile)
  /* Вынести куда-то отсюда */
  const arrowButton = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19L17 12L10 5"
        stroke="#666666"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const calendarIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M7 4V2.5M17 4V2.5M2.5 9h19"
        />
        <path
          fill="currentColor"
          d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
        />
      </g>
    </svg>
  );
  const dropdownArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19 9l-7 6l-7-6"
      />
    </svg>
  );

  /* ________________________ */

  return (
    <>
      {/* rename this ai bullshit */}
      <section
        aria-label="Календарь"
        className={styles.calendar}
        data-theme={theme}
        data-device={device}
      >
        <div
          className={
            styles["calendar-header"]
          }
        >
          <h3
            className={
              styles[
                "calendar-header__heading"
              ]
            }
          >
            {selectedPeriod}
          </h3>
          <div
            className={
              styles[
                "nav-btn__container"
              ]
            }
          >
            <button
              className={`${styles["nav-btn"]} ${styles.reversed}`}
              onClick={() =>
                changeWeek(sub)
              }
            >
              {arrowButton}
            </button>
            <button
              className={
                styles["nav-btn"]
              }
              onClick={() =>
                changeWeek(add)
              }
            >
              {arrowButton}
            </button>
          </div>
          <div
            className={
              styles["header-actions"]
            }
          >
            <button
              className={styles.chip}
            >
              {calendarIcon}
              <span
                className={
                  styles["chip-name"]
                }
              >
                Неделя
              </span>
              {dropdownArrow}
            </button>
            <button
              className={styles.primary}
            >
              Добавить
            </button>
          </div>
        </div>
        <div
          className={
            styles["calendar-content"]
          }
        >
          <div
            className={
              styles["slots-wrapper"]
            }
          >
            <Slot
              slot={{
                title: "test",
                description: "lol",
                time: "14:00-16:00",
              }}
            ></Slot>
          </div>
          <TableGrid
            days={selectedWeek}
          ></TableGrid>
        </div>
      </section>
    </>
  );
}
