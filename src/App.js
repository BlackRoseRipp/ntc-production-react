import { Fragment } from "react";
import {BrowserRouter} from "react-router-dom"
import "./App.css";
import BlogDetail from "./components/Blog/BlogDetail";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <div>{routes()}</div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
