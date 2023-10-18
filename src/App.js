import './App.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './services/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}

export default App;
