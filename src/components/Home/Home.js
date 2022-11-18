import React, { Fragment } from "react";
import "./Home.css";
const Home = () => {
  return (
    <Fragment>
      <header className="text-center text-white jumbotron-header">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto position-relative">
              <h1
                data-aos="fade-down"
                data-aos-duration="700"
                style={{ marginBottom: "0" }}
              >
                National Toxicology Center
              </h1>
              <p
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="300"
              >
                Center of Excellence for Drug Testing and Interpretation
              </p>
              <a href="https://www.lifepoint18.com/NTC/lpi3/?event=auth.login">
                <button className="btn btn-primary">View Results</button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="showcase" style={{ overflowX: "hidden" }}>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div
              className="col-lg-6 my-auto order-lg-1 showcase-text"
              data-aos="fade"
            >
              <h2>Patented Testing Method</h2>
              <p className="lead mb-0">
                The advanced testing method is patented (U.S. patent 10,794,881,
                International patent application WO 2016/149316Al) and is used
                exclusively at NTC for a full range of clinical and forensic
                drug testing. NTC testing in urine, oral fluid and hair is
                certified by CLIA and the New York State Department of Health
                and is used by a growing number of addiction medicine, pain
                management and psychiatric practices in managed care setting.
              </p>
            </div>
            <div
              className="col-lg-6 text-white order-lg-2 showcase-img"
              data-aos="fade-left"
              data-aos-duration="700"
              style={{
                backgroundImage:
                  "url('assets/img/doctor-talking-with-his-patient-clinic.jpg')",
                backgroundPosition: "50% 0%",
              }}
            >
              <span></span>
            </div>
          </div>

          <div className="row g-0">
            <div
              className="col-lg-6 my-auto order-lg-1 showcase-text"
              data-aos="fade"
            >
              <h2>Toxicologist Leadership </h2>
              <p className="lead mb-0">
                NTC is a toxicologist lead service. Dr. Rosano is chief
                toxicologist and director at NTC and is board certified in both
                clinical and forensic toxicology. The NTC testing service and
                scientific development is lead by Dr. Rosano who works closely
                with a team of toxicology-trained doctoral scientists and
                technologists. Dr. Rosano comes from an academic career in
                laboratory medicine and is Emeritus Professor at the Albany
                Medical College. In 2018, Dr. Rosano transitioned his full time
                career to NTC, after 30 years as director of the Albany Medical
                Center Laboratories where he developed a university level
                service in clinical and medical examiner toxicology.
              </p>
            </div>
            <div
              className="col-lg-6 text-white showcase-img"
              data-aos="fade-right"
              data-aos-duration="400"
              style={{
                backgroundImage:
                  "url('/assets/img/pexels-павел-сорокин-2324837.jpg')",
                backgroundPosition: "50% 0%",
              }}
            >
              <span></span>
            </div>
          </div>

          <div className="row g-0">
            <div
              className="col-lg-6 my-auto order-lg-1 showcase-text"
              data-aos="fade"
              data-aos-duration="400"
            >
              <h2>Cost-savings with Definitive Testing Services</h2>
              <p className="lead mb-0">
                The testing service at NTC is focused on accurate, timely and
                cost effective drug monitoring. NTC automation and patented
                testing translate into better drug monitoring at a lower cost to
                third party payers. Clinician reports include toxicologist’s
                interpretation of test results with key drug-use and
                prescription-adherence findings summarized at the top of each
                report. Results are accessed by secure internet or by direct
                HL-7 interfacing with clinical practice offices and referring
                hospital laboratories. Client services and NTC toxicologists are
                available at all times for assistance and test interpretation.
              </p>
            </div>{" "}
            <div
              className="col-lg-6 text-white order-lg-2 showcase-img"
              data-aos="fade-left"
              data-aos-duration="500"
              style={{
                backgroundImage:
                  "url('/assets/img/blog/AdobeStock_181944468.jpeg')",
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ overflowX: "hidden" }}
        className="text-center bg-light features-icons"
      >
        <h2 className="mb-5">Why Choose NTC</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <h4 style={{ textAlign: "left" }}>
                  Leader in Definitive Drug Monitoring
                </h4>
              </div>
              <ul className="service-list">
                <li>
                  Comprehensive drug panels in urine, oral fluid and hair.
                </li>
                <li>
                  Parent drug and metabolite testing adds to test certainty.
                </li>
                <li>Direct-to definitive testing in clinical casework.</li>
                <li>Forensically defensible confirmation in forensic cases.</li>
                <li>
                  Toxicologist-guided interpretation of drug-use findings.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="">
                <h4 style={{ textAlign: "left" }}>
                  Leader in Client Service Delivery
                </h4>
              </div>
              <ul className="service-list">
                <li>Customized requisitions of electronic orders.</li>
                <li>
                  Rapid turn-around time for direct–to-definitive testing.
                </li>
                <li>
                  Electronic reporting by cloud or HL7 linkage to your EMR.
                </li>
                <li>
                  Toxicologist availability for test guidance and
                  interpretation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light" style={{overflow: "auto"}}>
        <center><p>Take a Tour of NTC Facility and Services Below</p></center>
        <iframe
          // class="video-embed"
          className="home-vid"
          src="https://www.youtube.com/embed/hGZOP8AznV0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

    </Fragment>
  );
};

export default Home;
