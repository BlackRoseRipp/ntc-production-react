import React from "react";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="container">
       
      <div className="row contact-row"> <h2 style={{margin:"45px 0"}} >Contact</h2>
        <div className="col-md-6 align-self-center">
          <ul className="contact-info-list" >
            <li>
                <b>Address:</b> Center for Medical Science Building, 150 New
                Scotland Avenue, Albany, New York, 12208
            </li>
            <li>
                <b>Phone:</b> 518-293-0204
            </li>
            <li>
                <b>Fax:</b> 518-293-0208
            </li>
            <li>
                <b>Email:</b> drugtest@ntclab.com
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.42113087548!2d-73.78500444825353!3d42.652430379066075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a5ccb4e8649%3A0xafb70aa07a05f3b4!2s150%20New%20Scotland%20Ave%2C%20Albany%2C%20NY%2012208!5e0!3m2!1sen!2sus!4v1652295083369!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{border:"0"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
