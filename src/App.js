import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import GameShop from './components/GameShop';
import { store } from './components/Games';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path=':slug' element={<GameShop store={store}/>}/>
        </Route>
      </Routes>
    );
}

export default App;
