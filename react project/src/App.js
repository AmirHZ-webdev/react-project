import React, { Component } from "react";
import Menu from "./component/menu";
import styles from "./App.module.css";
import Banner from "./component/banner";
import Cards from "./component/cards";
import Search from "./component/search";
import Logo from "./component/logo";
import Footer from "./component/footer";


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Banner />
        <Cards />
        <Search />
        <Logo />
        <Footer />
      </div>
    );
  }
}
export default App;
