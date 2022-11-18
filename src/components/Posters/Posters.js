import React, { useState } from "react";
import "./Posters.css";
const Posters = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewMode, setViewMode] = useState(false);
  const images = [
    {
      key: "0",
      title:
        "Clinical Value of NTC's Direct-to-Definitive Drug Testing for Pain Management and Addiction Medicine",
      img: "/posters/Clinical Value of NTC's Direct-to-Definitive Drug Testing for Pain Management and Addiction Medicine_Page_1.jpg",
    },
    {
      key: "1",
      title: "Cocaine Testing in Human Hair",
      img: "/posters/Cocaine Testing in Human Hair.jpg",
    },
    {
      key: "2",
      title: "Drug Confirmation Testing by High Resolution Mass Spectromtry",
      img: "/posters/Drug Confirmation Testing by High Resolution Mass Spectromtry.jpg",
    },
    {
      key: "3",
      title: "Hair Direct-to-Definitive Drug Testing at NTC",
      img: "/posters/Hair Direct-to-Definitive Drug Testing at NTC.jpg",
    },
    {
      key: "4",
      title: "High Resolution Mass Spectrometry Analysis of Fentanyl Analogs",
      img: "/posters/High Resolution Mass Spectrometry Analysis of Fentanyl Analogs.jpg",
    },
    {
      key: "5",
      title: "Insulin Analog Testing by LC-MS-MS",
      img: "/posters/Insulin Analog Testing by LC-MS-MS.jpg",
    },
    {
      key: "6",
      title: "Oral Fluid Direct-to-Definitive Drug Testing",
      img: "/posters/Oral Fluid Direct-to-Definitive Drug Testing at NTC.jpeg",
    },
    {
      key: "7",
      title: "Oral Fluid THC and Cannabidiol Testing at NTC",
      img: "/posters/Oral Fluid THC and Cannabidiol Testing at NTC_Page_1.jpg",
    },
    {
      key: "8",
      title: "Validation of Patented Drug Testing at NTC",
      img: "/posters/Validation of Patented Drug Testing at NTC.jpg",
    },
  ];
  const closePosterHandler = () => {
    setViewMode(!viewMode);
  };
  const viewPosterHandler = (key) => {
    setCurrentImage(key);
    setViewMode(!viewMode);
  };
  return (
    <div className="">
      {viewMode ? (
        <div className="image-jumbotron-container">
          <button
            className="btn btn-danger close-btn"
            onClick={closePosterHandler}
          >
            X
          </button>
          <img className="jumbotron-image" src={images[currentImage].img} />
        </div>
      ) : (
        <div className="container" style={{ padding: "45px 0 " }}>
          {/* <h2>Posters</h2> */}
          <h4>Direct-to-Definitive Drug Testing</h4>
          <p>
            <i>
              Validation of NTC’s Patented Direct-to-Definitive Method of Drug
              Testing:
            </i>{" "}
            <br /> A patented and novel method of matrix normalization which was
            developed for direct-todefinitive drug testing at NTC has been
            validated by direct comparison with the widely used stable isotope
            method with analyte-specific internal standards. The poster presents
            the findings of a head-to-head comparison of these two techniques in
            their analytical performance and quantitative correlation with
            actual clinical samples. The NTC and stable isotope methods show
            comparable analytical performance of precision, accuracy, matrix
            normalization, calibration linearity and quantitative correlation in
            case samples. Since most other laboratories use shared internal
            standards instead of the recommended analyte. The casework
            comparison of NTC and analyte-specific stable isotopes this method
            of testing was also compared and showed inaccuracy in drug
            quantitation. See the poster below and also rad the peer reviewed
            publication on this validation study in the Learning Center’s
            Publication section.
          </p>
          {/* Pointer to: Patented Drug Test at NTC */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[8].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[8].key)}
            >
              View
            </button>
          </div>
          <p>
            Clinical Value of Direct-to-Definitive Drug Testing in Pain
            Management and Addiction Medicine:
            <br /> The clinical efficacy of direct-to-definitive drug testing
            with interpretation has been studies at NTC in an Institutional
            Review Board approved analysis of test results for 5000 pain
            management and addiction medicine cases. The poster presents the
            findings of not only drugs and metabolites but the incidence of drug
            use in this large sample of clinical cases. Inconsistent positive
            drug use was also evident from correlation of direct-to-definitive
            findings and the prescribed medications know for each patient. The
            study is unique in revealing the significant incidence non-adherence
            with prescribed, especially for psychiatric medications. The study
            also includes a direct comparison of direct-to-definitive and
            immunoassay drug testing and shows the high false positive as well
            as false negative rate of presumptive drug testing by immunoassay.
          </p>
          {/* Pointer to: Patented Clinical Value of NTC's Direct-to-Definitive Drug Testing for Pain Management and Addiction Medicine */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[0].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[0].key)}
            >
              View
            </button>
          </div>
          <p>
            <i>Oral Fluid Direct-to-Definitive Drug Testing:</i> <br /> Oral
            fluid drug testing in many other laboratories relies on immunoassay
            screening which we have shown to result in high false positive and
            false negative rates of drug detection. At NTC we have developed and
            validated direct-to-definitive drug testing in oral fluid from
            direct (passive drool) or indirect (pad adsorption/desorption)
            collection methods. Testing for 99 drugs and metabolites is
            performed routinely by this method and acceptable analytical
            performance of each test is reported in the poster presentation. The
            sample is stable for at least 7 days and up to 3 weeks for most
            drugs and metabolites.
          </p>
          {/* Note: The poster currently on the website was a very early study and does not represent the current method used at NTC.  Please uses the poster included with the update email and please title it as “Oral Fluid Direct-to-Definitive Drug Testing” */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[6].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[6].key)}
            >
              View
            </button>
          </div>
          <p>
            <i>Direct-to-Definitive Drug Testing in Human Hair: </i> <br />
            Hair drug testing in other laboratories relies on immunoassay
            screening but NTC has developed and validated direct-to-definitive
            drug testing in hair. Testing for 96 drugs and metabolites is
            performed routinely by this method using NTC’s patented testing
            technique and acceptable analytical performance of each NTC test is
            reported in the poster presentation. Hair washing to remove external
            contamination meets the standards of the Society of Hair Testing
            with multiple aqueous and organic washes, and a wash criterion is
            used to monitor for external drug contamination. The poster presents
            the method and its validation along with scanning electron
            micrographs of pulverized human hair used for the testing process.
          </p>
          {/* Pointer to: Hair Direct-to-Definitive Testing at NTC */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[3].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[3].key)}
            >
              View
            </button>
          </div>
          <h4> Oral Fluid Cannabinoid Testing at NTC</h4>
          <p>
            <i>Validation of Oral Fluid THC and Cannabidiol Testing at NTC:</i>
            <br /> THC and cannabidiol testing in oral fluid has been developed
            and validated for use at NTC. The method meets SAMSHA guidelines for
            THC in oral fluid and extends testing for cannabidiol. The
            cannabinoids are stable for at least two weeks in neat oral fluid
            collection when the samples are collected in glass vials. Testing
            for carboxyTHC was also evaluated but not use in oral fluid testing.
          </p>
          {/* Pointer to: Oral Fluid THC and Cannabidiol Testing at NTC */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[7].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[7].key)}
            >
              View
            </button>
          </div>
          <h4>
            High Resolution Mass Spectrometry Applications in Drug Testing
          </h4>
          <p>
            <i>
              Drug Confirmation Testing by High Resolution Mass Spectrometry:
            </i>
            <br /> A confirmatory method was developed at NTC using the
            molecular identify certainty of high resolution mass spectrometry. A
            UPLC-MSE/TOF was developed for a panel of 65 illicit and therapeutic
            drugs and their metabolites to provide forensically defensible
            confirmation of initial direct-to-definitive testing in forensic
            casework. A threshold accurate confirmation method was employed
            using the patented method of matrix normalization invented at NTC.
            The method demonstrated 100% concordance with the initial
            direct-to-definitive testing method and adds to the certainty and
            defensibility of drug findings in forensic casework.
          </p>
          {/* Pointer to:
            Drug Confirmation Testing by High Resolution Mass Spectrometry Note:
            Spectrometry is misspelled in the current poster title on the poster */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[4].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[4].key)}
            >
              View
            </button>
          </div>
          <h4>
            High Resolution Mass Spectrometry Analysis of Fentanyl Analogs
          </h4>
          <p>
            <i>
              Fentanyl Analog Confirmation by High Resolution Mass Spectrometry:
            </i>
            <br /> A High Resolution Mass Spectrometry Analysis of Fentanyl
            Analogs by a UPLC-TOF(MRM) methods was developed and validated for
            forensic confirmation of initial direct-to-definitive for fentanyl,
            norfentanyl, 4-ANPP, beta hydroxy-fentanyl and panel of fentanyl
            analogs tested in forensic casework. A threshold accurate
            confirmation calibration technique was employed using the patented
            method of matrix normalization invented at NTC. The method was
            validated for analytical performance and the initial
            direct-to-definitive testing method and adds to the certainty and
            defensibility of fentanyl drug findings in forensic casework. In
            addition a discovery method was developed to identify newly emerging
            fentanyl analogs.
          </p>
          {/* Pointer to: High Resolution Mass Spectrometry Analysis of Fentanyl Analogs  */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[4].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[4].key)}
            >
              View
            </button>
          </div>
          <h4>Cocaine Testing and Quality Control in Human Hair</h4>
          <p>
            <i>
              Quality Control for Cocaine and its Metabolites in Human Hair:
            </i>
            <br /> A definitive drug test for cocaine, benzoylecgonine,
            norcocaine and cocaethylene in human hair was developed. Analytical
            performance was studied and validated. In addition a novel quality
            control system employing drug and metabolite soaked human hair was
            developed and used. The studied revealed the influence of hair
            melanin on the uptake of both parent drug and metabolites.
          </p>
          {/* Pointer to: Cocaine Testing in Human Hair */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[1].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[1].key)}
            >
              View
            </button>
          </div>
          <h4>Insulin Analog Testing by LC-MS-MS</h4>
          <p>
            <i>Overdose with Insulin Glargine and Insulin Aspart:</i> <br /> The
            poster presents a definitive method for the insulin analog Aspart
            and the metabolites of the insulin analog Glargine level in blood
            with thelevels of these insulin analogs monitored over two episodes
            of intentional overdose in a clinical patient study. This is the
            first overdose demonstration identifying insulin Glargine metabolite
            (M1) present in the circulation at high concentration without
            detectable parent drug. The study suggests that this long acting
            insulin analog is present primarily in the injection depot and that
            only the cleavage peptide metabolite (M1) is release into the
            circulation. The monitoring kinetics show an inverse correlation
            between the required glucose-infusion treatment and the reduction in
            circulating levels of the insulin Glargine metabolite. Implication
            for insulin analog monitoring in clinical practice are discussed.
          </p>
          {/* Pointer to: Insulin Analog Testing by LC-MS-MS */}
          <div className="col-md-3 poster-col">
            <div className="thumbnail-image-container">
              <img className="thumbnail-image" src={images[5].img} />
            </div>
            {/* <h5 className="poster-title"> Patented Drug Test at NTC</h5> */}
            <button
              className="btn btn-primary view-btn"
              onClick={() => viewPosterHandler(images[5].key)}
            >
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posters;
