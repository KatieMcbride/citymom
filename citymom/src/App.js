import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}
        </Switch>
    </div>
  );
}

export default App;
