import styles from "./ProfileInfo.module.css";
import avatar from "../../img/image-jeremy.png";

const ProfileInfo = ({ name }) => {
  return (
    <div className={styles.profileInfo}>
      <img className={styles.profileImg} src={avatar} alt="Avatar" />
      <div className={styles.profileContent}>
        <span>Report for</span>
        <h1 className={styles.profileName}>{name}</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
