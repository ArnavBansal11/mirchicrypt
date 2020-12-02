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

const Button = ({text, onPressed, style}) => {
  return <div style={style} className={styles.button} onClick={onPressed}>{ text}</div>
} 

export default LoadingFullScreen;
export {Button}
