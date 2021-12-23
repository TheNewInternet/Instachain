import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import Sidebar from "./pages/sidebar/Sidebar";

//import Market from "./pages/market/Market";
import Social from "./pages/social/Social";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Swap from "./pages/swap/Swap";
import Poker from "./pages/poker/Poker";
import Wallet from "./pages/wallet/Wallet";
import { useState } from "react";

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Social" exact component={Social} />
        <Route path="/Swap" exact component={Swap} />
        <Route path="/Poker" exact component={Poker} />
        <Route path="/About" exact component={About} />
        <Route path="/Wallet" exact component={Wallet} />
      </Switch>
    </>
  );
}
export default Main;
