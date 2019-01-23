import React from 'react';
import { withRouter } from 'react-router-dom';
import InfoBox from '../InfoBox';
import ContactForm from '../ContactForm';

let ContactUsView = (props) => {
  return (
    <section className="row w-100">
      <div className="my-4 py-4 col-12 text-center">
        <h1 className="font-weight-bold">CONTACT US</h1>
      </div>
      <div className="d-flex w-100 align-content-between flex-column flex-wrap flex-md-row">
        <InfoBox icon="fa-map-marker-alt" bgColor="bg-success" lines={["ADDRESS",
          "Fare Safe Ltd", "The Old School, 188 Liscard Road, Liscard, Wallasey, CH44 5TN"]} />
        <InfoBox icon="fa-phone" bgColor="bg-warning" lines={["PHONES",
          "Phone: 0151 272 6708", "Head office: 02070846707"]} />
        <InfoBox icon="fa-envelope" bgColor="bg-danger" lines={["CONTACTS",
          "info@faresafe.co.uk", "www.faresafe.co.uk"]} />
        <InfoBox icon="fa-clock" bgColor="bg-primary" lines={["WORKING HOURS",
          "Monday-Friday: 9:00 – 18:00", "Saturday: 11:00 – 17:00",
          "Sunday: Closed"]} />
      </div>
      <div className="col-12">
        <div className="row no-gutters">
          <div className="col-12 col-md-12 col-lg-6 order-last order-lg-first p-3 ml-3 ml-md-0">
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 ml-3 ml-md-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(ContactUsView);