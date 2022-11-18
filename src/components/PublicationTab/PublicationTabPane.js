import React from "react";
import parse from "html-react-parser";
const PublicationTabPane = (props) => {
  return (
    <div
      style={{ padding: "15px" }}
      className={`tab-pane fade ${props.show}`}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.labelId}
    >
      {parse(props.htmlContent)}
    </div>
  );
};

export default PublicationTabPane;
