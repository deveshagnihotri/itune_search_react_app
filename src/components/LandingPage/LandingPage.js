import React, { Component } from "react";
import { LandingActions } from "../../actions/LandingActions";
import { connect } from "react-redux";
import Header from "../Header";
import SearchResult from "./SearchResult";
import Loading from "../Loading";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  componentDidMount() {
    this.props.LandingActions("hardwell");
  }

  handleInputText = (e) => {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  };

  handleSearch = () => {
    if (this.state.inputValue !== "") {
      this.props.LandingActions(this.state.inputValue);
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter" && this.state.inputValue !== "") {
      this.props.LandingActions(this.state.inputValue);
    }
  };

  render() {
    return (
      <div>
        <Header
          inputValue={this.state.inputValue}
          handleTextInput={(e) => this.handleInputText(e)}
          handleSearchBtn={() => this.handleSearch()}
          handleKeyPress={(e) => this.handleKeyPress(e)}
        />
        <SearchResult
          result={this.props.result}
          totalResult={this.props.totalResult}
          isLoading={this.props.isLoading}
        />
        {this.props.isLoading ? <Loading /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ LandingReducers }) => {
  const { result, totalResult, isLoading } = LandingReducers;
  return { result, totalResult, isLoading };
};

export default connect(mapStateToProps, { LandingActions })(LandingPage);
