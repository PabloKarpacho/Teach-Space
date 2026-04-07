import styles from "./tableGrid.module.css";
import { CalendarDay } from "../intefaces";

export default function Day({
  dayOfMonth,
  dayOfWeek,
}: CalendarDay) {
  return (
    <th
      className={styles.day}
      key={dayOfWeek}
    >
      {dayOfMonth + " " + dayOfWeek}
    </th>
  );
}
