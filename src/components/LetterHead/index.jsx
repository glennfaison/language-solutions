import React from 'react';

let LetterHead = (props) => {
  return (
    <div className="row">
      <div id="letterhead" className="col-12 position-relative border-bottom border-dark">
        <div className="row">
          <img src="./images/Language Solutions Letter Head.png"
            className="img-fluid mx-auto" id="cover-photo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LetterHead;