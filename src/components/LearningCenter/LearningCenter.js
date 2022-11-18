import React from "react";
import "./LearningCenter.css";
const LearningCenter = () => {
  return (
    <div className="container" style={{ padding: "45px 0 450px" }}>
      <h2>Advancing the Practice of Clinical and Forensic Toxicology</h2>
      <p>
        National Toxicology Center is more than an advanced drug testing
        services. It is also a center for the advancement in toxicology
        practice. NTC develops definitive analytical methods for current and
        emerging drugs. NTC with Institutional Review Board approval also review
        and reports on the pattern of drug use and misuse in court cases, pain
        management and addiction medicine. Therapeutic and illicit opioids,
        including fentanyl and its analogs, have been the focus of several
        recent clinical studies, along with a study of adherence rates in the
        therapeutic use of antidepressants and antipsychotics. A study of the
        association of nicotine use with drug abuse is currently in progress.
        The findings of new analytical methods and drug use patterns continue to
        be reported in the scientific literature in an effort to advance the
        practice of both clinical and forensic toxicology.
      </p>
      <p>
        Studies performed at NTC are communicated to the clinical and forensic
        community through publications, scientific presentations and webinars.
        The Learning Center provides a forum for review of these scientific
        communications. Below is a listing of educational resources. Just select
        a topic of interest below or go to the Publication, Webinar and Poster
        section of interest.
      </p>
      <div className="row">
        <div className="col-md-4">
          <a href="/publications" className="card-link">
            <div className="card lc-card">
              <div className="card-body">
                <div className="inner-card-body">
                  <i class="fas fa-book card-icon"></i>
                  <h4>Publications</h4>
                </div>
              </div>
            </div>
          </a>

        </div>
        <div className="col-md-4">
          <a href="/webinar-trianing" className="card-link">
            <div className="card lc-card">
              <div className="card-body">
                <div className="inner-card-body">
                  <i class="fas fa-video card-icon"></i>
                  <h4>Webinar Training</h4>
                </div>
              </div>
            </div>
          </a>

        </div>
        <div className="col-md-4">
          <a href="/posters" className="card-link">
            <div className="card lc-card">
              <div className="card-body">
                <div className="inner-card-body">
                  <i class="fas fa-file card-icon"></i>
                  <h4>Posters</h4>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
