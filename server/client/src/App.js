import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectAge from "./pages/SelectAge";
import PregnantWomenPage from "./pages/PregnantWomenPage";
import Chatroom from "./pages/Chatroom";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/selectage" exact component={SelectAge} />
        <Route path="/pregnantwomen" exact component={PregnantWomenPage} />
        <Route path="/chatroom" exact component={Chatroom} />
        <Route path="/faq" exact component={FAQ} />
      </Switch>
    </Router>
  );
}

export default App;
