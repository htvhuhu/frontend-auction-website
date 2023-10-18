import './App.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './routes/AuthProvider';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router}/> */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
