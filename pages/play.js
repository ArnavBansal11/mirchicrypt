import { useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import LoadingFullScreen from "../components/helping";
import axios from "axios";
import ErrorScreen from "../components/error";
import Nav, { SideDrawer, Backdrop } from "../components/nav";
import styles from "../styles/play.scss";

const Play = () => {
  const PlayComponent = ({ level }) => {
    return (
      <div>
        <h2>{`Level ${level.level} - "${level.name}"`}</h2>
        <h4>{level.question}</h4>
        {level.attachments.length > 0 && (
          <div>
            <h4>Attachments</h4>
            <div className={styles.main__attachments}>
              <h6>HEllo.png</h6>
              <h6>HEllo.png</h6>
            </div>
          </div>
        )}
        <div className={styles.main__submit_area} style={{ marginTop: level.attachments.length < 1 ? "22%" : "14%" }}>
          <input placeholder="Your Answer" className={styles.main__textbox} />
          <button className={styles.main__submitButton}>
            <p>Submit</p>
          </button>
        </div>
      </div>
    );
  };

  const [session, loading] = useSession();
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [level, setLevel] = useState({});
  const [message, setMessage] = useState();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/play/currentLevel").then((res) => {
      if (!res.data.success) {
        setSuccess(false);
        setMessage(res.data.message);
        setLoading(false);
      } else {
        setSuccess(true);
        setLevel(res.data.level);
        setLoading(false);
      }
    });
  }, [loading]);

  return loading || isLoading ? (
    <LoadingFullScreen />
  ) : !success ? (
    <ErrorScreen message={message} />
  ) : success && session ? (
    <div className={styles.main}>
      <Nav setSideBarOpen={setSideBarOpen} /> <SideDrawer show={sideBarOpen} />
      {sideBarOpen ? (
        <>
          <Backdrop setSideBarOpen={setSideBarOpen} />
        </>
      ) : null}
      <PlayComponent level={level} />
    </div>
  ) : (
    <ErrorScreen message="An error occured" />
  );
};

export default Play;
