import styles from "../../styles/LoadingDots.module.scss";

const LoadingComponent = () => {
  return (
    <div className={styles.ballLoader}>
      <div className={`${styles.ballLoaderBall} ${styles.ball1}`}></div>
      <div className={`${styles.ballLoaderBall} ${styles.ball2}`}></div>
      <div className={`${styles.ballLoaderBall} ${styles.ball3}`}></div>
    </div>
  );
};

export default LoadingComponent;
