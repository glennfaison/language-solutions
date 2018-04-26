import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Settings from '../../../utilities/Settings';
import SignalManager from '../../../utilities/SignalManager';


class UserProfilePage extends React.Component{
  render(){
    SignalManager.emitSignal("printThis", "nothing");
    return(
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-12">
                  <img src="holder.js/250x250" className="img-fluid rounded w-100" alt=""/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 pt-3">
                  <h3>{this.props.currentUser.username}</h3>
                  <hr/>
                  <div className="small">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="">{this.props.currentUser.email}</a>
                  </div>
                  <div className="small">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Buea, Cameroon</span>
                  </div>
                  <div className="small">
                    <i className="fa fa-chain" aria-hidden="true"></i>
                    <Link to={Settings.baseRoutes.createQuote} >Creat Quote</Link>
                  </div>
                  <hr/>
                  <p className="pt-3 text-secondary">
                    At, sit veritatis quibusdam tempore adipisci voluptate doloribus eos, 
                    quo illo nesciunt id mollitia sapiente iste placeat 
                    quaerat cumque voluptas dicta qui?
                  </p>
                  <button type="button" name="" id="" className="btn btn-primary btn-block">
                    Follow
                  </button>
                  <hr/>
                </div>
              </div>
            </div>

            <div className="col-sm-9">
              <ul className="nav nav-tabs nav-stacked nav-justified">
                <li className="nav-item">
                  <a href="" className="nav-link active">Upcoming Events</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Shared Events</a>
                </li>
                <li className="nav-item disabled">
                  <a href="" className="nav-link">Discover activities</a>
                </li>
              </ul>
              <div className="mt-3 pt-3">Popular Timetables</div>
              <div className="row px-2">
                <div className="col-sm-6 mt-3 px-2">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Title</h3>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-3 px-2">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Title</h3>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-3 px-2">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Title</h3>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfilePage);