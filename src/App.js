import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/:category">
            <Products />
          </Route>

          <Route path="/product/:id">
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
