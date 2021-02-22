import React, { Conponent } from "react";
import { Menubar } from "primereact/components/menubar/Menubar";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { showGrowl } from "../actions/actions.jsx";
import { showInfoMessage } from "../utils/utils.js";

export class AppMenu extends Component {
  navigateToPage = path => {
    this.props.history.push(path);
    showInfoMessage(this, "Navigation", path);
  };

  render() {
    return <Menubar model={items} />;
  }
}
