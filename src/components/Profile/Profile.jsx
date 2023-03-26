import styles from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

const Profile = ({ name, activeCategory, setActiveCategory }) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo name={name} />
      <ProfileNavigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default Profile;
