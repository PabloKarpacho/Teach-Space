import { CalendarDay } from "../intefaces";

export default function Day({ dayOfMonth, dayOfWeek }: CalendarDay) {
  return (
    <th className="day" key={dayOfWeek}>
      {dayOfMonth + " " + dayOfWeek}
    </th>
  );
}
