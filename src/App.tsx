import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import GroupPage from "./pages/GroupPage/GroupPage";
import VaronesPage from "./pages/VaronesPage/VaronesPage";
import "./styles/partials/_globals.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/varones" element={<VaronesPage />} />
        <Route path="/grupos/:groupName" element={<GroupPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
