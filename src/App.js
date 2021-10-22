import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductDetail from "./Pages/ProductDetail";
import AddProduct from "./Pages/AddProduct";
import Account from "./Pages/Account";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/myaccount">
          <Account />
        </Route>
        <Route path="/product">
          <ProductDetail />
        </Route>
        <Route path="/addproduct">
          <AddProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
