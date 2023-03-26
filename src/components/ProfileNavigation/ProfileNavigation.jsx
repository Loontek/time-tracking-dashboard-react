import styles from "./ProfileNavigation.module.css";

const ProfileNavigation = ({ activeCategory, setActiveCategory }) => {
  const links = ["daily", "weekly", "monthly"];

  return (
    <nav className={styles.profileNavigation}>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a
              className={
                activeCategory === link
                  ? [styles.profileNavigationLink, styles.active].join(" ")
                  : styles.profileNavigationLink
              }
              onClick={() => setActiveCategory(link)}
            >{`${link[0].toUpperCase()}${link.slice(1)}`}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProfileNavigation;
