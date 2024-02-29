import React, { Component } from "react";
const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    isFormOpen: false
  };
  componentDidMount() {
   
  }

  
  closeForm = () => {
    this.setState({ isFormOpen: false });
  };
  openForm = () => {
    this.setState({ isFormOpen: true });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          openForm : this.openForm,
          closeForm : this.closeForm
          
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
const AppConsumer = AppContext.Consumer;
export { AppConsumer, AppContext };
export default AppProvider;