import React from "react";
import Edite from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1710390916960-3047fcdf561e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1710390916960-3047fcdf561e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="info">
            <span>Karim</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edite} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          expedita quasi
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          expedita quasi dolor repudiandae quos, explicabo aut reiciendis
          doloribus autem commodi consectetur veritatis optio assumenda fugit!
          Quos ut voluptatem dolor ratione? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nisi expedita quasi dolor repudiandae
          quos, explicabo aut reiciendis doloribus autem commodi consectetur
          veritatis optio assumenda fugit! Quos ut voluptatem dolor ratione?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          expedita quasi dolor repudiandae quos, explicabo aut reiciendis
          doloribus autem commodi consectetur veritatis optio assumenda fugit!
          Quos ut voluptatem dolor ratione? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nisi expedita quasi dolor repudiandae
        </p>
        <p>
          quos, explicabo aut reiciendis doloribus autem commodi consectetur
          veritatis optio assumenda fugit! Quos ut voluptatem dolor ratione?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          expedita quasi dolor repudiandae quos, explicabo aut reiciendis
          doloribus autem commodi consectetur veritatis optio assumenda fugit!
          Quos ut voluptatem dolor ratione? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nisi expedita quasi dolor repudiandae
          quos, explicabo aut reiciendis doloribus autem commodi consectetur
          veritatis optio assumenda fugit! Quos ut voluptatem dolor ratione?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          expedita quasi dolor repudiandae quos, explicabo aut reiciendis
          doloribus autem commodi consectetur veritatis optio assumenda fugit!
          Quos ut voluptatem dolor ratione? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nisi expedita quasi dolor repudiandae
          quos, explicabo aut reiciendis doloribus autem commodi consectetur
          veritatis optio assumenda fugit! Quos ut voluptatem dolor ratione?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
