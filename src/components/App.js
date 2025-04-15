import React from "react";
import About from "./About";
import Home from './Home';
import NavBar from './NavBar';
const username = 'Liza';
const city = 'New York';

const image = 'https://i.imgur.com/mV8PQxj.gif';

// export all three variables as named exports
export { username, city, image };

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
