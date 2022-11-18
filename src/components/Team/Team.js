import React from "react";
import "./Team.css";
const Team = () => {
  const team = [
    {
      name: "Thomas G. Rosano, PhD, F-ABFT, DABCC, FAAFS, FACB",
      img: "/assets/img/dr-thomas-rosano.png",
      text: "Dr. Rosano is board certified in Forensic Toxicology by the American Board of Forensic Toxicologists and in Clinical Chemistry by the American Board of Clinical Chemistry. For over 30 years Dr. Rosano served as director of Clinical Chemistry and Toxicology at the Albany Medical Center Hospital where in 1993 he expanded toxicology services to include postmortem toxicology services for a 22 county region. During his career at the Albany Medical Center Dr. Rosano progressed to tenured professor of Laboratory Medicine at the Albany Medical College where he lectured and mentored medical and graduate students along with residents and fellows. In 2018 Dr. Rosano transitioned to the National Toxicology Center at the Center for Medical Science in Albany, New York and was promoted to Professor Emeritus in Laboratory Medicine at the Albany Medical College.  His current focus is on pain management and addiction medicine casework and on advancement of clinical and forensic toxicology through innovations in high-volume definitive screening and applications of high-resolution mass spectroscopy.  Dr. Rosano has authored over 100 peer reviewed publications and textbook chapters in the clinical and forensic literature and is co-inventor on patents including a novel method of definitive drug testing used routinely at the National Toxicology Center.   Dr.  Rosano is currently serving as Toxicologist and Laboratory Director of the National Toxicology Center.",
    },
    {
      name: "John M. Rumberger, PhD",
      img: "/assets/img/dr-john-m-rumberger.jpg",
      text: "Dr Rumberger began his career in the pharmaceutical industry in drug discovery with advancing discoveries made while directing a laboratory for a start-up diabetes research company.  He received his PhD in Biomedical Science from the University of Buckingham in the United Kingdom.  As National Toxicology Center was being founded, Dr Rumberger shifted his focus from research to clinical and forensic toxicology practice, partnering with Dr Rosano in post-mortem forensic toxicology as a postdoctoral fellow at Albany Medical Center.  Dr Rumberger joined National Toxicology Center in 2018, completing his fellowship training and receiving his certificate of qualification as a Laboratory Director from New York State Department of Health.  Dr Rumberger has authored over 25 peer reviewed papers and is co-inventor on a worldwide patent. Dr. Rumberger now serves as Toxicologist and Forensic Scientist and Assistant Laboratory Director at the National Toxicology Center.  ",
    },
  ];
  return (
    <div className="container" style={{ padding: "45px 0 450px" }}>
        <h3>Team</h3>
      <div className="row">
        {team.map((member) => {
          return (
            <div className="col-md-6 team-col">
              <div className="team-img-container">
                <img className="team-img" src={member.img} />
              </div>
              <h5 className="team-name">{member.name}</h5>
              <p className="team-desc">{member.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
