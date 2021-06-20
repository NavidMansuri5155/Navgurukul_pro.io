import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main"
import Footer from "./component/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
      </Router>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
