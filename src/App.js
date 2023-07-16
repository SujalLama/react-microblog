// library
import Container from "react-bootstrap/Container";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import Loginpage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

export default function App () {

  return <Container fluid className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </Container>
}