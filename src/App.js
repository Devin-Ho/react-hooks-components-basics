import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() { //App is the parent component of Article and Comment (children component of App)
  return (
    <div>
      <Article /> 
      <Comment />
    </div>
  );
}

export default App;
