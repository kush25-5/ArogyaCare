import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Adjust path if needed
import Frontpage from './components/Frontpage'; // Import your components
import Medibot from './components/Medibot';
import Doctors from './components/VarDoctors/Doctors';
import LoginPage from './components/LoginPage/LoginPage';
import Medmain from './components/Medicine/Medmain';
import SignupPage from './components/Signup/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Frontpage />} /> {/* Default route (e.g., home) */}
      <Route path="mediBot" element={<Medibot />} /> {/* Route for Medbot */}
      <Route path="Doctors List" element={<Doctors />} />
      <Route path="Login" element = {<LoginPage/>}/> 
      <Route path="Medicine" element = {<Medmain/>}/>
      <Route path="SignUp" element = {<SignupPage/>}/>

      {/* Add more child routes here as needed, e.g., <Route path="inventory" element={<Inventory />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
