import React from 'react';
import { withRouter } from 'react-router-dom';

import PassengerInfoForm from '../PassengerInfoForm';

let FormSubmissionView = (props) => {
  return (
    <section className="row no-gutters">
      <PassengerInfoForm />
    </section>
  );
};

export default withRouter(FormSubmissionView);