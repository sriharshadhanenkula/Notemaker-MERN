import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path="/" component={LandingPage} />
      <Route path="/mynotes" component={MyNotes} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
