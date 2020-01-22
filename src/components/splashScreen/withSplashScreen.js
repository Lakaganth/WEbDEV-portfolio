import React, { Component } from "react";

import "./splashScreen.scss";

function LoadingMessage() {
  return (
    <div className="loading-wrapper">
      <div className="loadingio-spinner-spin-nddehvxl9x">
        <div className="ldio-6s594sre7pq">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const withSplashScreen = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 1500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withSplashScreen;
