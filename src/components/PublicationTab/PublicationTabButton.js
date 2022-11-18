import React from "react";

const PublicationTabButton = (props) => {
  return (
    <button
      class={`nav-link ${props.active}`}
      id={props.id}
      data-bs-toggle="tab"
      data-bs-target={`#${props.targetId}`}
      type="button"
      role="tab"
      aria-controls={props.targetId}
      aria-selected="true"
    >
      {props.title}
    </button>
  );
};

export default PublicationTabButton;
