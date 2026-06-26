import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Chapter from "./pages/Chapter";
import ChapterDetails from "./pages/ChapterDetails";
import Setup from "./pages/Setup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chapters" element={<Chapter />} />
      <Route path="/chapter/:id" element={<ChapterDetails />} />
    </Routes>
  );
}

export default App;