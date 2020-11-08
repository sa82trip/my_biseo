import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
