import React, { Component } from 'react';
import { Link } from 'react-router';
import multipleOwls from '../../../images/family-owls-fade.jpg';
import familyChildren from '../../../images/family-children-fade.jpg';
import familyChildrenGray from '../../../images/family-children-fade-gray.jpg';
import familyOwlsGray from '../../../images/family-owls-fade-gray.jpg';

export default class ColorNumber extends Component {

  constructor() {
    super();
    this.shiftColorEnter = this.shiftColorEnter.bind(this);
    this.state = {
      active: false
    }
  }

  shiftColorEnter() {
    const active = !this.state.active;
    this.setState({
      active
    })
  }

  render() {
    return (
      <div id="wrapper-colornumber">
        <Link to="colorSelection">
          <div className="wrapper-family-owls">
            <img src={multipleOwls} alt="" width="1600"/>
            <img className="family-owls-gray" src={familyOwlsGray} alt="" width="1600"/>
          </div>
        </Link>

        <div onMouseEnter={this.shiftColorEnter} onMouseLeave={this.shiftColorEnter} className="wrapper-number">
          <Link to="/numberSelection">
            <div className="wrapper-family-children">
              <img src={familyChildren} alt="" width="1600"/>
              <img className="family-children-gray" src={familyChildrenGray} alt="" width="1600"/>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}