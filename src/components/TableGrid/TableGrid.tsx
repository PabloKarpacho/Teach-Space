import "./tableGrid.css";

import Day from "./Day";
interface TableDay {
  days: string[];
}

export default function TableGrid({ days }: TableDay) {
  const dayTime = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const dayList = days.map((day) => {
    const [monthDay, date] = day.split(",");
    return {
      dayOfWeek: monthDay,
      dayOfMonth: Number(date.trim().split(" ")[0]),
    };
  });

  const emptyCellRow: React.ReactElement[] = Array.from(
    { length: days.length },
    (_, i) => <td key={i} className="calendar-template__cell"></td>
  );

  const tableGridTemplate = dayTime.map((time) => (
    <tr key={time} className="calendar-template__row">
      <th className="calendar-template__time">{time}</th>
      {emptyCellRow}
    </tr>
  ));

  return (
    <table className="calendar-grid">
      <thead>
        <tr className="days">
          {dayList.map((day) => (
            <Day
              key={day.dayOfMonth}
              dayOfWeek={day.dayOfWeek}
              dayOfMonth={day.dayOfMonth}
            ></Day>
          ))}
        </tr>
      </thead>
      <tbody className="calendar-template">{tableGridTemplate}</tbody>
    </table>
  );
}
