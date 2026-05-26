import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function PublicLayout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />
      {children}
    </Box>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return <AppRoutes />;
}
