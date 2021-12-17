import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scroll from "./scroll";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectAge from "./pages/SelectAge";
import Childhood from "./pages/Childhood";
import Teenage from "./pages/Teenage";
import Adult from "./pages/Adult";
import Pregnancy from "./pages/Pregnancy";
import Quiz from "./pages/Quiz";
import SelectDoctor from "./pages/SelectDoctor";
import Chatroom from "./pages/Chatroom";
import FAQ from "./pages/FAQ";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <div className="font-poppins">
      <Router>
        <Scroll />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/selectage" exact component={SelectAge} />
          <Route path="/childhood" exact component={Childhood} />
          <Route path="/teenage" exact component={Teenage} />
          <Route path="/adult" exact component={Adult} />
          <Route path="/pregnancy" exact component={Pregnancy} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/selectdoctor" exact component={SelectDoctor} />
          <Route path="/chatroom" exact component={Chatroom} />
          <Route path="/faq" exact component={FAQ} />
        </Switch>
        <Chatbot />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
