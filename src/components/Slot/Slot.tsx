import styles from "./Slot.module.css";

interface Slot {
  title: string;
  description: string;
  time: string;
}

export default function Slot(
  slot: Slot
) {
  return (
    <article className={styles.slot}>
      <h4
        className={styles["slot-title"]}
      >
        {slot.title}
      </h4>
      <p
        className={
          styles["slot-content"]
        }
      >
        {slot.description}
      </p>
      <time
        className={styles["slot-time"]}
      >
        {slot.time}
      </time>
    </article>
  );
}
