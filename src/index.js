import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

class Toaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.show && !prevState.show) {
      setTimeout(() => {
        this.setState({ show: false });
      }, 5000);
    }
  }

  showToast = (style, title, message) => {
    this.setState({ show: true, mssstyle: style, title, message });
  };

  render() {
    return (
      <div style={{ position: "fixed", top: 25, right: 25, zIndex:99 }}>
        <Toast isOpen={this.state.show}>
          <ToastHeader icon={this.state.mssstyle}>
            {this.state.title}
          </ToastHeader>
          <ToastBody>{this.state.message}</ToastBody>
        </Toast>
      </div>
    );
  }
}

export default Toaster;
