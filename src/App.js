// library
import Container from "react-bootstrap/Container";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import Loginpage from "./pages/LoginPage";
import Registerpage from "./pages/RegistrationPage";
import UserPage from "./pages/UserPage";
import ApiProvider from "./contexts/ApiProvider";
import FlashProvider from "./contexts/FlashProvider";
import UserProvider from "./contexts/UserProvider";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import EditUserPage from "./pages/EditUserPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ResetPage from "./pages/ResetPage";
import ResetRequestPage from "./pages/ResetRequestPage";

export default function App () {

  return <Container fluid className="App">
    <BrowserRouter>
      <FlashProvider>
        <ApiProvider>
          <UserProvider>
            <Header />
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Loginpage />} />
                <Route path="/register" element={<Registerpage />} />
                <Route path="/reset" element={<ResetPage />} />
                <Route path="/reset-request" element={<ResetRequestPage />} />
              </Route>

              <Route path="/" element={<PrivateRoute />}>
                  <Route index element={<FeedPage />} />
                  <Route path="explore" element={<ExplorePage />} />
                  <Route path="user/:username" element={<UserPage />} />
                  <Route path="edit" element={<EditUserPage />} />
                  <Route path="password" element={<ChangePasswordPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </UserProvider>
        </ApiProvider>
      </FlashProvider>
    </BrowserRouter>
  </Container>
}