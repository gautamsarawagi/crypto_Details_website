import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/"><Homepage/></Route>
            <Route exact path="/exchanges"><Exchanges/></Route>
            <Route exact path="/cryptocurrencies"><Cryptocurrencies/></Route>
            <Route exact path="/crypto/:coinId"><CryptoDetails/></Route>
            <Route exact path="/news"><News/></Route>
          </Switch>
        </div>
        </Layout>
      <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
