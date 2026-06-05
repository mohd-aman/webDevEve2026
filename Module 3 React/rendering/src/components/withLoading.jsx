import React from "react";

const withLoading = (WrappedComponent) => {
  return class ABC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 3000);
    }

    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      } else {
        return <WrappedComponent />;
      }
    }
  };
};


export default withLoading;