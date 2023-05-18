import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import GameShop from './components/GameShop';
import { store, mygames } from './components/Games';
import MyFavourites from './components/MyFavourites';
import GamePage from './components/GamePage';
import MyGames from './components/MyGames';
/*har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/App.js som inspirasjon*/


function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/GameShop' element={<GameShop store={store}/>}/>
          <Route path='/MyFavourites' element={<MyFavourites mygames={mygames}/>}/>
          <Route path='/GamePage' element={<GamePage mygames={mygames}/>}/>
          <Route path='/MyGames' element={<MyGames mygames={mygames}/>}/>
        </Route>
      </Routes>
    );
}

export default App;
