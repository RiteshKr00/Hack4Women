import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectAge from "./pages/SelectAge";
import Pregnancy from "./pages/Pregnancy";
import Chatroom from "./pages/Chatroom";
import FAQ from "./pages/FAQ";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/selectage" exact component={SelectAge} />
          <Route path="/pregnancy" exact component={Pregnancy} />
          <Route path="/chatroom" exact component={Chatroom} />
          <Route path="/faq" exact component={FAQ} />
        </Switch>
        <Chatbot />
        <Footer />
      </Router>
    </>
  );
}

export default App;
