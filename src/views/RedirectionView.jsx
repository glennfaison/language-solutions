import React from 'react';
import { withRouter } from 'react-router-dom';


let RedirectionPage = (props) => {
  props.history.replace(props.redirectPath);
  return (<div></div>);
};

export default withRouter(RedirectionPage);