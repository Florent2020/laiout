import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import "./sass/style.scss";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg">
      <div className="wrapper">
        <Router>
          <Nav />
          <Home />
          <About />
          <Team />
          <Contact />
          <Footer />
          <Switch>
            {/* <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/#about">
              <About />
            </Route> */}
            {/*<Route path="/#team">
              <Team />
            </Route>
            <Route path="/#contact">
              <Contact />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
