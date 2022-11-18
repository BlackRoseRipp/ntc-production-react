import React, { useContext } from "react";
import PublicationContext from "../../store/publication-context";
import "./Publications.css";
const Publications = () => {
  const pubCtx = useContext(PublicationContext);
  return (
    <div className="container" style={{ padding: "45px 0" }}>
      <div className="row">
        <h2>Publication Files</h2>
        {pubCtx.publications.map((pub, index) => {
          return (
            <div className="col-md-3 pub-col">
              <img className="img-fluid" src={pub.thumbnail} />
              <h5 className="pub-title">{pub.title}</h5>
              <a href={`/publication-viewer/${index}`}>
                <button className="btn btn-primary form-control">View</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
