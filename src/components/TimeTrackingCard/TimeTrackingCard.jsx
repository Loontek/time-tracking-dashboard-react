import styles from "./TimeTrackingCard.module.css";
import ellipsis from "../../img/icon-ellipsis.svg";

const TimeTrackingCard = ({ stat, activeCategory }) => {
  return (
    <article className={styles.card} id={styles[stat.title.toLowerCase().split(" ").join("-")]}>
      <div className={styles.cardIcon}></div>
      <div className={styles.cardContent}>
        <header className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{stat.title}</h2>
          <button className={styles.cardMoreBtn}>
            <img src={ellipsis} />
          </button>
        </header>
        <div className={styles.cardInfo}>
          <p className={styles.cardHours}>{stat.timeframes[activeCategory].current}hrs</p>
          <span className={styles.cardLastweek}>Last Week - {stat.timeframes[activeCategory].previous}hrs</span>
        </div>
      </div>
    </article>
  );
};

export default TimeTrackingCard;
