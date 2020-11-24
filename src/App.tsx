import React from "react";

// COMPONENTS
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
