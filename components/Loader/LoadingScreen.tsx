import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default LoadingScreen;
