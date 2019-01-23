import React from 'react';

let NotificationBar = (props) => {
  return (
    <section className="row" id="quote-info">
      <div className="alert alert-danger alert-dismissible fade show col mb-0" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </div>
    </section>
  );
};

export default NotificationBar;