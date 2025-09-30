import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./pages/Dashboard";
import ServicesPage from "./pages/Services";
import UsersPage from "./pages/Users";
import FactorsPage from "./pages/Factors";
import TagsPage from "./pages/Tags";
import ReportsPage from "./pages/Reports";
import SettingsPage from "./pages/Settings";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="factors" element={<FactorsPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
