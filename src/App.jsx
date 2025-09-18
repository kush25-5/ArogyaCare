import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Adjust path if needed
import Frontpage from './components/Frontpage'; // Import your components
import Medibot from './components/Medibot';
import Doctors from './components/Doctors';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Frontpage />} /> {/* Default route (e.g., home) */}
      <Route path="medibot" element={<Medibot />} /> {/* Route for Medbot */}
      <Route path="Doctors List" element={<Doctors />} /> 

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
