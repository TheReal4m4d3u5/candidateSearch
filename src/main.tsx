import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider, Link  } from 'react-router-dom';
import './index.css';

import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';

// App Component defined here
function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        fontSize: '1.2rem'
      }}>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: 'white' }}>Home</Link>
        <Link to="/savedcandidates" style={{ textDecoration: 'none', color: 'white' }}>Potential Candidates</Link>
      </nav>

      {/* Page Title */}
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginTop: '2rem'
      }}>
        Candidate Search
      </h1>

      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CandidateSearch />,
      },
      {
        path: 'savedcandidates', // updated to lowercase for consistency
        element: <SavedCandidates />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}