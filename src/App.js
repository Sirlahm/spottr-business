import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import A from "./components/About";
import A from "./Pages/NewAbout";

import P from "./Pages/Privacy";
// import Home from "./Pages/Home";
import Home from "Pages/NewHome";
import Terms from "./Pages/Terms";
import Blog from "./Pages/Blog";
import FAQ from "./Pages/Faq.js";
// import Contact from "./Pages/Contact-us";
import Contact from "Pages/NewContact";
import Login from "./Pages/Login";
import Signup from "./Pages/Sign-up";
import OTP from "./Pages/OTP";
import Email from "./Pages/Email";
import Password from "./Pages/Password";
import Details from "./Pages/Details";
import ScrollToTop from  "./components/ScrollToTop";
import "./App.css";

toast.configure({});

function App() {
  return (
    <div className="major-container">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/about" component={A} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/privacy" component={P} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/otp" component={OTP} />
            <Route exact path="/email" component={Email} />
            <Route exact path="/password" component={Password} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
