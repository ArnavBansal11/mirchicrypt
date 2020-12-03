import connect from "../../../utils/dbConnect";
import { getSession } from "next-auth/client";
import User from "../../../models/user";
import Level from "../../../models/level";

const handler = async (req, res) => {
  console.log(req.headers)
  if (req.method != "GET") {
    return res.json({ error: "METHOD NOT DEFINED FOR THIS ROUTE" });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.json({ success: false, message: "You are not worthy" });
  }

  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    res.json({ success: false, message: "An error occured" });
  }

  if (user.disqualified) {
    res.json({ success: false, message: "You are Disqualified" });
  }

  if (user.currentLevel > 10) {
    return res.json({
      success: false,
      message: "Congrats! You have completed the hunt",
    });
  }
  const level = await Level.findOne({ level: user.currentLevel }).select(
    "-answer"
  );
  return res.json({ success: true, level: level });
};

export default connect(handler);
