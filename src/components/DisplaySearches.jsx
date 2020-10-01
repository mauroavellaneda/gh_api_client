import React, { Component } from "react";
import { fetchGhData } from "../modules/fetchGhData";

class DisplaySearches extends Component {
  state = {
    searches: [],
  };

  componentDidMount = async () => {
    const searches = await fetchGhData();
    this.setState({ searches: searches });
    debugger
  };

  render() {
    let searches;
    if (this.state.searches !== []) {
      searches = this.state.searches.map((search) => {
        return (
          <>
            <div>{this.state.searches}</div>
          </>
        );
      });
    }
    return (
        <div id='displaysearches'>
        {searches}
        </div>
    )
  }
}

export default DisplaySearches;
