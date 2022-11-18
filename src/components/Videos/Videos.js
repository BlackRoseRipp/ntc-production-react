import React from "react";
import parse from "html-react-parser";
import "./Videos.css";
const Videos = () => {
  const video_metadata = [
    {
      key: 0,
      title:
        "Does Presumptive Drug Screening Make Sense? - Toxicology Practice Findings",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/RH_npbNyHHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      key: 1,
      title:
        "Can Definitive Drug Screening Become Routine? Automation and Data Management Challenges",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/CwN8NMNJDrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      key: 2,
      title: "Forensic Toxicology: Utilizing Mass Spectrometry",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/Vj3OSnQ0BcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      key: 3,
      title: "LC-MS/MS for Definitive Drug Analysis",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/ZkTMcaSRuaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      key: 4,
      title: "High Resolution Mass Spectrometry for Forensic Toxicology",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/HN1NJCM33SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      key: 5,
      title: "Introduction to the National Toxicology Center",
      embed:
        '<iframe class="video-embed" src="https://www.youtube.com/embed/hGZOP8AznV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ];
  return (
    <div className="container" style={{ padding: "45px 0" }}>
      <h3>National Toxicology Center Services</h3>
      <p>
        <i>NTC Laboratory Tour?</i>
        <br /> A tour of the National Toxicology Center is provided as an
        introduction to our laboratory facility and focuses on state-of-the-art
        equipment, advanced testing by definitive methods, and toxicologist
        guided interpretive reporting.
        {/* Pointer to:  Introduction to the National Toxicology Center */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/hGZOP8AznV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      <h3>Direct-to-Definitive Drug Testing</h3>

      <p>
        <i>Does Presumptive Drug Screening Make Sense?</i>
        <br /> This webinar draws from our toxicology practice experience at
        National Toxicology Center and demonstrates the clinical value of
        direct-to-definitive drug screening. Drawing from practice experience
        with 5000 pain management and addiction medicine cases the webinar
        graphically presents the extent of therapeutic and illicit drug use in
        this clinical population. With prescription information in all cases the
        study presentation also focuses on the inconsistent positive drug-use
        findings as well as therapeutic non-compliance with prescribed
        medications, especially the psychiatric agents. 
        {/* Pointer to: Does Presumptive Drug Screening Make Sense */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/RH_npbNyHHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      <p>
        <i>Can Direct-to-Definitive Drug Screening be Performed Routinely?</i><br/> This
        webinar demonstrates the technical advance made at NTC that allow the
        routine and high volume use of direct-to-definitive drug screening. The
        webinar provides a journey through automated sample preparation, rapid
        chromatographic separation, multi-drug MS acquisition, computerized data
        management and interfaced interpretive reporting. The novel method of
        matrix normalization by threshold accurate calibration is shown for
        multi-drug quantitative analysis. 
        {/* Pointer to: Can Direct-to-Definitive Drug Screening be Performed Routinely */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/CwN8NMNJDrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      <h3>Interviews with NTC’s Laboratory Director</h3>
      <p>
        <i>
          Application of Definitive Methods in Initial and Confirmatory Drug
          Testing:
        </i>{" "}
        <br />
        The in-laboratory interview focuses on the use of tandem mass
        spectrometry in confirmatory testing, but also in the initial testing
        process. is webinar draws from our toxicology practice experience at
        National Toxicology Center and demonstrates the clinical value of
        direct-to-definitive drug screening. Drawing from practice experience
        with 5000 pain management and addiction medicine cases the webinar
        graphically presents the extent of therapeutic and illicit drug use in
        this clinical population. With prescription information in all cases the
        study presentation also focuses on the inconsistent positive drug-use
        findings as well as therapeutic non-compliance with prescribed
        medications, especially the psychiatric agents.
        {/* Pointer to:  Does Presumptive Drug Screening Make Sense */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/ZkTMcaSRuaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      <p>
        <i>
          The role of High Resolution Mass Spectrometry in Analytical Toxicology
          Practice:
        </i>{" "}
        <br />
        This webinar demonstrates the technical advance made at NTC that allow
        the routine and high volume use of direct-to-definitive drug screening.
        The webinar provides a journey through automated sample preparation,
        rapid chromatographic separation, multi-drug MS acquisition,
        computerized data management and interfaced interpretive reporting. The
        novel method of matrix normalization by threshold accurate calibration
        is shown for multi-drug quantitative analysis.
        {/* Pointer to: Can Direct-to-Definitive Drug Screening be Performed
        Routinely */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/HN1NJCM33SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      <p>
        <i>Evolving Role of Mass Spectrometry in Postmortem Toxicology</i>{" "}
        <br />
        This webinar is an interview with Dr. Rosano regarding the application
        of mass spectrometry technology in medical examiner casework.
        {/* Pointer to: Forensic Toxicology: Utilization of Mass Spectrometry */}
      </p>
      {parse(
        '<iframe class="video-embed-mid" src="https://www.youtube.com/embed/Vj3OSnQ0BcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      )}

      {/* <h3 style={{ margin: "15px 0  45px" }}>Webinars</h3>
      <div className="row">
        {video_metadata.map((video) => {
          return (
            <div className="col-md-4 video-col">
              {parse(video.embed)}
              <h4 className="video-title">{video.title}</h4>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Videos;
