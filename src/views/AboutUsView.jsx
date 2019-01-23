import React from 'react';
import { withRouter } from 'react-router-dom';

let AboutUsView = (props) => {
  return (
    <React.Fragment>
      <div className="col-sm-12 text-uppercase font-weight-bold text-center h1 p-3 mb-3">
        About Us
      </div>
      <div className="row no-gutters">
        <div className="col-md-6 order-md-first order-sm-last">
          <div className="py-3">
            <video className="col-12" width="100%" height="100%" controls="controls"
              src="http://www.faresafe.co.uk/IMG_1615.mp4"
              poster="http://www.faresafe.co.uk/wp-content/uploads/2018/03/dave.jpg"
              preload="none"></video>
          </div>
        </div>
        <div className="col-md-4 offset-md-1">
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AboutUsView);