import React from 'react';
import { withRouter } from 'react-router-dom';

class RedirectionPage extends React.Component {
  componentWillMount(){
    this.props.history.replace(this.props.redirectPath);
  }
  render() {
    return(<div></div>);
  }
}

export default withRouter(RedirectionPage);