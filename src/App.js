import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Stock from "./pages/Stock/Stock";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/quote/:symbol" render={() => <Stock />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
