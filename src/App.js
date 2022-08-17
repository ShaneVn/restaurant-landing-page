import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Order,
  OrderBody,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div className="h-screen">
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <AboutUs />
              <SpecialMenu />
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <FindUs />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/order"
          element={
            <>
              <Navbar />
              <Order />
              <OrderBody />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
