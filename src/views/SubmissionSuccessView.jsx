import React from 'react';
import { withRouter } from 'react-router-dom';


let SubmissionSuccessView = (props) => {
  return (
    <section className="row mb-5">
      {/* <div className="mt-4 pt-4 col-12"></div> */}
      <div className="col-lg-7 col-md-6 order-last order-md-first mt-1">
        <h1 className="text-bold p-4">You submitted successfully!</h1>
      </div>
      <div className="col-lg-5 col-md-6 order-first order-md-last text-center mb-5">
        <i className="fa-check fas fa-10x fa-fw text-success"></i>
      </div>
    </section>
  );
};

export default withRouter(SubmissionSuccessView);