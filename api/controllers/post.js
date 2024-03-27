import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELEC * FROM post WHERE cat=?"
    : "SELECT * FROM post";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  res.json("It is working from Contrllers");
};
export const addPost = (req, res) => {
  res.json("It is working from Contrllers");
};
export const deletePost = (req, res) => {
  res.json("It is working from Contrllers");
};
export const updatePost = (req, res) => {
  res.json("It is working from Contrllers");
};
