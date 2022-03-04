import React from "react";
import Entry from "./Entry"
import emojipedias from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Entry 
    name={emojipedia.name} 
    emoji={emojipedia.emoji} 
    meaning={emojipedia.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>


      <dl className="dictionary">
        
        {emojipedias.map(createCard)}

      </dl>
    </div>
  );
}

export default App;
