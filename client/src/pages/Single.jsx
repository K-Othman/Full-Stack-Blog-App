import React, { useContext, useEffect, useState } from "react";
import Edite from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const postId = useParams().id;

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  console.log(post);

  return (
    <div className="single">
      <div className="content">
        {post.img && <img src={post.img} alt="img" />}
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1710390916960-3047fcdf561e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to="/write?edit=2">
                <img src={Edite} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
