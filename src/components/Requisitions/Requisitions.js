import React from "react";
import "./Requisitions.css";
const Requisitions = () => {
  return (
    <div className="container" style={{paddingBottom:"450px"}}>
      <h2 style={{ margin: " 45px 0" }}>Requistions</h2>
      <div className="row">
        <div className="col-md-4 req-col">
          <div className="card">
            <div className="card-body">
              <h3 className="req-title">Web Requisition Forensic Urine</h3>
              <a
                href="/requisitions/Web-Requisition-Forensic-Urine.pdf"
                download
              >
                <button className="btn btn-primary download-button">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 req-col">
          <div className="card">
            <div className="card-body">
              <h3 className="req-title">Web Requisition Clinical Urine</h3>
              <a
                href="/requisitions/Web-Requisition-Clinical-Urine.pdf"
                download
              >
                <button className="btn btn-primary download-button">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 req-col">
          <div className="card">
            <div className="card-body">
              <h3 className="req-title">Web Requisition Clinical Oral Fluid</h3>
              <a
                href="/requisitions/Web-Requisition-Clinical-Oral-Fluid.pdf"
                download
              >
                <button className="btn btn-primary download-button">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisitions;
