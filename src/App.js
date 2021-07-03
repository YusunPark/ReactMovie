import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async () => {
    const movies = awaite axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
  };
  
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading" : "We are ready"}</div> 
    );
  }
}

export default App;
