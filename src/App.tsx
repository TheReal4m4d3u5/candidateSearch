import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav /> {/* Render the navigation component */}
      <main  style={{ padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Outlet /> {/* This is where the matched child route will be rendered */}
      </main>
      <footer>
        {/* Add footer content if needed */}
        {/* <p>&copy; {new Date().getFullYear()} Your Company</p> */}
      </footer>
    </>
  );
}

export default App;
