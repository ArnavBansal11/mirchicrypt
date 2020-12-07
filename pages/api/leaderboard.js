import connect from "../../utils/dbConnect";
import User from "../../models/user";
import { getSession } from "next-auth/client";

const leaderboard = async (req, res) => {
  if (req.method != "GET") {
    return res.json({
      success: false,
      message: "METHOD not specified for this route",
    });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.json({ success: false, message: "You are not worthy" });
  }

  const lb = await User.find({}).sort({
    currentLevel: "descending",
    solvedAt: "ascending",
  });
    
    return res.json({success: true, lb: lb})
};

export default connect(leaderboard);
