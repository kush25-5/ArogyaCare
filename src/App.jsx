import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {AuthProvider} from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./components/Dashboard";
import Frontpage from "./components/Frontpage";
import Medibot from "./components/Medibot";
import Doctors from "./components/VarDoctors/Doctors";
import LoginPage from "./components/LoginPage/LoginPage";
import Medmain from "./components/Medicine/Medmain";
import SignupPage from "./components/Signup/Signup";
import VerifyPage from "./components/LoginPage/VerifyPage";
import MedicinePage from "./components/Medicine/MedicinePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/verify" element={<VerifyPage />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Frontpage />} />
        <Route path="mediBot" element={<Medibot />} />
        <Route path="Doctors List" element={<Doctors />} />
        <Route path="Medicine" element={<Medmain />} />
        <Route path="AboutMed" element={<MedicinePage />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
