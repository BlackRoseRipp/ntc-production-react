import React, { useContext } from "react";
import PublicationContext from "../../store/publication-context";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import { useParams } from "react-router-dom";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import "./PubViewer.css";
const PubViewer = (props) => {
  const pubCtx = useContext(PublicationContext);

  // const propIndex = ;

  return (
    <div
      className="container pdf-viewer-container"
      style={{ overflow: "hidden",}}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div style={{ height: props.height }}>
          <Viewer fileUrl={pubCtx.publications[props.index].path} />
        </div>
      </Worker>
    </div>
  );
};

export default PubViewer;
