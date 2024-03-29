import User from "@/models/User";
import db from "@/utils/db";

const { getSession } = require("next-auth/react");

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send("Admin signin required");
  }

  if (req.method === "DELETE") {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: "Method not allowed" });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    if (user.email === "jaysonelayne@outlook.com") {
      return res.status(400).send({ message: "Cannot delete admin" });
    }
    await user.remove();
    await db.disconnect();
    res.send({ message: "User Deleted" });
  } else {
    await db.disconnect();
    return res.status(404).send({ message: "User Not Found" });
  }
};

export default handler;
