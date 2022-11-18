import React, { Fragment } from "react";
import { blogs } from "./BlogDetail";
import { Link } from "react-router-dom";
import Videos from "../Videos/Videos";
const Blog = () => {
  return (
    <Fragment>
      <div className="container" style={{ padding: "85px 0 10px" }}>
        <div className="row">
          {blogs.map((item) => {
            return (
              <div className="col-md-3" style={{ marginBottom: "15px" }}>
                <a
                  href={`blog-detail/${item.key}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      height: "175px",
                      overflow: "hidden",
                      marginBottom: "15px",
                    }}
                  >
                    <img src={item.img} width="100%" />
                  </div>
                  <h4>{item.title}</h4>
                  {/* <p>{item.preview}</p> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Videos /> */}
    </Fragment>
  );
};

export default Blog;
