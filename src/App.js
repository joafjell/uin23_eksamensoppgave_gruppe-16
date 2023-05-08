import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    );
}

export default App;
