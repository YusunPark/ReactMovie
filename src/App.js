import React from "react";

function Food({ fav }) {
  return <h1>i like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      Hello
      <Food fav="kimchi" />
      <Food fav="apple" />
      <Food fav="banana" />
      <Food fav="kiwi" />
    </div>
  );
}

export default App;
