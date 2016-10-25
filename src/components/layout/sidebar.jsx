import React, { Component } from 'react';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href=""
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
              }
              >
                <li>
                  <a href=""  >
                    FlotCharts
                  </a>
                </li>
                <li>
                  <a
                    href=""
                  >
                    Morrisjs Charts
                  </a>
                </li>
              </ul>
            </li>


            <li>
              <a href=""  >
                <i className="fa fa-table fa-fw" /> &nbsp;Tables
              </a>
            </li>

            <li>
              <a href=""  >
                <i className="fa fa-table fa-fw" /> &nbsp;Forms
              </a>
            </li>

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
              >
                <i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.uiElementsCollapsed,
                })}
              >
                <li>
                  <a href="" >
                    Panels And Wells
                  </a>
                </li>
                <li>
                  <a href=""  >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    href=""
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a href="" >
                    Typography
                  </a>
                </li>
                <li>
                  <a href="">
                    Icons
                  </a>
                </li>
                <li>
                  <a href=""  >
                    Grid
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.multiLevelDropdownCollapsed })}>
              <a
                href=""
              >
                <i className="fa fa-sitemap fa-fw" />
                &nbsp;Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true, collapse: this.state.multiLevelDropdownCollapsed,
                  })}
              >
                <li>
                  <a href="" >Second Level Item</a>
                </li>
                <li>
                  <a href="" >Second Level Item</a>
                </li>
                <li className={classNames({ active: !this.state.thirdLevelDropdownCollapsed })}>
                  <a
                    href=""
                  >
                    Third Level<span className="fa arrow" />
                  </a>
                  <ul
                    className={
                      classNames({
                        'nav nav-second-level': true,
                        collapse: this.state.thirdLevelDropdownCollapsed,
                      })}
                  >
                    <li>
                      <a href="" >Third Level Item</a>
                    </li>
                    <li>
                      <a href="" >Third Level Item</a>
                    </li>
                    <li>
                      <a href="" >Third Level Item</a>
                    </li>
                    <li>
                      <a href="" >Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a
                href=""
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Sample Pages
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.samplePagesCollapsed,
                  })}
              >
                <li>
                  <a href=""  >
                    Blank
                  </a>
                </li>
                <li>
                  <a href="" >
                    Login
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
