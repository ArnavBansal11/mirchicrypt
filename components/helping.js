import styles from "./helping.scss";

const LoadingFullScreen = () => {
  return (
    <div className={styles.loaderFullScreen}>
      <div className={styles.bouncer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingFullScreen;
