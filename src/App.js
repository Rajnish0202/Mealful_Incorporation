import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details/:date'>
          <SinglePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
