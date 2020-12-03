import { useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import LoadingFullScreen from "../components/helping";
import axios from "axios";
import ErrorScreen from "../components/error";
import { set } from "mongoose";

const Play = () => {
  const [session, loading] = useSession();
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [level, setLevel] = useState({});
  const [message, setMessage] = useState();

  useEffect(() => {
    if (session) {
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
    }
  }, [loading]);

  return loading || isLoading ? (
    <LoadingFullScreen />
  ) : (
    <ErrorScreen message={"You have been disqualified"} />
  );
};

export default Play;
