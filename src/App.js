import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Stock from "./pages/Stock/Stock";
import CurrentNews from "./pages/CurrentNews/CurrentNews";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/marketnews" render={() => <CurrentNews />} />
          <Route path="/quote/:symbol" render={() => <Stock />} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
