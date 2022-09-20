import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import tasks from "data/tasks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/tasks/:taskId" element={<App />} />
        <Route
          path="*"
          element={<Navigate to={`/tasks/${tasks[0].id}`} replace />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
