import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import MyGames from './components/MyGames';
import GamePage from './components/GamePage';
import GameShop from './components/GameShop';
import MyFavourites from './components/MyFavorites';
import { store, mygames } from './components/Games';


function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path=':slug' element={<GameShop store={store}/>}/>
          <Route path=':slug' element={<MyFavourites mygames={mygames}/>}/>
          <Route path=':slug' element={<MyGames mygames={mygames}/>}/>
          <Route path=':slug' element={<GamePage mygames={mygames}/>}/>
        </Route>
      </Routes>
    );
}

export default App;
