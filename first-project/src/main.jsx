import React, { Component } from "react";

import ReactDom, { createRoot }  from "react-dom/client";
import App from "./App";

// Rendernig a Component
createRoot(document.getElementById('root')).render(
    <App></App>
)