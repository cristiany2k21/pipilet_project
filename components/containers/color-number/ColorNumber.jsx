import React, { Component } from 'react';
import classNames from 'classnames';

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
        <div className={classNames("wrapper-color", this.state.active ? "shift" : "not-shift")}>
          <div className="header-color">
            <p>APRENDE LOS COLORES EN 12 LENGUAS DIFERENTES</p>
          </div>
        </div>

        <div onMouseEnter={this.shiftColorEnter} onMouseLeave={this.shiftColorEnter} className="wrapper-number">
          <div className="header-number">
            <p>APRENDE LOS NUMEROS DEL 1 AL 100 EN DIFERENTES LENGUAS</p>
          </div>
        </div>
      </div>
    )
  }
}