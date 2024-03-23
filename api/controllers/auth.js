import { db } from "../db.js";
export const register = (req, res) => {
  // Check Existing User
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already esists!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
