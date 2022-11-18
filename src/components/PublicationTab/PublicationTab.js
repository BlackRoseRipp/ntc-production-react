import React from "react";
import PublicationTabPane from "./PublicationTabPane";
import PublicationTabButton from "./PublicationTabButton";
import PubViewer from "../PubViewer/PubViewer";
import "../PubViewer/Publications.css";
const PublicationTab = () => {
  const tabs = [
    {
      buttonKey: "tab1",
      paneKey: "pane1",
      title: "Direct-to-Definitive Drug Testing",
      paneContent:
        '<p>Clinical value of Direct-to-Definitive Drug Monitoring in Clinical Practice:</p><p>&nbsp;A 5000 case study of drug use and misuse in pain management and addiction medicine patients was conducted using a direct-to-definitive urine drug monitoring method developed at NTC. &nbsp;The study reveals the scope of drug use in these patient populations along with inconsistent drug use based on a comparison of drug findings and prescribed medications. &nbsp;The study also shows the high false negative and false positive rates when presumptive screening is performed by immunoassay.</p><p><a href="/publication-viewer/2">https://ntclab.com/publication-viewer/2</a></p><p>Novel Direct-to-Definitive Method of Multi-Analyte Drug Testing in Routine Practice:</p><p>Research has led to the development of a new method of definitive drug testing used exclusively at the National Toxicology Center. &nbsp;The method employs a novel matrix normalization technique that allows accurate quantitation of drug levels. &nbsp;The method is now patented and has been reported in multiple peer reviewed publications available in the Learning Center. &nbsp;The method can be used for accurate threshold detection or full quantitation of over 100 drugs and metabolites using a rapid 3 minute chromatographic separation coupled with nominal or high resolution mass spectrometry. &nbsp;Data management has been developed to allow convenient handling of high volume data. &nbsp;The method is in routine high volume use at NTC and has been validated by direct comparison with analyte-matched stable isotope methods of testing. &nbsp;Dr. Rosano received the 2016 Experimental Design and Impact on Toxicology (EDIT) Award from the Society of Forensic Toxicologist for this research in 2016.</p><p><a href="/publication-viewer/11">https://ntclab.com/publication-viewer/11</a></p><p><a href="/publication-viewer/3">https://ntclab.com/publication-viewer/3</a></p><p><a href="/publication-viewer/1">https://ntclab.com/publication-viewer/1</a></p><p><a href="/publication-viewer/0">https://ntclab.com/publication-viewer/0</a></p>',
    },
    {
      buttonKey: "tab2",
      paneKey: "pane2",
      title: "Advances in Fentanyl and Fentanyl Analog Testing",
      paneContent:
        '<p>Fentanyl and Fentanyl Analog Monitoring in Clinical and Forensic Casework:</p><p>A comparative study of fentanyl, norfentanyl, 4-ANPP and 17 fentanyl analogs was studied in fentanyl-related fatalities and clinical treatment with FDA approved fentanyl. &nbsp;The study shows that betahydroxy-fentanyl is a metabolite of fentanyl and has value in monitoring for fentanyl use. &nbsp;The study further finds that 4-ANPP is present in postmortem cases as a synthetic precursor of the illicitly produced fentanyl analog and is not in a detectable range in use of FDA approved fentanyl, probably because of the stringent regulation of pharmaceuticals versus unregulated synthesis of illicits. &nbsp;NTC finds that fentanyl is the predominant opioid abused in the population and routinely monitors for fentanyl use by testing fentanyl, norfentanyl, betahydroxy-fentanyl and 4-ANPP.</p><p>Fentanyl and Fentanyl Analog Associated Fatalities:</p><p>A high resolution mass spectrometry method has been developed to confirm human fatalities associated with the use of fentanyl and its illicit analogs. &nbsp;Postmortem testing in 25 death investigations showed findings including fentanyl, norfentanyl, 4-ANPP, methoxyacetyl-fentanyl, furanyl-fentanyl, fluoro isobutyr-fentanyl, betahydroxy-fentanyl and acetyl-fentanyl. &nbsp;The method allows sensitive confirmation with high certainty.</p><p><a href="/publication-viewer/7">https://ntclab.com/publication-viewer/7</a></p>',
    },
    {
      buttonKey: "tab3",
      paneKey: "pane3",
      title: "Ethanol Metabolite Testing and Interpretation",
      paneContent:
        '<p>Ethanol Monitoring and Interpretation with Urine Ethylglucuronide (ETG)Testing:</p><p>Interpretation of a urine ETG test result requires distinction between ethanol consumption, endogenous ETG production from gastrointestinal flora and incidental exposure from use of ethanol containing product. &nbsp;Serial post dose levels of urinary ETG following consumption of &nbsp;two standard drinks is compared to endogenous ETG concentration in adult and pediatric subjects and to endogenous concentrations of ETG in subjects repeatedly &nbsp;using dermal germicide containing ethanol. &nbsp;The findings show that the administrative threshold of either 200ng/mL or 500 ng/ mL are not exceeded by either endogenous ETG production or dermal exposure.</p><p><a href="/publication-viewer/5">https://ntclab.com/publication-viewer/5</a></p><p>Ethanol Metabolite Monitoring in Pregnancy:</p><p>This additional collaborative study in pregnancy shows that with the administrative cut-off of 100 ng/mL for ETG and 25 for ETS that dermal exposure to ethanol in hand germicide is not detected in pregnant subjects. &nbsp;</p><a href="http://localhost:3000/publication-viewer/14" >Read more</a><p>Advanced Analytical Method for&nbsp;Urine&nbsp;Ethylyglucuronide (ETG) and Ethylsulfate (ETS):</p><p>This is a description of the definitive ETG and ETS method of UPLC-MS/MS analysis used at the National Toxicology Center. &nbsp;The column separation is based on a charged surface hybrid of a phenyl hexyl column which allows selective separation of the ethanol metabolites and separation from endogenous interferences. &nbsp; Many column separations are based on silica backbone interactions that may vary between column manufacturing lots but the methods at NTC is robust and forensically defensible.</p><p><a href="/publication-viewer/4">https://ntclab.com/publication-viewer/4</a></p>',
    },
    {
      buttonKey: "tab4",
      paneKey: "pane4",
      title: "Advances in Postmortem Drug Detection",
      paneContent:
        '<p>Application of LC-MS Technology in Medical Examiner Drug Screening:</p><p>A combination of LC-MS and LC-MS/MS screening in postmortem casework was first reported by Dr Rosano and colleagues in 2011, a time when GC-MS was the predominate screening technology. &nbsp;The comparison of postmortem blood screening results for 410 death investigations showed that, compared to GC-MS, LC-MS and LC-MS/MS screening resulted in the highest drug detection rate (95%) and provided optimal dual-screening for the postmortem casework. &nbsp;Dr Rosano was the recipient of the EDIT Award for this work in&nbsp;<br/><a href="/publication-viewer/17" >Read More</a></p><p>Use of High Resolution Mass Spectrometry in Postmortem Drug Screening:</p><p>The practice of postmortem toxicology was further advanced in 2013 in a study of the use of high resolution mass spectrometry (UPLC-MS/TOF) was reported and showed in comparison with LC-MS and LC-MS/MS screening that&nbsp;UPLC&ndash;MSE-TOF screening resulted in the highest drug detection rate of 99% and offered the potential for the detection of nontargeted analytes via high-resolution acquisition of molecular and fragment ion data. &nbsp;Additional quantitative work by high resolution MS was later demonstrated. &nbsp;&nbsp;Dr. Rosano received the 2013 Experimental Design and Impact on Toxicology (EDIT) Award from the Society of Forensic Toxicologist for this research in 2016.</p><p><a href="/publication-viewer/9">https://ntclab.com/publication-viewer/9</a></p><a href="/publication-viewer/16" >HRMS Quantitation in Postmortem Blood</a>',
    },
    {
      buttonKey: "tab5",
      paneKey: "pane5",
      title: "Clinical and Forensic Case Studies",
      paneContent:
        '<p>Overdose with Insulin Glargine and Insulin Aspart:</p><p>With a definitive method for the insulin analog &nbsp;Aspart and the metabolites of the insulin analog Glargine level in blood, the levels of these insulin analogs are monitored over two episodes of intentional overdose. &nbsp;The study is the first to identify insulin Glargine&rsquo;s metabolite (M1) as present in the circulation at high concentration without detectable parent drug. &nbsp;The study suggests that this long acting insulin analog is present primarily in the injection depot and that only the cleavage peptide metabolite (M1) is release into the circulation. &nbsp;The monitoring kinetics show an inverse correlation between the required glucose-infusion treatment and the reduction in circulating levels of the insulin Glargine metabolite. &nbsp;Implication for insulin analog monitoring in clinical practice are discussed.</p><p><a href="http://ntclab.com/publication-viewer/8">http://ntclab.com/publication-viewer/8</a></p><p>Ethylene Glycol and Glycolic Acid in a Series of Fatal Poisonings:</p><p>Identification of ethylene glycol as the cause of a fatal intoxication has been challenging in medical examiner practice. &nbsp;In acute ethylene glycol fatalities the causative agent is the acid metabolite, glycolic acid, that produces a severe and fatal metabolic acidosis. &nbsp;The amount of ethylene glycol found postmortem may be misleading and represents only the amount of ethylene glycol remaining after a fatal concentration of glycolic acid is achieved. &nbsp;In this study, co-analysis of ethylene glycol and glycolic acid demonstrate the value of measuring the acid metabolite directly. &nbsp;While the ethylene glycol varied from undetectable to high concentration the glycolic acid level in postmortem blood correlated closely with the severe degree of metabolic acidosis. &nbsp;Forensic implications of the study are discussed and the data has been used in court testimony involving homicidal use of ethylene glycol.<br/> <a href="/publication-viewer/15" >Read More</a></p><p>A Strychnine Poisoning and Fatality Case:</p><p>The history and toxicological findings in a case of suicidal strychnine poisoning are presented along with the analytical methodology. &nbsp;Distribution of strychnine concentration in body tissue and fluids is also reported. &nbsp;The mass spectrometry ion fragmentation pathway is determined for strychnine adding to the molecular certainty of the toxicological analysis. <br /> <a  href="/publication-viewer/18">Read More</a></p><p>A Benztropine Fatality Case:</p><p>The history and toxicological findings in a case of suicidal with benztropine, an anticholinergic drug, are presented. &nbsp;The analytical methodology and ion fragmentation structures are also studies along with a search for metabolic conversion products. &nbsp;The fatal concentration of benztropine in postmortem blood and urine add to the forensic &nbsp;knowledge of benztropine associated fatalities.<br/><a href="/publication-viewer/13" >Read More</a></p>',
    },
    {
      buttonKey: "tab6",
      paneKey: "pane6",
      title: "Advances in the Immunosuppressant Drug Monitoring",
      paneContent:
        "<p>Clinical Significance of Cyclosporine Metabolites&nbsp;</p><p>Cyclosporine was the first T Cell selective immunosuppressant developed for use in organ transplantation. &nbsp; Dr. Rosano and co-workers were instrumental in gaining knowledge of cyclosporine metabolites and their immunosuppressive properties during the development of this therapeutic agent. &nbsp;The series of publications in the Learning Center lead to knowledge of major cyclosporine metabolites in humans and animal models, along with an understanding of the immunosuppressive properties of these metabolites. &nbsp; The levels of metabolites have been studied in renal transplant therapy and during episodes of nephrotoxicity and organ rejection.</p><p>Note: use first 9 publications in the email</p><p>Clinical Testing for Cyclosporine Therapy</p><p>With the development of chromatographic methods for the detection and quantitation of cyclosporine and its metabolites, Dr. Rosano and co-workers participated in a series of studies leading to the development of therapeutic monitoring methods. &nbsp;The cross reactivity of immunoassay antibodies was tested and FDA testimony was provided during the approval process for immunoassay monitoring of transplant patients. A consensus conference regarding methods of monitoring was held and resulted in the monitoring practices used currently in transplantation. &nbsp;The studies and consensus conference findings are available through the NTC learning Center.</p><p>Note: use reference 10 (effect of hematocrit on cyclosporine monitoring) - 14 in this email</p>",
    },
  ];
  const globalPDFViewerHeight = "550px";
  return (
    <div className="container" style={{ padding: "45px 0" }}>
      <h3>Publications</h3>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          {/* {tabs.map((tab, index) => {
            var active = "";
            if (index === 0) {
              active = "active";
            }
            return (
              <PublicationTabButton
                active={active}
                id={tab.buttonKey}
                targetId={tab.paneKey}
                title={tab.title}
              />
            );
          })} */}

          <button
            class={`nav-link active`}
            id="tab1"
            data-bs-toggle="tab"
            data-bs-target={`#pane1`}
            type="button"
            role="tab"
            aria-controls="pane1"
            aria-selected="true"
          >
            Direct-to-Definitive Drug Testing
          </button>
          <button
            class={`nav-link `}
            id="tab2"
            data-bs-toggle="tab"
            data-bs-target={`#pane2`}
            type="button"
            role="tab"
            aria-controls="pane2"
            aria-selected="true"
          >
            Advances in Fentanyl and Fentanyl Analog Testing
          </button>
          <button
            class={`nav-link `}
            id="tab3"
            data-bs-toggle="tab"
            data-bs-target={`#pane3`}
            type="button"
            role="tab"
            aria-controls="pane3"
            aria-selected="true"
          >
            Ethanol Metabolite Testing and Interpretation
          </button>
          <button
            class={`nav-link `}
            id="tab4"
            data-bs-toggle="tab"
            data-bs-target={`#pane4`}
            type="button"
            role="tab"
            aria-controls="pane4"
            aria-selected="true"
          >
            Advances in Postmortem Drug Detection
          </button>
          <button
            class={`nav-link `}
            id="tab5"
            data-bs-toggle="tab"
            data-bs-target={`#pane5`}
            type="button"
            role="tab"
            aria-controls="pane5"
            aria-selected="true"
          >
            Clinical and Forensic Case Studies
          </button>
          <button
            class={`nav-link `}
            id="tab6"
            data-bs-toggle="tab"
            data-bs-target={`#pane6`}
            type="button"
            role="tab"
            aria-controls="pane6"
            aria-selected="true"
          >
            Advances in the Immunosuppressant Drug Monitoring
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        {/* {tabs.map((tab, index) => {
          var show = "";
          if (index === 0) {
            show = "show active";
          }
          return (
            <PublicationTabPane
              show={show}
              id={tab.paneKey}
              labelId={tab.buttonKey}
              htmlContent={tab.paneContent}
            />
          );
        })} */}

        <div
          className={`tab-pane fade active show`}
          id="pane1"
          role="tabpanel"
          aria-labelledby="tab1"
        >
          <p>
            Clinical value of Direct-to-Definitive Drug Monitoring in Clinical
            Practice:
          </p>
          <p>
            &nbsp;A 5000 case study of drug use and misuse in pain management
            and addiction medicine patients was conducted using a
            direct-to-definitive urine drug monitoring method developed at NTC.
            &nbsp;The study reveals the scope of drug use in these patient
            populations along with inconsistent drug use based on a comparison
            of drug findings and prescribed medications. &nbsp;The study also
            shows the high false negative and false positive rates when
            presumptive screening is performed by immunoassay.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={2} />
            {/* <a href="/publication-viewer/2">
              https://ntclab.com/publication-viewer/2
            </a> */}
          </p>
          <p>
            Novel Definitive-to-Definitive Method of Multi-Analyte Drug Testing
            in Routine Practice:
          </p>
          <p>
            Research has led to the development of a new method of definitive
            drug testing used exclusively at the National Toxicology Center.
            &nbsp;The method employs a novel matrix normalization technique that
            allows accurate quantitation of drug levels. &nbsp;The method is now
            patented and has been reported in multiple peer reviewed
            publications available in the Learning Center. &nbsp;The method can
            be used for accurate threshold detection or full quantitation of
            over 100 drugs and metabolites using a rapid 3 minute
            chromatographic separation coupled with nominal or high resolution
            mass spectrometry. &nbsp;Data management has been developed to allow
            convenient handling of high volume data. &nbsp;The method is in
            routine high volume use at NTC and has been validated by direct
            comparison with analyte-matched stable isotope methods of testing.
            &nbsp;Dr. Rosano received the 2016 Experimental Design and Impact on
            Toxicology (EDIT) Award from the Society of Forensic Toxicologist
            for this research in 2016.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={11} />

            {/* <a href="/publication-viewer/11">
              https://ntclab.com/publication-viewer/11
            </a> */}
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={3} />

            {/* <a href="/publication-viewer/3">
              https://ntclab.com/publication-viewer/3
            </a> */}
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={1} />

            {/* <a href="/publication-viewer/1">
              https://ntclab.com/publication-viewer/1
            </a> */}
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={0} />

            {/* <a href="/publication-viewer/0">
              https://ntclab.com/publication-viewer/0
            </a> */}
          </p>
        </div>

        <div
          className={`tab-pane fade  `}
          id="pane2"
          role="tabpanel"
          aria-labelledby="tab2"
        >
          <p>
            Fentanyl and Fentanyl Analog Monitoring in Clinical and Forensic
            Casework:
          </p>
          <p>
            A comparative study of fentanyl, norfentanyl, 4-ANPP and 17 fentanyl
            analogs was studied in fentanyl-related fatalities and clinical
            treatment with FDA approved fentanyl. &nbsp;The study shows that
            betahydroxy-fentanyl is a metabolite of fentanyl and has value in
            monitoring for fentanyl use. &nbsp;The study further finds that
            4-ANPP is present in postmortem cases as a synthetic precursor of
            the illicitly produced fentanyl analog and is not in a detectable
            range in use of FDA approved fentanyl, probably because of the
            stringent regulation of pharmaceuticals versus unregulated synthesis
            of illicits. &nbsp;NTC finds that fentanyl is the predominant opioid
            abused in the population and routinely monitors for fentanyl use by
            testing fentanyl, norfentanyl, betahydroxy-fentanyl and 4-ANPP.
          </p>
          <PubViewer height={globalPDFViewerHeight} index={12} />

          <p>Fentanyl and Fentanyl Analog Associated Fatalities:</p>
          <p>
            A high resolution mass spectrometry method has been developed to
            confirm human fatalities associated with the use of fentanyl and its
            illicit analogs. &nbsp;Postmortem testing in 25 death investigations
            showed findings including fentanyl, norfentanyl, 4-ANPP,
            methoxyacetyl-fentanyl, furanyl-fentanyl, fluoro isobutyr-fentanyl,
            betahydroxy-fentanyl and acetyl-fentanyl. &nbsp;The method allows
            sensitive confirmation with high certainty.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={7} />

            {/* <a href="/publication-viewer/7">
              https://ntclab.com/publication-viewer/7
            </a> */}
          </p>
        </div>

        <div
          className={`tab-pane fade  `}
          id="pane3"
          role="tabpanel"
          aria-labelledby="tab3"
        >
          <p>
            Ethanol Monitoring and Interpretation with Urine Ethylglucuronide
            (ETG)Testing:
          </p>
          <p>
            Interpretation of a urine ETG test result requires distinction
            between ethanol consumption, endogenous ETG production from
            gastrointestinal flora and incidental exposure from use of ethanol
            containing product. &nbsp;Serial post dose levels of urinary ETG
            following consumption of &nbsp;two standard drinks is compared to
            endogenous ETG concentration in adult and pediatric subjects and to
            endogenous concentrations of ETG in subjects repeatedly &nbsp;using
            dermal germicide containing ethanol. &nbsp;The findings show that
            the administrative threshold of either 200ng/mL or 500 ng/ mL are
            not exceeded by either endogenous ETG production or dermal exposure.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={5} />

            {/* <a href="/publication-viewer/5">
              https://ntclab.com/publication-viewer/5
            </a> */}
          </p>
          <p>Ethanol Metabolite Monitoring in Pregnancy:</p>
          <p>
            This additional collaborative study in pregnancy shows that with the
            administrative cut-off of 100 ng/mL for ETG and 25 for ETS that
            dermal exposure to ethanol in hand germicide is not detected in
            pregnant subjects. &nbsp;
          </p>
          <PubViewer height={globalPDFViewerHeight} index={14} />
          {/* <a href="http://localhost:3000/publication-viewer/14">Read more</a> */}
          <p>
            Advanced Analytical Method for&nbsp;Urine&nbsp;Ethylyglucuronide
            (ETG) and Ethylsulfate (ETS):
          </p>
          <p>
            This is a description of the definitive ETG and ETS method of
            UPLC-MS/MS analysis used at the National Toxicology Center.
            &nbsp;The column separation is based on a charged surface hybrid of
            a phenyl hexyl column which allows selective separation of the
            ethanol metabolites and separation from endogenous interferences.
            &nbsp; Many column separations are based on silica backbone
            interactions that may vary between column manufacturing lots but the
            methods at NTC is robust and forensically defensible.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={4} />

            {/* <a href="/publication-viewer/4">
              https://ntclab.com/publication-viewer/4
            </a> */}
          </p>
        </div>

        <div
          className={`tab-pane fade  `}
          id="pane4"
          role="tabpanel"
          aria-labelledby="tab4"
        >
          <p>
            Application of LC-MS Technology in Medical Examiner Drug Screening:
          </p>
          <p>
            A combination of LC-MS and LC-MS/MS screening in postmortem casework
            was first reported by Dr Rosano and colleagues in 2011, a time when
            GC-MS was the predominate screening technology. &nbsp;The comparison
            of postmortem blood screening results for 410 death investigations
            showed that, compared to GC-MS, LC-MS and LC-MS/MS screening
            resulted in the highest drug detection rate (95%) and provided
            optimal dual-screening for the postmortem casework. &nbsp;Dr Rosano
            was the recipient of the EDIT Award for this work in&nbsp;
            <br />
            {/* <a href="/publication-viewer/17">Read More</a> */}
          </p>
          <PubViewer height={globalPDFViewerHeight} index={17} />

          <p>
            Use of High Resolution Mass Spectrometry in Postmortem Drug
            Screening:
          </p>
          <p>
            The practice of postmortem toxicology was further advanced in 2013
            in a study of the use of high resolution mass spectrometry
            (UPLC-MS/TOF) was reported and showed in comparison with LC-MS and
            LC-MS/MS screening that&nbsp;UPLC&ndash;MSE-TOF screening resulted
            in the highest drug detection rate of 99% and offered the potential
            for the detection of nontargeted analytes via high-resolution
            acquisition of molecular and fragment ion data. &nbsp;Additional
            quantitative work by high resolution MS was later demonstrated.
            &nbsp;&nbsp;Dr. Rosano received the 2013 Experimental Design and
            Impact on Toxicology (EDIT) Award from the Society of Forensic
            Toxicologist for this research in 2016.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={9} />
            {/* 
            <a href="/publication-viewer/9">
              https://ntclab.com/publication-viewer/9
            </a> */}
          </p>
          <PubViewer height={globalPDFViewerHeight} index={16} />

          {/* <a href="/publication-viewer/16">
            HRMS Quantitation in Postmortem Blood
          </a> */}
        </div>

        <div
          className={`tab-pane fade  `}
          id="pane5"
          role="tabpanel"
          aria-labelledby="tab5"
        >
          <p>Overdose with Insulin Glargine and Insulin Aspart:</p>
          <p>
            With a definitive method for the insulin analog &nbsp;Aspart and the
            metabolites of the insulin analog Glargine level in blood, the
            levels of these insulin analogs are monitored over two episodes of
            intentional overdose. &nbsp;The study is the first to identify
            insulin Glargine&rsquo;s metabolite (M1) as present in the
            circulation at high concentration without detectable parent drug.
            &nbsp;The study suggests that this long acting insulin analog is
            present primarily in the injection depot and that only the cleavage
            peptide metabolite (M1) is release into the circulation. &nbsp;The
            monitoring kinetics show an inverse correlation between the required
            glucose-infusion treatment and the reduction in circulating levels
            of the insulin Glargine metabolite. &nbsp;Implication for insulin
            analog monitoring in clinical practice are discussed.
          </p>
          <p>
            <PubViewer height={globalPDFViewerHeight} index={8} />

            {/* <a href="http://ntclab.com/publication-viewer/8">
              http://ntclab.com/publication-viewer/8
            </a> */}
          </p>
          <p>
            Ethylene Glycol and Glycolic Acid in a Series of Fatal Poisonings:
          </p>
          <p>
            Identification of ethylene glycol as the cause of a fatal
            intoxication has been challenging in medical examiner practice.
            &nbsp;In acute ethylene glycol fatalities the causative agent is the
            acid metabolite, glycolic acid, that produces a severe and fatal
            metabolic acidosis. &nbsp;The amount of ethylene glycol found
            postmortem may be misleading and represents only the amount of
            ethylene glycol remaining after a fatal concentration of glycolic
            acid is achieved. &nbsp;In this study, co-analysis of ethylene
            glycol and glycolic acid demonstrate the value of measuring the acid
            metabolite directly. &nbsp;While the ethylene glycol varied from
            undetectable to high concentration the glycolic acid level in
            postmortem blood correlated closely with the severe degree of
            metabolic acidosis. &nbsp;Forensic implications of the study are
            discussed and the data has been used in court testimony involving
            homicidal use of ethylene glycol.
            <br />
            {/* <a href="/publication-viewer/15">Read More</a> */}
          </p>
          <PubViewer height={globalPDFViewerHeight} index={15} />
          <p>A Strychnine Poisoning and Fatality Case:</p>
          <p>
            The history and toxicological findings in a case of suicidal
            strychnine poisoning are presented along with the analytical
            methodology. &nbsp;Distribution of strychnine concentration in body
            tissue and fluids is also reported. &nbsp;The mass spectrometry ion
            fragmentation pathway is determined for strychnine adding to the
            molecular certainty of the toxicological analysis. <br />{" "}
            {/* <a href="/publication-viewer/18">Read More</a> */}
          </p>
          <PubViewer height={globalPDFViewerHeight} index={18} />

          <p>A Benztropine Fatality Case:</p>
          <p>
            The history and toxicological findings in a case of suicidal with
            benztropine, an anticholinergic drug, are presented. &nbsp;The
            analytical methodology and ion fragmentation structures are also
            studies along with a search for metabolic conversion products.
            &nbsp;The fatal concentration of benztropine in postmortem blood and
            urine add to the forensic &nbsp;knowledge of benztropine associated
            fatalities.
            <br />
            {/* <a href="/publication-viewer/13">Read More</a> */}
          </p>
          <PubViewer height={globalPDFViewerHeight} index={13} />
        </div>

        <div
          className={`tab-pane fade  `}
          id="pane6"
          role="tabpanel"
          aria-labelledby="tab6"
        >
          <p>Clinical Significance of Cyclosporine Metabolites&nbsp;</p>
          <p>
            Cyclosporine was the first T Cell selective immunosuppressant
            developed for use in organ transplantation. &nbsp; Dr. Rosano and
            co-workers were instrumental in gaining knowledge of cyclosporine
            metabolites and their immunosuppressive properties during the
            development of this therapeutic agent. &nbsp;The series of
            publications in the Learning Center lead to knowledge of major
            cyclosporine metabolites in humans and animal models, along with an
            understanding of the immunosuppressive properties of these
            metabolites. &nbsp; The levels of metabolites have been studied in
            renal transplant therapy and during episodes of nephrotoxicity and
            organ rejection.
          </p>
          {/* <p>Note: use first 9 publications in the email</p> */}
          <PubViewer height={globalPDFViewerHeight} index={19} />
          <PubViewer height={globalPDFViewerHeight} index={20} />
          <PubViewer height={globalPDFViewerHeight} index={21} />
          <PubViewer height={globalPDFViewerHeight} index={22} />
          <PubViewer height={globalPDFViewerHeight} index={23} />
          <PubViewer height={globalPDFViewerHeight} index={24} />
          <PubViewer height={globalPDFViewerHeight} index={25} />
          <PubViewer height={globalPDFViewerHeight} index={26} />
          <PubViewer height={globalPDFViewerHeight} index={27} />

          <p>Clinical Testing for Cyclosporine Therapy</p>
          <p>
            With the development of chromatographic methods for the detection
            and quantitation of cyclosporine and its metabolites, Dr. Rosano and
            co-workers participated in a series of studies leading to the
            development of therapeutic monitoring methods. &nbsp;The cross
            reactivity of immunoassay antibodies was tested and FDA testimony
            was provided during the approval process for immunoassay monitoring
            of transplant patients. A consensus conference regarding methods of
            monitoring was held and resulted in the monitoring practices used
            currently in transplantation. &nbsp;The studies and consensus
            conference findings are available through the NTC learning Center.
          </p>
          {/* <p>
            Note: use reference 10 (effect of hematocrit on cyclosporine
            monitoring) - 14 in this email
          </p> */}
          <PubViewer height={globalPDFViewerHeight} index={28} />
          <PubViewer height={globalPDFViewerHeight} index={29} />
          <PubViewer height={globalPDFViewerHeight} index={30} />
          <PubViewer height={globalPDFViewerHeight} index={31} />
          <PubViewer height={globalPDFViewerHeight} index={32} />
        </div>
      </div>
      <a href="/full-publications">All Publications</a>
    </div>
  );
};

export default PublicationTab;
