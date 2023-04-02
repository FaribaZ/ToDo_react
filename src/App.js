import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weekly from "./Weekly";
import Create from "./Create";
import ItemDetails from "./ItemDetails";
function App() {
  //const title = "My TODO list!";
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Create />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Weekly">
              <Weekly />
            </Route>
            <Route path="/ItemList/:id">
              <ItemDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
