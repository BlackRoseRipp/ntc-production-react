import React from "react";
import "./Blog.css";
import { useParams } from "react-router-dom";
import AdvancesInDifinitiveDrugScreeningMethods from "./Posts/advances-in-difinitive-drug-screening-methods";
import ApplicationOfHighResolutionUPLC from "./Posts/application-of-high-resolution-uplc";
import ClinicalValueOfDefinitiveUrineDrugMonitoring from "./Posts/clinical-value-of-definitive-urine-drug-monitoring";
import DirectToDefinitiveDrugScreeningWithQuantitation from "./Posts/direct-to-definitive-drug-screening-with-quantitation";
import EtgAndEtsQuantitationByUPLC from "./Posts/etg-and-ets-quantitation-by-uplc";
import EtgInUrineWithOralAandDermalUse from "./Posts/etg-in-urine-with-oral-and-dermal-use";
import FatStrychninePoisoning from "./Posts/fat-strychnine-poisoning";
import FentanylAnalogsInHumanUrine from "./Posts/fentanyl-analogs-in-human-urine";
import GlargineOverdoseReport from "./Posts/glargine-overdose-report";
import HrmsDrugsScreeningPublication from "./Posts/hrms-drugs-screening-publication";
import HrmsQuantitationInPostmortemBlood from "./Posts/hrms-quantitation-in-postmortem-blood";
import NovelMethodOfDefinitiveDrugMetaboliteScreen from "./Posts/novel-method-of-definitive-drug-metabolite-screen";
export const blogs = [
  {
    key: "0",
    title: "Advances in Definitive Drug Screening Methods JAT 2021",
    preview:
      "Analytical performance of stable isotope-labeled internal standardization (SIL-IS) and threshold accurate calibration (TAC) methods of matrix normalization are compared for quantitation of 51 drugs and metabolites (analytes) in urine with analysis by ultra performance liquid chromatography with tandem mass spectrometry",
    url: "/advances-in-difinitive-drug-screening-methods",
    img: "/assets/img/blog/240_F_248331598_0lnSsYXIY3FTRosqjt01sd41DAqayJap.jpg",
    component: <AdvancesInDifinitiveDrugScreeningMethods />,
  },
  {
    key: "1",
    title:
      "Application of High-Resolution  Forensic Urine Drug Screening",
    preview:
      "The transition from presumptive (immunoassay) drug screening to definitive screening has continued in the practice of analytical toxicology. Development of a ultra-performance liquid chromatog-raphy–tandem mass spectrometry (UPLC–MS/MS) screening method for over sixty drugs and metabolites (analytes) in urine has been",
    url: "/application-of-high-resolution-uplc",
    img: "/assets/img/blog/coronavirus-vaccine-composition-lab.jpg",
    component: <ApplicationOfHighResolutionUPLC />,
  },
  {
    key: "2",
    title: "Clinical Value of Definitive Urine Drug Monitoring_Pain Med 2021",
    preview: "It is estimated that in the United States 50 million adults live with daily chronic pain [1] and that opioid analgesics have been prescribed for up to one-third of patients with chronic pain treated in primary care clinics [2]. The United States leads the world in the consumption of opioids. According to recent ",
    url: "/clinical-value-of-definitive-urine-drug-monitoring",
    img: "/assets/img/blog/AdobeStock_87681076.jpeg",
    component: <ClinicalValueOfDefinitiveUrineDrugMonitoring />,
  },
  {
    key: "3",
    title: "Direct-to-Definitive Drug Screening with Quantitation JAT2017",
    preview: "Drug and metabolite (analytes) identification together with quantification is an important analytical tool in forensic and clinical toxicology. We report the development and validation of a definitive detection and quantification method (UPLC–MS-MS) for initial screening of 64 analytes in urine. The principle of ",
    url: "/direct-to-definitive-drug-screening-with-quantitation",
    img: "/assets/img/blog/ntcLab_1.png",
    component: <DirectToDefinitiveDrugScreeningWithQuantitation />,
  },
  {
    key: "4",
    title: "EtG and EtS Quantitation by UPLC-MS-MS",
    preview: "Ethanol consumption has been linked to significant socio-economic burdens worldwide.1 As a result, there is a growing need for the detection and identification of ethanol use. Over the years, ethylglucuronide (EtG) and ethylsulfate (EtS) have emerged as reliable biomarkers of recent ethanol use.2,3 EtG and EtS are ",
    url: "/etg-and-ets-quantitation-by-uplc",
    img: "/assets/img/blog/AdobeStock_212568868.jpeg",
    component: <EtgAndEtsQuantitationByUPLC />,
  },
  {
    key: "5",
    title: "ETG in urine with oral and dermal use - Rosano",
    preview: "Ethyl glucuronide (EtG, ethyl -D-6-glucosiduronic acid) is a phase two metabolite of ethanol formed by conjugation reaction with glucuronic acid via UDP-glucurolyosyltransferase catalysis. Urinary excretion of EtG represents a minor pathway of ethanol elimination initially identified in rabbits (1) and later in humans ",
    url: "/etg-in-urine-with-oral-and-dermal-use",
    img: "/assets/img/blog/AdobeStock_248331605.jpeg",
    component: <EtgInUrineWithOralAandDermalUse />,
  },
  {
    key: "6",
    title: "Fat Strychnine Poisoning",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis luctus eros, dictum lobortis nulla dapibus a. Aliquam aliquam efficitur mauris, vitae ullamcorper elit condimentum vel. Aenean finibus aliquam convallis. Suspendisse fermentum nisi et ornare sollicitudin. Fusce ultricies orci eleifend cursus convallis.",
    url: "/fat-strychnine-poisoning",
    img: "/assets/img/blog/ntcLab_3.png",
    component: <EtgInUrineWithOralAandDermalUse />,
  },
  {
    key: "7",
    title: "Fentanyl Analogs In Human Urine by UPLC-TOF MRM",
    preview: "High resolution mass spectrometry (HRMS) using quadrupole time-of-flight (QTof) instrumentation is increasingly used within the field of forensic toxicology as a comprehensive screening technique. Typically it is used in a non-targeted mode of data acquisition i.e., Tof-MSE, which provides a highly specific identification",
    url: "/fentanyl-analogs-in-human-urine",
    img: "/assets/img/blog/AdobeStock_298237358.jpeg",
    component: <FentanylAnalogsInHumanUrine />,
  },
  {
    key: "8",
    title: "Glargine Overdose Report",
    preview: "Insulin glargine is a long-acting, slow tissue release insulin analogue that is designed to provide a steady profile of insulin in order to mimic the basal endogenous insulin release profile. The activity of this agent is dependent on biotransformation of glargine to the active metabolite, glargine-M1, which has been well",
    url: "/glargine-overdose-report",
    img: "/assets/img/blog/medical-researcher-dripping-blood-into-test-tube-from-micropipette-doctor-working-with-various-bacteria-tissue-pharmaceutical-research-antibiotics-against-covid19.jpg",
    component: <GlargineOverdoseReport />,
  },
  {
    key: "9",
    title: "HRMS Drug Screening Publication",
    preview: "Analytical toxicology is a foundation of medical examiner investigation as practiced throughout the world. Comprehensive screening, often referred to as general unknown or systematic toxicological analysis, is essential for the comprehensive detection of both suspected and unsuspected drugs and toxins present in body ﬂuids ",
    url: "/hrms-drugs-screening-publication",
    img: "/assets/img/blog/AdobeStock_329919278.jpeg",
    component: <HrmsDrugsScreeningPublication />,
  },
  {
    key: "10",
    title: "HRMS Quantitation in Postmortem Blood",
    preview: "Drug and metabolite (analytes) ﬁndings in medical examiner cases often require quantitative analysis for interpretive assistance in determination of cause and manner of death. The proliferation of pharmaceutical and designer agents identiﬁed in drug-related deaths, as well as the increase in analyte detection by newer screening",
    url: "/hrms-quantitation-in-postmortem-blood",
    img: "/assets/img/blog/AdobeStock_385363025.jpeg",
    component: <HrmsQuantitationInPostmortemBlood />,
  },
  {
    key: "11",
    title: "Novel Method of Definitive Drug and Metabolite Screen JAT2016",
    preview: "Drug screening is an essential analytical tool for detection of therapeutic, illicit and emerging drug use. Presumptive immunoassay screening is widely used, while initial definitive testing by chromatography-coupled mass spectrometry is hampered due to complex pre-analysis steps, long chromatography time and matrix effects.",
    url: "/novel-method-of-definitive-drug-metabolite-screen",
    img: "/assets/img/blog/ntcLab_2.png",
    component: <NovelMethodOfDefinitiveDrugMetaboliteScreen />,
  },
];
const BlogDetail = () => {
  const { index } = useParams();
  return (
    <div className="container" style={{ padding: "45px 0" }}>
      {blogs[index].component}
    </div>
  );
};

export default BlogDetail;
