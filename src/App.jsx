import { useState } from "react";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import TimeTrackingCard from "./components/TimeTrackingCard/TimeTrackingCard";
import stats from "./data.json";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("weekly");

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Profile name={"Jeremy Robson"} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        {stats.map((stat, i) => (
          <TimeTrackingCard key={i} stat={stat} activeCategory={activeCategory} />
        ))}
      </div>
    </div>
  );
};

export default App;
