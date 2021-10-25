import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/home";
import SignIn from "./Pages/signIn-Up/signIn";
import SignUp from "./Pages/signIn-Up/signUp";
import ProductDetail from "./Pages/productDetail";
import AddProduct from "./Pages/addProduct";
import Account from "./Pages/account";
import NotFound from "./Pages/notFound";
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
