import { hashPassword } from "../utils/hash.js";
import { connectDB } from "../utils/sql.js";

export const login = async (req, res) => {
  const sql = connectDB();
  const query = {
    text: "select * from users where username = $1",
    values: [req.body.username],
  };
  const data = await sql.query(query);
  if (data.rows.length === 0) {
    res.json({ isLogin: false, user: {} });
    return;
  }
  //in here we grab only the first 15 characters of password from salted hash cause
  //they have the salt on those, then we have to process the password the user inputs and compare it.
  const salt = data.rows[0].password.substring(0, process.env.SALT);
  const hash = hashPassword(req.body.password, salt);
  const saltedHash = salt + hash;

  if (saltedHash === data.rows[0].password) {
    res.json({ isLogin: true, user: data.rows[0] });
    return;
  } else {
    res.json({ isLogin: false, user: {} });
  }
};