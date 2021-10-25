import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ProductDetail from "./Pages/ProductDetail";
import AddProduct from "./Pages/AddProduct";
import Account from "./Pages/Account";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/myaccount">
          <Account />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/addproduct">
          <AddProduct />
        </Route>
        <Route path={["/category/:categoryid", "/"]} exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
