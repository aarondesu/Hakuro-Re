import React from "react";
import { connect } from "react-redux";

import { doTempAction } from "../actions/template_action";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.doTempAction();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <p>React & Electron boilerplate</p>
      </React.Fragment>
    );
  }
}

const mapStateProps = state => ({
  tempReducer: state.tempReducer
});

const mapActionProps = dispatch => ({
  doTempAction: () => dispatch(doTempAction())
});

export default connect(
  mapStateProps,
  mapActionProps
)(HomePage);
